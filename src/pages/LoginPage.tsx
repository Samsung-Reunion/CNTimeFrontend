import React from 'react';

import '../index.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const onClickGithubLogin = () => {
    navigate('/entername');
  };
  const onClickGoogleLogin = () => {
    navigate('/entername');
  };
  return (
    <div className="flex flex-col justify-end py-[95px] items-center w-full h-full">
      <button
        onClick={onClickGoogleLogin}
        className="h-[52px] w-[349px] py-[15px] bg-white rounded-[10px] justify-center gap-4 items-center inline-flex"
      >
        <div className="w-[23px] h-[23px] relative bg-red-100"></div>
        <div className="text-center text-[#1d1c2b] text-base font-semibold font-['Pretendard']">
          Google 계정으로 로그인
        </div>
      </button>
      <div className="h-[12px]"></div>
      <button
        className="h-[52px] py-[15px] w-[349px] bg-[#24292f] rounded-[10px] justify-center gap-4 items-center inline-flex"
        onClick={onClickGithubLogin}
      >
        <div className="w-[23px] h-[23px] relative bg-red-100"></div>
        <div className="text-center text-white text-base font-semibold font-['Pretendard']">
          Github 계정으로 로그인
        </div>
      </button>
    </div>
  );
};

export default LoginPage;
