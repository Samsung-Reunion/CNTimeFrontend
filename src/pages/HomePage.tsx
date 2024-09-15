import { Link } from "react-router-dom";
import "../index.css";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <h2 className="text-4xl mb-4">오늘의 집중 타이머</h2>
      <h1 className="text-3xl mb-16">00:00:00</h1>
      <Link
        to="/runtimer"
        className="flex justify-center items-center gap-2 text-lg font-semibold md:text-base">
        <p className="text-2xl text-indigo-700">시작하기</p>
      </Link>
    </div>
  );
};

export default HomePage;
