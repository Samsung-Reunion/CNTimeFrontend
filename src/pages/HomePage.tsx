import { Link } from "react-router-dom";
import "../index.css";

const HomePage = () => {
  return (
    <div>
      <h2>오늘의 집중 타이머</h2>
      <h1>00:00:00</h1>
      <Link
        to="/runtimer"
        className="flex items-center gap-2 text-lg font-semibold md:text-base">
        <p className="text-2xl text-green-500">시작하기</p>
      </Link>
    </div>
  );
};

export default HomePage;
