import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const EnterNamePage = () => {
  const [text, setText] = useState('');
  // 입력 값이 변경될 때 호출되는 함수
  const [isInputEmpty, setIsInputEmpty] = useState(false); // for alert
  const [isFocused, setIsFocused] = useState(false);
  const maxLength = 10; // 최대 글자 수 설정

  const handleCheckInput = (e: React.MouseEvent) => {
    if (text.trim() === '') {
      e.preventDefault();
      setIsInputEmpty(true);
    } else {
      setIsInputEmpty(false);
    }
  };
  return (
    <div className="flex flex-col justify-start items-center w-full h-full">
      <Navigation canNavigateBack={true} />
      <div className="flex flex-col justify-center items-center h-full">
        <div className="text-white text-[15px] self-start font-medium font-['Pretendard']">
          이름을 입력하세요
        </div>
        <div className="relative mb-6 mt-[10px]">
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              if (e.target.value.trim() === '') {
                setIsInputEmpty(true);
              } else {
                setIsInputEmpty(false);
              }
            }}
            placeholder="이름을 입력하세요..."
            className={
              ' w-96 p-3 pl-5 pr-16 rounded-lg border bg-cntimer-grey focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent  text-white placeholder-gray-400 transition-all duration-200 font-pretendard font-semibold text-base' +
              `border ${
                isInputEmpty ? 'border-red-600' : 'border-cntimer-grey'
              } ${isInputEmpty && !isFocused ? 'animate-pulse' : ''}`
            }
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            maxLength={maxLength}
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm font-pretendard">
            {text.length} / {maxLength}
          </span>
        </div>
        <Link
          to="/createorjoin"
          state={{ target_goal: text }}
          className="w-96 p-3 px-5 text-white bg-cntimer-blue rounded-full font-pretendard font-bold text-base text-center transition transform hover:bg-cntimer-blue-semidark  focus:outline-none focus:ring-2 focus:ring-blue-400 active:scale-99"
          onClick={handleCheckInput}
        >
          시작하기
        </Link>
      </div>
    </div>
  );
};

export default EnterNamePage;
