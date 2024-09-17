import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleGoBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };
  return (
    <header className="header">
      <div className="w-[392.86px] h-[52px] pl-6 pr-[352.86px] justify-start items-center inline-flex">
        <button
          onClick={handleGoBack}
          className="w-4 h-3 relative flex-col justify-start items-start flex"
        >
          &lt;
        </button>
      </div>
    </header>
  );
};

export default Header;
