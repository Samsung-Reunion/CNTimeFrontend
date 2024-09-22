import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSharedState } from '../StateContext';
import CircularProgressBar from '../components/circularProgressbar';
import { formatTime } from '../utils/utils';

const RestTimerPage = () => {
  const { sharedTimerState, setSharedTimerState } = useSharedState();
  const navigate = useNavigate();

  // basic values
  const restMinutesFixed = 0.05;
  const target_goal = sharedTimerState.current_goal;

  const [isDone, setIsDone] = useState<boolean>(false);
  const [restMinutes] = useState<number>(restMinutesFixed);
  const [time, setTime] = useState<number>(restMinutes * 60);
  const [maxTime] = useState<number>(time);
  const [timeInterval, setTimeInterval] = useState<number>(-1);
  const [nextStepTime, setNextStepTime] = useState<number>(10);
  const [nextTimeInterval, setNextTimeInterval] = useState<number>(-1);

  const [nextTurnFlag, setNextTurnFlag] = useState<boolean>(false);

  useEffect(() => {
    if (time > 0 && timeInterval == -1) {
      setTimeInterval(
        setInterval(() => {
          setTime((prevTime) => prevTime - 1);
        }, 1000)
      );
    } else if (time === 0 && !isDone && timeInterval != -1) {
      // rest end
      clearInterval(timeInterval);
      setTimeInterval(-1);

      setTimeout(() => {
        setIsDone(true);
      }, 2000);
    }

    if (isDone && nextStepTime > 0 && nextTimeInterval == -1) {
      setNextTimeInterval(
        setInterval(() => {
          setNextStepTime((prevTime) => prevTime - 1);
        }, 1000)
      );
    } else if (nextStepTime === 0 && nextTimeInterval != -1 && !nextTurnFlag) {
      clearInterval(nextTimeInterval);
      setNextTimeInterval(-1);
      setNextTurnFlag(true);

      setTimeout(() => {
        navigate('/runtimer');
      }, 1000);
    }
  }, [
    time,
    isDone,
    timeInterval,
    setSharedTimerState,
    setTimeInterval,
    setTime,
    navigate,
    nextStepTime,
    nextTimeInterval,
    nextTurnFlag,
  ]);

  // UI time calculation
  const total_hour = Math.floor(sharedTimerState.total_work_time / (60 * 60));
  const total_minute = Math.floor((sharedTimerState.total_work_time / 60) % 60);
  const total_second = sharedTimerState.total_work_time % 60;

  function handleStartImmed() {
    navigate('/runtimer');
  }

  return (
    <div className="w-full h-full">
      <div className="flex flex-col justify-top items-center">
        {!isDone ? (
          <div className="flex flex-col justify-top items-center w-full h-full ">
            <div className="flex flex-row font-pretendard gap-4 text-lg font-medium justify-center items-end mt-28 mb-6 h-10">
              지금까지
              <div
                id="totalTimeBox"
                className={
                  'p-3 py-2 font-pretendard text-white font-bold bg-cntimer-totalbg-grey rounded-lg ' +
                  (total_hour / 10 >= 1 ? 'text-xl' : 'text-2xl')
                }
              >
                {total_hour === 0 ? '' : total_hour + '시간 '}{' '}
                {total_minute === 0 ? '' : total_minute + '분 '} {total_second}
                초
              </div>
              집중했어요
            </div>
            <CircularProgressBar
              percentage={(time / maxTime) * 100}
              timeText={formatTime(time)}
            />
          </div>
        ) : (
          <div className="flex flex-col justify-top items-center w-full h-full">
            <div className="text-2xl font-bold text-white mt-28 mb-6 h-10">
              휴식시간이 종료되었어요
            </div>
            <div className="relative">
              <CircularProgressBar percentage={100} timeText={''} />
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-3/4 text-center">
                <div className="flex flex-row gap-2 justify-center items-center">
                  <svg
                    className="transform"
                    width="60"
                    height="40"
                    viewBox="0 0 60 40"
                  >
                    <defs>
                      {/* 그라데이션 정의 */}
                      <linearGradient
                        id="textGradient"
                        x1="0%"
                        y1="30%"
                        x2="100%"
                        y2="70%"
                      >
                        <stop offset="0%" stopColor="#B9DBFF" />
                        <stop offset="47%" stopColor="#7883FF" />
                        <stop offset="100%" stopColor="#4CF7C7" />
                      </linearGradient>
                    </defs>
                    <text
                      x="50%"
                      y="55%"
                      fill="url(#textGradient)"
                      dominantBaseline="middle"
                      textAnchor="middle"
                      className="font-pretendard text-3xl text-center font-bold "
                      style={{ border: 'transparent' }}
                    >
                      {nextStepTime + '초'}
                    </text>
                  </svg>{' '}
                  뒤에
                </div>
                <div className="mt-1">타이머가 시작됩니다</div>
              </div>
            </div>
          </div>
        )}

        <h4 className="font-pretendard text-base text-cntimer-skyblue text-center font-medium mb-1 -mt-4">
          이번 목표
        </h4>
        <h1 className="font-pretendard text-2xl font-semibold mb-16">
          {target_goal}
        </h1>
        <button
          onClick={handleStartImmed}
          className={
            'active:scale-98 transition-transform text-white-700 mb-6 from-cntimer-skyblue to-cntimer-blue bg-gradient-to-br w-52 h-14 rounded-xl text-center flex justify-center items-center font-pretendard text-base font-bold '
          }
        >
          바로 시작하기
        </button>
        <Link
          id="finishTaskLink"
          to="/finishtask"
          className="flex justify-center items-center gap-2 text-lg font-semibold md:text-base underline text-cntimer-main-grey underline-offset-8"
        >
          이번 목표 끝내기
        </Link>
      </div>
    </div>
  );
};

export default RestTimerPage;
