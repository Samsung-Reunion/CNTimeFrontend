import React from 'react';

const GoalModal = ({
  isOpen,
  onConfirm,
  onCancel,
  targetGoal,
}: {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  targetGoal: string;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="flex flex-col justify-center items-center bg-cntimer-bg-dark-grey rounded-lg shadow-lg px-4 py-5 max-w-modal w-full gap-5">
        <div className="w-full h-full mt-4 flex justify-center items-center font-pretendard font-medium text-white">
          목표를 달성하셨나요?
        </div>
        <div className="w-full flex flex-col justify-top items-start px-5 bg-cntimer-bg-goal-text-grey gap-2 py-5 min-h-32 rounded-lg">
          <div className="font-pretendard text-cntimer-skyblue font-medium text-sm">
            이번 목표
          </div>
          <div className="font-pretendard text-white font-medium text-lg">
            {targetGoal}
          </div>
        </div>
        <div className="flex w-full justify-center gap-2">
          <button
            className="w-full px-10 py-2 bg-cntimer-bg-dark-grey text-white rounded-md hover:bg-cntimer-bg-dark-grey-hovered border-cntimer-main-grey border text-lg font-bold font-pretendard flex justify-center items-center"
            onClick={onCancel}
          >
            아니오
          </button>
          <button
            className="w-full px-10 py-2 bg-white text-black rounded-md hover:bg-cntimer-lightgrey text-lg font-bold font-pretendard flex justify-center items-center"
            onClick={onConfirm}
          >
            예
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoalModal;
