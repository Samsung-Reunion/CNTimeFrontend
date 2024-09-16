import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CircularProgressBar from "../components/circularProgressbar";

const RunTimerPage = () => {
  // 20분은 1200초입니다 (20분 * 60초). => 기본 25분 아닌가요 ㅇㅅㅇ
  const [customMinutes] = useState<number>(2);
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

    return () => {
      if (interval) clearInterval(interval);
    };
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
    <div className="flex flex-col justify-center items-center w-full h-full">
      <h1 className="text-4xl text-indigo-500">집중 time </h1>
      <CircularProgressBar
        percentage={(time / maxTime) * 100}
        timeText={formatTime(time)}
      />
      <button onClick={toggleTimer} className="text-3xl text-indigo-700 mb-4">
        {isActive ? "Pause" : "Start"}
      </button>
      <Link
        to="/breaktimer"
        className="flex justify-center items-center gap-2 text-lg font-semibold md:text-base">
        <p className="text-2xl text-indigo-700">휴식하기</p>
      </Link>
      {isActive ? (
        <></>
      ) : (
        <Link
          to="/finishtask"
          className="flex justify-center items-center gap-2 text-lg font-semibold md:text-base">
          <p className="text-2xl text-indigo-700">그만두기</p>
        </Link>
      )}
    </div>
  );
};

export default RunTimerPage;
