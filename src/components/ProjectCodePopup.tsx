import { useRef } from 'react';

interface ProjectCodePopupProps {
  open: boolean;
  setOpen: (arg0: boolean) => void;
}

const ProjectCodePopup = ({ open, setOpen }: ProjectCodePopupProps) => {
  const projectCode = '012452';
  const handleCloseClick = () => {
    setOpen(false); // 팝업창 닫기
  };

  // 텍스트를 담을 참조
  const textRef = useRef<HTMLDivElement | null>(null);
  // 복사하는 함수
  const handleCopy = () => {
    if (textRef.current) {
      // 텍스트를 클립보드에 복사
      navigator.clipboard
        .writeText(textRef.current.innerText)
        .then(() => {
          alert('텍스트가 복사되었습니다!');
        })
        .catch((err) => {
          console.error('복사 실패:', err);
        });
    }
  };

  if (open)
    return (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[316px] h-[245px] bg-[#23262b] rounded-[15px]">
        <div className="w-[284px] left-[16px] top-[24px] absolute text-center text-white text-sm font-normal font-['Pretendard']">
          프로젝트 코드를 공유하세요!
        </div>
        <button
          onClick={() => handleCloseClick()}
          className="w-[284px] h-10 py-[18px] left-[16px] top-[189px] absolute bg-white rounded-lg justify-center items-center gap-2 inline-flex"
        >
          <text className="text-center text-[#101212] text-base font-semibold font-['Pretendard']">
            닫기
          </text>
        </button>
        <div className="w-[283px] h-[117px] left-[16px] top-[54px] absolute bg-white/10 rounded-lg border border-white/10">
          <button
            onClick={handleCopy}
            className="left-[180px] top-[14px] absolute text-right text-[#6b727f] text-xs font-normal font-['Pretendard'] tracking-tight"
          >
            초대코드 복사하기
          </button>
          <div
            ref={textRef}
            className="w-[218px] left-[33px] top-[37px] absolute text-center text-white text-4xl font-semibold font-['Pretendard'] tracking-wide"
          >
            {projectCode}
          </div>
        </div>
      </div>
    );
};

export default ProjectCodePopup;
