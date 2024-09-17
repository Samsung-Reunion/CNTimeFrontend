import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RoundedBtn from '../components/RoundedBtn';

const ProjectNamePage = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [text, setText] = useState('');
  // 입력 값이 변경될 때 호출되는 함수
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value); // 입력된 텍스트를 상태로 저장
  };

  const onClick = () => {
    navigate('/projectcode');
  };
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="w-[349px] text-white text-[15px] font-medium font-['Pretendard']">
        프로젝트 이름을 입력해주세요
      </div>
      <div className="relative">
        <input
          type="text"
          value={text}
          onChange={handleChange}
          maxLength={30}
          placeholder="프로젝트 이름을 입력해주세요..."
          className="w-[349px] h-[50px] pl-[17px] pr-[18px] pt-[15px] pb-4 mt-[10px] mb-[25px] bg-[#23262b] text-white text-base font-semibold font-['Pretendard'] rounded-[10px] justify-center items-start gap-[242px] inline-flex"
        />
        <div className="text-right text-[#6b727f] text-[13px] font-normal font-['Pretendard'] absolute right-5 bottom-10 tracking-tight">
          {text.length}/30
        </div>
      </div>

      <RoundedBtn text="프로젝트 생성하기" onClick={onClick} />
    </div>
  );
};

export default ProjectNamePage;
