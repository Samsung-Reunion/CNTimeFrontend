import { useState } from 'react';

const MAX_LINES = 5;

interface TextareaWithCharLimitProps {
  maxChars: number;
  onTextChange: (text: string) => void; // 상위 컴포넌트에서 문자 수를 전달받기 위한 함수
}

const TextareaWithUnderline: React.FC<TextareaWithCharLimitProps> = ({
  maxChars,
  onTextChange,
}) => {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length <= maxChars) {
      setText(newText);
      onTextChange(newText); // 상위 컴포넌트로 현재 텍스트를 전달
    }
  };

  return (
    <textarea
      className="w-full h-32 bg-transparent border-none outline-none resize-none text-white font-gangwon_eduall text-base font-light tracking-wide"
      value={text}
      onChange={handleChange}
      style={{
        backgroundImage:
          'linear-gradient(to bottom, transparent 95%, #3a3d43 95%)',
        backgroundSize: '100% 1.5em', // 1.5em마다 밑줄이 반복되도록 설정
        lineHeight: '1.5em', // 줄 간격과 일치시켜 밑줄을 자연스럽게 배치
        height: 1.5 * MAX_LINES + 'em', // 5줄 높이에 맞게 설정
        backgroundAttachment: 'local', // 스크롤 시 배경이 함께 움직이도록 설정
        overflowY: 'scroll', // 스크롤 기능을 유지
        scrollbarWidth: 'none', // Firefox용 스크롤바 숨기기
        color: '#ABAEB3',
      }}
      placeholder="작업에 관한 설명을 적어주세요."
    />
  );
};

export default TextareaWithUnderline;
