import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CircularProgressBar from '../components/circularProgressbar';
import ActiveUser from '../components/activeUser';
import Navigation from '../components/navigation';
import doneImage from '../assets/done.png';
import { useSharedState } from '../StateContext';
import { formatTime } from '../utils/utils';

const RunTimerPage = () => {
  // Global State
  const { sharedTimerState, setSharedTimerState } = useSharedState();

  const navigate = useNavigate();
  const target_goal = sharedTimerState.current_goal;

  const ppomoMinutesFixed = 0.1;
  const delayFinishTime = 3000;

  const [ppomoMinutes] = useState<number>(ppomoMinutesFixed);
  const [time, setTime] = useState<number>(ppomoMinutes * 60);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [maxTime] = useState<number>(time);
  const [timeInterval, setTimeInterval] = useState<number>(-1);

  const testUsers = [
    { userId: 1, userName: '팀원 1', activeStatus: true },
    { userId: 2, userName: '팀원 2', activeStatus: false },
    { userId: 3, userName: '팀원 3', activeStatus: true },
    { userId: 4, userName: '팀원 4', activeStatus: false },
  ];

  useEffect(() => {
    if (isActive && time > 0 && timeInterval == -1) {
      setTimeInterval(
        setInterval(() => {
          setTime((prevTime) => prevTime - 1);
          console.log('HI');
        }, 1000)
      );
    } else if (time === 0 && isActive && timeInterval != -1) {
      // Timer is off, time to rest
      setIsActive(false);
      console.log('clear');
      clearInterval(timeInterval);
      setTimeInterval(-1);

      // Wait for animation finish
      setTimeout(() => {
        setIsDone(true);

        // move to rest page
        setTimeout(() => {
          setSharedTimerState((prevState) => ({
            ...prevState,
            total_work_time:
              sharedTimerState.total_work_time + Math.floor(maxTime - time),
            total_turn: sharedTimerState.total_turn + 1,
          }));
          navigate('/resttimer');
        }, delayFinishTime);
      }, 2000);
    }

    if (!isActive && timeInterval != -1) {
      clearInterval(timeInterval);
      setTimeInterval(-1);
    }
  }, [
    isActive,
    time,
    ppomoMinutes,
    setSharedTimerState,
    setIsDone,
    sharedTimerState,
    navigate,
    timeInterval,
    maxTime,
  ]);

  // 타이머 시작 및 중지
  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="w-full h-full">
      {!isDone ? (
        <div
          id="timerDiv"
          className="flex flex-col justify-top items-center w-full h-full"
        >
          <Navigation
            canNavigateBack={false}
            currentProjectName={'프로젝트명'}
          />
          <div className="flex flex-row justify-start items-center w-full h-fit gap-2 mb-7">
            {testUsers.map((item) => (
              <ActiveUser
                key={item.userId}
                userName={item.userName}
                activeStatus={item.activeStatus}
              />
            ))}
          </div>
          <CircularProgressBar
            percentage={(time / maxTime) * 100}
            timeText={formatTime(time)}
          />
          <h4 className="font-pretendard text-base text-cntimer-skyblue text-center font-medium mb-1 -mt-4">
            이번 목표
          </h4>
          <h1 className="font-pretendard text-2xl font-semibold mb-16">
            {target_goal}
          </h1>
          <button
            onClick={toggleTimer}
            disabled={time === 0 ? true : false}
            className={
              'active:scale-98 transition-transform text-white-700 mb-6 from-cntimer-skyblue to-cntimer-blue bg-gradient-to-br w-52 h-14 rounded-xl text-center flex justify-center items-center ' +
              (isActive ? 'text-5xl' : 'text-4xl')
            }
          >
            {isActive ? '⏸︎' : '▶'}
          </button>
          {!isActive && time !== 0 && (
            <Link
              id="finishTaskLink"
              to="/finishtask"
              className="flex justify-center items-center gap-2 text-lg font-semibold md:text-base underline text-cntimer-main-grey underline-offset-8"
            >
              이번 뽀모 끝내기
            </Link>
          )}
        </div>
      ) : (
        <div
          id="doneDiv"
          className="flex flex-col gap-2 justify-center items-center w-full h-full"
        >
          <img src={doneImage} alt="done" className="w-1/3 mb-6" />
          <span className="font-pretendard text-2xl font-bold text-white">
            수고하셨어요 🎉
          </span>
          <span className="font-pretendard text-base text-cntimer-lightgrey font-medium">
            지금부터 휴식시간이 시작됩니다!
          </span>
        </div>
      )}
    </div>
  );
};

export default RunTimerPage;
