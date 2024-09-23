import { useLocation, useNavigate } from 'react-router-dom';
import { useSharedState } from '../StateContext';
import fanfareImage from '../assets/fanfare.png';
import targetImage from '../assets/target.png';
import finishMarkImage from '../assets/finishMark.png';
import fireImage from '../assets/fire.png';
import TextareaWithUnderline from '../components/TextareaWithUnderline';
import { useState } from 'react';
import { formatTimeHours } from '../utils/utils';

const FinishTaskPage = () => {
  // Global State
  const { sharedTimerState, sharedGlobalState, setSharedGlobalState } =
    useSharedState();

  // get local data
  const location = useLocation();
  const { isGoalCleared } = location.state;

  const navigate = useNavigate();
  const project_name = sharedGlobalState.current_project_name;
  const target_goal = sharedTimerState.current_goal;
  const [text, setText] = useState<string>('');

  const focus_time = formatTimeHours(sharedTimerState.total_work_time);

  const handleFinish = () => {
    setSharedGlobalState((prevState) => ({
      ...prevState,
      overall_work_time_today:
        sharedGlobalState.overall_work_time_today +
        sharedTimerState.total_work_time,
    }));
    navigate('/');
  };

  // text input
  const MAX_CHARS = 150;
  const handleTextChange = (newText: string) => {
    setText(newText);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full px-4">
      <div className="flex flex-col justify-center items-center gap-4 mb-10">
        <img
          src={isGoalCleared ? fanfareImage : fireImage}
          alt="fanfare"
          width="40rem"
        />
        <svg className="transform" width="300" height="40" viewBox="0 0 300 40">
          <defs>
            {/* 그라데이션 정의 */}
            <linearGradient
              id="textGradient"
              x1="0%"
              y1="45%"
              x2="100%"
              y2="55%"
            >
              <stop offset="0%" stopColor="#E3F0FF" />
              <stop offset="47%" stopColor="#AABBFF" />
              <stop offset="100%" stopColor="#9AFFE2" />
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="50%"
            fill="url(#textGradient)"
            dominantBaseline="middle"
            textAnchor="middle"
            className="font-pretendard text-3xl text-center font-bold "
            style={{ border: 'transparent' }}
          >
            {isGoalCleared ? '축하합니다!' : '목표를 향해 달려가는 중'}
          </text>
        </svg>
      </div>
      <div
        className="w-full h-fit flex flex-col bg-cntimer-bg-dark-grey rounded-xl px-6 py-6 border-t-2 border-r border-l border-cntimer-bg-goal-text-grey mb-16"
        id="informationBox"
      >
        <div
          className={
            'flex flex-row justify-between items-center ' +
            (isGoalCleared ? '' : 'mb-5')
          }
        >
          <span className="font-pretendard font-bold rounded-full text-white px-3 py-1 bg-gray-600 text-sm text-center ">
            {project_name}
          </span>
          {isGoalCleared ? (
            <img
              src={finishMarkImage}
              alt="finishMark"
              width="48rem"
              className="-mr-2"
            />
          ) : (
            <div className="font-pretendard font-medium text-cntimer-skyblue">
              진행 중
            </div>
          )}
        </div>
        <div className="flex flex-row justify-start items-center gap-3 mb-10">
          <img src={targetImage} alt="target" width="28rem" />
          <span className="font-pretendard text-cntimer-lightgrey font-medium text-lg">
            {target_goal}
          </span>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center mb-6">
          <div className="flex flex-row w-full justify-between items-center font-pretendard text-cntimer-main-grey text-sm font-medium">
            <span>한 일이 있다면 적어주세요.</span>
            <div>
              {text.length}/{MAX_CHARS}
            </div>
          </div>
          <TextareaWithUnderline
            maxChars={MAX_CHARS}
            onTextChange={handleTextChange}
          />
        </div>
        <div className="flex flex-row justify-center items-center w-full h-fit bg-cntimer-bg-goal-text-grey rounded-xl border-t-2 border-r border-l border-cntimer-bg-finish-goaltext py-3 gap-6">
          <div className="text-cntimer-lightgrey font-pretendard text-sm font-semibold">
            집중
            <br />
            시간
          </div>
          <div className="font-pretendard font-semibold text-4.5xl">
            {focus_time}
          </div>
        </div>
      </div>
      <button
        onClick={handleFinish}
        className={
          'active:scale-98 transition-transform text-white-700 mb-6 from-cntimer-skyblue to-cntimer-blue bg-gradient-to-br w-52 h-14 rounded-xl text-center flex justify-center items-center font-pretendard text-base font-bold '
        }
      >
        완료
      </button>
    </div>
  );
};

export default FinishTaskPage;
