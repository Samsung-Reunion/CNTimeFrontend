import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RunTimerPage = () => {
  // 20분은 1200초입니다 (20분 * 60초).
  const [time, setTime] = useState<number>(1200);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let interval = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000); // 1초마다 실행
    } else if (time === 0 && interval) {
      clearInterval(interval);
      setIsActive(false);
    }
    if (interval) return () => clearInterval(interval);
  }, [isActive, time]);
  // 타이머 시작 및 중지
  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  // 시간을 분:초 형식으로 변환하는 함수
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div>
      <h1>집중 time </h1>
      <h1>{formatTime(time)}</h1>
      <button onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</button>
      <Link
        to="/breaktimer"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <p className="text-2xl text-green-500">휴식하기</p>
      </Link>
      {isActive ? (
        <></>
      ) : (
        <Link
          to="/finishtask"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <p className="text-2xl text-green-500">그만두기</p>
        </Link>
      )}
    </div>
  );
};

export default RunTimerPage;
