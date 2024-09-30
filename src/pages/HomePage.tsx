import { Link, useSearchParams } from "react-router-dom";
import Navigation from "@components/Navigation";
import TeammateCard from "@components/TeammateCard";
import { formatTimeHours } from "@utils/utils";
import { useSharedState } from "@/StateContext";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const HomePage = () => {
  const { sharedGlobalState } = useSharedState();

  const [searchParams, setSearchParams] = useSearchParams();
  const state = searchParams.get("state");

  const radius = 280;
  const currentProject = "개뿌 아자아자";
  // 시간을 분:초 형식으로 변환하는 함수
  const focusTime = formatTimeHours(sharedGlobalState.overall_work_time_today);
  const teammates = [
    {
      profile: "C",
      name: "최소정",
      time: "01:11:24",
    },
    {
      profile: "I",
      name: "임채림",
      time: "01:00:04",
    },
    {
      profile: "K",
      name: "김재훈",
      time: "00:30:04",
    },
  ];

  useEffect(() => {
    if (!state) return;

    // 방금 로그인 했을 경우 toast 띄우기
    if (state === "loggedIn" && Cookies.get("access_token")) {
      toast.success("로그인에 성공하였습니다!");

      // login 여부 값 알려주는 state param 삭제
      searchParams.delete("state");
      setSearchParams(searchParams, { replace: true });
    }
  }, [searchParams, setSearchParams, state]);

  return (
    <div className="flex flex-col justify-start items-center w-full h-full">
      <Navigation canNavigateBack={false} currentProjectName={currentProject} />
      <div className="text-center text-[#6b727f] text-base font-medium font-['Pretendard']">
        오늘의 집중 시간
      </div>
      <div className="w-[270px] h-[70px] m-2">
        <svg width="100%" height="100%" viewBox="0 0 70 70">
          <defs>
            {/* 그라데이션 정의 */}
            <linearGradient
              id="textGradient"
              x1="0%"
              y1="30%"
              x2="100%"
              y2="70%"
            >
              <stop offset="0%" stopColor="#B9DBFF" />
              <stop offset="47%" stopColor="#7883FF" />
              <stop offset="100%" stopColor="#4CF7C7" />
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="50%"
            fill="url(#textGradient)"
            dominantBaseline="middle"
            textAnchor="middle"
            style={{
              fontSize: "58px",
              fontFamily: "Pretendard",
              fontWeight: "500",
              border: "transparent",
            }}
          >
            {focusTime}
          </text>
        </svg>
      </div>

      <div className="relative w-[320px] h-[320px]">
        <svg
          className="transform -rotate-90"
          width="100%"
          height="100%"
          viewBox="0 0 600 600"
        >
          <defs>
            <linearGradient
              id="timerGradient"
              x1="0%"
              y1="100%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#B9DBFF" />
              <stop offset="47%" stopColor="#7883FF" />
              <stop offset="100%" stopColor="#4CF7C7" />
            </linearGradient>

            <filter
              id="blurFilter"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
              filterUnits="userSpaceOnUse"
            >
              <feGaussianBlur stdDeviation="7" />
            </filter>
          </defs>
          <circle
            cx="300"
            cy="300"
            r={radius}
            strokeWidth="14"
            strokeLinecap="round"
            stroke="url(#backGradient)"
            fill="transparent"
            filter="url(#blurFilter)"
            style={{
              transition: "stroke-dashoffset 1s linear",
              border: "transparent",
              opacity: "100%",
            }}
          />
          <circle
            cx="300"
            cy="300"
            r={radius}
            strokeWidth="14"
            strokeLinecap="round"
            stroke="url(#timerGradient)"
            fill="transparent"
          />
          <circle
            cx="300"
            cy="300"
            r={radius - 30}
            strokeWidth="3"
            strokeLinecap="round"
            stroke="url(#timerGradient)"
            stroke-dasharray="10, 10"
            fill="transparent"
          />
        </svg>
        <div className="w-[106px] h-12 absolute top-[136px] left-[107px] opacity-50 bg-gradient-to-br from-[#b8daff] via-[#7782ff] to-[#4bf7c6] rounded-[33.60px] border border-[#cbdcff]" />
        <div className="w-24 h-[38px] absolute top-[141px] left-[112px] px-3 py-[5.60px] bg-gradient-to-br from-[#b8daff] via-[#7782ff] to-[#4bf7c6] rounded-[28px] border border-[#9cb4ff] justify-center items-center gap-2 inline-flex">
          <Link
            to="/writegoal"
            className="text-center text-[#101212] text-[19px] font-extrabold font-['Pretendard']"
          >
            시작하기
          </Link>
        </div>
      </div>
      <div className="flex-col justify-center mt-[32px]">
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
