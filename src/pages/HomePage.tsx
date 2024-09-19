import TeammateCard from '../components/TeammateCard';

const HomePage = () => {
  const focusTime = '01:00:14';
  const teammates = [
    {
      profile: 'C',
      name: '최소정',
      time: '01:11:24',
    },
    {
      profile: 'I',
      name: '임채림',
      time: '01:00:04',
    },
    {
      profile: 'K',
      name: '김재훈',
      time: '00:30:04',
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="text-center text-[#6b727f] text-base font-medium font-['Pretendard']">
        오늘의 집중 시간
      </div>
      <div className="text-center text-[#b8daff] text-[62px] font-light font-['Pretendard']">
        {focusTime}
      </div>
      <div className="w-80 h-80 rounded-full border-2 border-[#b8daff] items-center justify-center flex">
        <div className="w-[260px] h-[260px] opacity-50 bg-gradient-to-br from-[#b8daff] via-[#7782ff] to-[#4bf7c6] rounded-full border border-[#b8daff]" />
      </div>
      <div className="h-[45px] px-[15px] py-[7px] rounded-2xl border border-white justify-center items-center gap-2.5 inline-flex">
        <div className="w-[70px] h-[30px] text-center text-white text-xl font-semibold font-['Pretendard']">
          시작하기
        </div>
      </div>
      <div>
        <div className="text-[#6b727f]  text-sm font-medium font-['Pretendard']">
          팀원정보
        </div>
        {teammates.map((item, index) => (
          <TeammateCard
            key={index} // key 속성 추가
            profile={item.profile}
            name={item.name}
            time={item.time}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
