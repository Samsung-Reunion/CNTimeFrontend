interface TeammateProps {
  profile: string;
  name: string;
  time: string;
}

const TeammateCard = ({ profile, name, time }: TeammateProps) => {
  return (
    <div className="h-16 my-3">
      <div className="w-[349px] h-16 bg-[#23262b] flex px-[21px] justify-between items-center  rounded-[13px] border border-[#53575d]">
        <div className="flex justify-center items-center">
          <div className="w-[35px] h-[35px] bg-[#a798ff] rounded-[20px] flex-col justify-center items-center gap-2.5 inline-flex">
            <img
              src={profile}
              className="object-cover w-[35px] h-[35px] rounded-[20px] "
              alt="I"
            />
          </div>
          <div className="text-center text-white text-[17px] pl-[12px] font-medium font-pretendard">
            {name}
          </div>
        </div>
        <div className="text-right text-white text-xl font-semibold font-pretendard">
          {time}
        </div>
      </div>
    </div>
  );
};
export default TeammateCard;
