import { Link } from 'react-router-dom';

const FinishTaskPage = () => {
  return (
    <div>
      <h2>일 끝!</h2>
      <h1>00:00:00</h1>
      <Link
        to="/"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <p className="text-2xl text-green-500">완료</p>
      </Link>
    </div>
  );
};

export default FinishTaskPage;
