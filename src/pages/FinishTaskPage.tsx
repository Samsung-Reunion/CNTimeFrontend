import { Link } from "react-router-dom";
import CircularProgressBar from "../components/circularProgressbar";

const FinishTaskPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <h2 className="text-4xl text-indigo-500">일 끝!</h2>
      <CircularProgressBar percentage={0} timeText={"00:00:00"} />
      <Link
        to="/"
        className="flex items-center gap-2 text-lg font-semibold md:text-base">
        <p className="text-2xl text-indigo-500">완료</p>
      </Link>
    </div>
  );
};

export default FinishTaskPage;
