import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CircularProgressBar from "../components/circularProgressbar";

const BreakTimerPage = () => {
  // 5분은 300초입니다 (5분 * 60초).
  const [customMinutes] = useState<number>(1);
  const [time, setTime] = useState<number>(customMinutes * 60);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [maxTime] = useState<number>(time);

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
  // 타이머s 시작 및 중지
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
    <div className="flex flex-col justify-center items-center w-full h-full">
      <h1 className="text-4xl text-indigo-500">휴식 time </h1>
      <CircularProgressBar
        percentage={(time / maxTime) * 100}
        timeText={formatTime(time)}
      />
      <button onClick={toggleTimer} className="text-2xl text-indigo-500 mb-4">
        {isActive ? "Pause" : "Start"}
      </button>
      {isActive ? (
        <></>
      ) : (
        <Link
          to="/runtimer"
          className="flex items-center gap-2 text-lg font-semibold md:text-base">
          <p className="text-2xl text-indigo-500">일 시작하기</p>
        </Link>
      )}
    </div>
  );
};

export default BreakTimerPage;
