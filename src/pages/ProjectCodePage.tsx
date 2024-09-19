import { useRef } from 'react';
import RoundedBtn from '../components/RoundedBtn';
import { useNavigate } from 'react-router-dom';

const ProjectCodePage = () => {
  const projectCode = '012452';
  const navigate = useNavigate(); // useNavigate 훅 사용
  const onClick = () => {
    navigate('/home');
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

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="w-[349px] text-white text-[15px] mb-[10px] font-medium font-['Pretendard']">
        프로젝트 코드를 프로젝트 팀원에게 공유하세요!
      </div>
      <div className="w-[349px] h-[136px] relative bg-[#23262b] rounded-[15px]">
        <div
          ref={textRef}
          className="left-[97px] top-[43px] absolute text-center text-white text-[42px] font-semibold font-['Pretendard'] tracking-wider"
        >
          {projectCode}
        </div>
        <button
          onClick={handleCopy}
          className="left-[234px] top-[16.50px] absolute text-right text-[#6b727f] text-[13px] font-normal font-['Pretendard'] tracking-tight"
        >
          초대코드 복사하기
        </button>
      </div>

      <div className="h-[25px]" />
      <RoundedBtn text="프로젝트 시작하기" onClick={onClick} />
    </div>
  );
};

export default ProjectCodePage;
