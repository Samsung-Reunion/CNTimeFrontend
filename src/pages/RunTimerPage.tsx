import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CircularProgressBar from '../components/circularProgressbar';
import ActiveUser from '../components/activeUser';
import Navigation from '../components/navigation';
import doneImage from '../assets/done.png';
import { useSharedState } from '../StateContext';

const RunTimerPage = () => {
  // Global State
  const { sharedTimerState, setSharedTimerState } = useSharedState();

  const navigate = useNavigate();
  const target_goal = sharedTimerState.current_goal;

  const ppomoMinutesFixed = 2;
  const delayFinishTime = 3000;

  const [ppomoMinutes] = useState<number>(ppomoMinutesFixed);
  const [time, setTime] = useState<number>(ppomoMinutes * 60);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [maxTime] = useState<number>(time);

  const testUsers = [
    { userId: 1, userName: '팀원 1', activeStatus: true },
    { userId: 2, userName: '팀원 2', activeStatus: false },
    { userId: 3, userName: '팀원 3', activeStatus: true },
    { userId: 4, userName: '팀원 4', activeStatus: false },
  ];

  useEffect(() => {
    let interval = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0 && interval) {
      // Timer is off, time to rest
      clearInterval(interval);
      setIsActive(false);
      setIsDone(true);

      // move to rest page
      setInterval(() => {
        setSharedTimerState((prevState) => ({
          ...prevState,
          total_work_time: sharedTimerState.total_work_time + ppomoMinutes,
        }));
        navigate('/restTimer');
      }, delayFinishTime);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [
    isActive,
    time,
    ppomoMinutes,
    setSharedTimerState,
    sharedTimerState,
    navigate,
  ]);

  // 타이머 시작 및 중지
  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  // 시간을 분:초 형식으로 변환하는 함수
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
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
          <div className="flex flex-row justify-start items-center w-full h-fit gap-2 mb-8">
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
            className={
              'active:scale-98 transition-transform text-white-700 mb-6 from-cntimer-skyblue to-cntimer-blue bg-gradient-to-br w-52 h-14 rounded-xl text-center flex justify-center items-center ' +
              (isActive ? 'text-5xl' : 'text-4xl')
            }
          >
            {isActive ? '⏸︎' : '▶'}
          </button>
          {!isActive && (
            <Link
              id="finishTaskLink"
              to="/finishtask"
              className="flex justify-center items-center gap-2 text-lg font-semibold md:text-base underline text-cntimer-main-grey underline-offset-8"
            >
              이번 목표 끝내기
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
