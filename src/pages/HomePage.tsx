import { Link, useSearchParams } from 'react-router-dom';
import TeammateCard from '@components/TeammateCard';
import { formatTimeHours } from '@utils/utils';
import { useSharedState } from '@/StateContext';
import { useState, useEffect } from 'react';
import { PROJECTS, Project, ProjectMember, TEAMMATES } from '../types';
import HomeNavigation from '../components/homeNavigation';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import { instance } from '@/api/config';

const RADIUS = 280;

const HomePage = () => {
  const { sharedGlobalState } = useSharedState();

  const [currentProject, setCurrentProject] = useState<Project>(PROJECTS[0]);
  const [projects, setProjects] = useState<Project[]>(PROJECTS);
  const [teammates, setTeammates] = useState<ProjectMember[]>(TEAMMATES);

  const [searchParams, setSearchParams] = useSearchParams();
  const state = searchParams.get('state');

  // 시간을 분:초 형식으로 변환하는 함수
  const focusTime = formatTimeHours(sharedGlobalState.overall_work_time_today);

  const getProjectList = async () => {
    try {
      const res = await instance.get('/project/all');
      if (res) {
        setProjects(res.data.data.projects);
        setCurrentProject(res.data.data.projects[0]);
        console.log(res.data.data.projects);
      }
    } catch {
      toast.error('에러 발생 - 프로젝트 불러오기 실패');
    }
  };

  useEffect(() => {
    if (currentProject) getProjectMember(currentProject.code);
  }, [currentProject]);

  const getProjectMember = async (projectCode: string) => {
    try {
      const res = await instance.get('/project/member/all', {
        params: { projectCode },
      });
      if (res) {
        console.log(res.data);
        setTeammates(res.data.data.members);
      }
    } catch {
      toast.error('에러 발생 - 프로젝트 정보 불러오기 실패');
    }
  };

  useEffect(() => {
    if (!state) return;

    // 방금 로그인 했을 경우 toast 띄우기
    if (state === 'loggedIn' && Cookies.get('access_token')) {
      toast.success('로그인에 성공하였습니다!');
      // login 여부 값 알려주는 state param 삭제
      searchParams.delete('state');
      setSearchParams(searchParams, { replace: true });
    }
  }, [searchParams, setSearchParams, state]);

  useEffect(() => {
    getProjectList();
  }, []);

  return (
    <div className="flex flex-col justify-start items-center w-full h-full">
      <HomeNavigation
        currentProject={currentProject}
        projects={projects}
        setCurrentProject={setCurrentProject}
      />
      <div className="text-center text-[#6b727f] text-base font-medium font-pretendard">
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
              fontSize: '58px',
              fontFamily: 'Pretendard',
              fontWeight: '500',
              border: 'transparent',
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
            r={RADIUS}
            strokeWidth="14"
            strokeLinecap="round"
            stroke="url(#backGradient)"
            fill="transparent"
            filter="url(#blurFilter)"
            style={{
              transition: 'stroke-dashoffset 1s linear',
              border: 'transparent',
              opacity: '100%',
            }}
          />
          <circle
            cx="300"
            cy="300"
            r={RADIUS}
            strokeWidth="14"
            strokeLinecap="round"
            stroke="url(#timerGradient)"
            fill="transparent"
          />
          <circle
            cx="300"
            cy="300"
            r={RADIUS - 30}
            strokeWidth="3"
            strokeLinecap="round"
            stroke="url(#timerGradient)"
            strokeDasharray="10, 10"
            fill="transparent"
          />
        </svg>
        <div className="w-[106px] h-12 absolute top-[136px] left-[107px] opacity-50 bg-gradient-to-br from-[#b8daff] via-[#7782ff] to-[#4bf7c6] rounded-[33.60px] border border-[#cbdcff]" />
        <div className="w-24 h-[38px] absolute top-[141px] left-[112px] px-3 py-[5.60px] bg-gradient-to-br from-[#b8daff] via-[#7782ff] to-[#4bf7c6] rounded-[28px] border border-[#9cb4ff] justify-center items-center gap-2 inline-flex">
          <Link
            to="/writegoal"
            state={{ current_project: currentProject }}
            className="text-center text-[#101212] text-[19px] font-extrabold font-pretendard"
          >
            시작하기
          </Link>
        </div>
      </div>
      <div className="flex-col justify-center mt-[32px]">
        <div className="text-[#6b727f]  text-sm font-medium font-pretendard">
          팀원정보
        </div>
        {teammates.map((item, index) => (
          <TeammateCard
            key={index} // key 속성 추가
            profile={item.profileImage}
            name={item.name}
            time={item.cumulateTime}
          />
        ))}
      </div>
    </div>
  );
};
export default HomePage;
