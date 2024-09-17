interface TeammateProps {
  profile: string;
  name: string;
  time: string;
}

const TeammateCard = ({ profile, name, time }: TeammateProps) => {
  return (
    <div className="h-16 my-3">
      <div className="w-[349px] h-16 bg-[#23262b] flex inline-flex px-[21px] justify-between items-center  rounded-[13px] border border-[#53575d]">
        <div className="flex justify-center items-center">
          <div className="w-[35px] h-[35px] px-[13px] py-[7px] bg-[#a798ff] rounded-[20px] flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-[#6050be] text-[22px] font-semibold font-['Pretendard']">
              {profile}
            </div>
          </div>
          <div className="text-center text-white text-[17px] pl-[12px] font-medium font-['Pretendard']">
            {name}
          </div>
        </div>
        <div className="text-right text-white text-xl font-semibold font-['Pretendard']">
          {time}
        </div>
      </div>
    </div>
  );
};
export default TeammateCard;
