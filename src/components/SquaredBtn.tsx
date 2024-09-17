interface BtnProps {
  text: string; // percentage의 타입을 명시적으로 지정
  onClick: () => void;
}

const SquaredBtn = ({ text, onClick }: BtnProps) => {
  return (
    <button onClick={onClick}>
      <div className="w-[349px] h-[52px] px-4 bg-[#3e22ec] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
        <div className="text-center text-white text-[17px] font-semibold font-['Pretendard']">
          {text}
        </div>
      </div>
    </button>
  );
};
export default SquaredBtn;
