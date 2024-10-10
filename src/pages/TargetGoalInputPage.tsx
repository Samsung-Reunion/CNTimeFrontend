import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Navigation from '@components/Navigation';
import { useSharedState } from '@/StateContext';
import '@/index.css';

const TargetGoalInputPage = () => {
  const location = useLocation();
  const { current_project } = location.state || {}; // state에서 target_goal을 가져옴
  const [inputValue, setInputValue] = useState('');
  const [isInputEmpty, setIsInputEmpty] = useState(false); // for alert
  const [isFocused, setIsFocused] = useState(false);
  const maxLength = 50; // 최대 글자 수 설정

  // Global State
  const { setSharedTimerState } = useSharedState();

  const handleCheckInput = (e: React.MouseEvent) => {
    if (inputValue.trim() === '') {
      e.preventDefault();
      setIsInputEmpty(true);
    } else {
      setIsInputEmpty(false);
      setSharedTimerState({
        total_work_time: 0,
        current_goal: inputValue.trim(),
        total_turn: 0,
      });
    }
  };

  return (
    <div className="flex flex-col justify-top items-center w-full h-full">
      <Navigation canNavigateBack={true} />
      <div className="flex justify-center items-center mt-36 mb-8">
        <div
          className="absolute w-12 h-12 rounded-full"
          style={{
            background:
              'linear-gradient(131.13deg, rgba(106, 178, 255, 0.8) 2.69%, rgba(59, 75, 255, 0.8) 51.6%, rgba(61, 224, 177, 0.8) 106.76%)',
            filter: 'blur(26px)',
          }}
        >
          {/* <div className="absolute self-center w-32 h-32 rounded-full"></div> */}
        </div>
        <div className="relative">
          <h2 className="text-6xl">🎯</h2>
        </div>
      </div>
      <h2 className="text-2xl text-white font-pretendard font-semibold mb-12">
        목표를 입력해주세요
      </h2>
      <div className="relative w-96 mb-6">
        <input
          className={
            ' w-96 p-3 pl-5 pr-16 rounded-lg border bg-cntimer-grey focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent  text-white placeholder-gray-400 transition-all duration-200 font-pretendard font-bold text-base' +
            `border ${
              isInputEmpty ? 'border-red-600' : 'border-cntimer-grey'
            } ${isInputEmpty && !isFocused ? 'animate-pulse' : ''}`
          }
          id="goal_input"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            if (e.target.value.trim() === '') {
              setIsInputEmpty(true);
            } else {
              setIsInputEmpty(false);
            }
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="열나게 개뽀 뽀샤버리기! 😎"
          maxLength={50}
        />
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm font-pretendard">
          {inputValue.length} / {maxLength}
        </span>
      </div>

      <Link
        to="/runtimer"
        state={{ target_goal: inputValue, current_project: current_project }}
        className="w-96 p-3 px-5 text-white bg-cntimer-blue rounded-full font-pretendard font-bold text-base text-center transition transform hover:bg-cntimer-blue-semidark  focus:outline-none focus:ring-2 focus:ring-blue-400 active:scale-99"
        onClick={handleCheckInput}
      >
        넘어가기
      </Link>
    </div>
  );
};

export default TargetGoalInputPage;
