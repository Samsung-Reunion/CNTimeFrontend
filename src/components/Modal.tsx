import React from 'react';

const Modal = ({
  isOpen,
  onConfirm,
  onCancel,
  children,
}: {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="flex flex-col justify-center items-center bg-cntimer-bg-dark-grey rounded-lg shadow-lg px-1 py-5 max-w-modal w-full gap-6">
        <div className="w-full h-full mt-1 flex justify-center items-center">
          {children}
        </div>
        <div className="flex w-full justify-center gap-2 px-4">
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

export default Modal;
