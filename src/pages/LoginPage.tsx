import "@/index.css";

import GoogleIcon from "@/assets/google-icon.png";
import GithubIcon from "@/assets/github-icon.png";
import {
  GITHUB_SOCIAL_LOGIN_URL,
  GOOGLE_SOCIAL_LOGIN_URL,
} from "@/constants/LoginOAuthUrl";
import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { instance } from "@/api/config";
import Cookies from "js-cookie";

const LoginPage = () => {
  const { provider } = useParams();
  const queryParams = new URLSearchParams(useLocation().search); // 쿼리 파라미터 가져옴
  const code = queryParams.get("code");

  useEffect(() => {
    if (!code || !provider) return;

    const encodedUrl = encodeURIComponent(code);

    //    if (provider === "github") { // github은 백엔드 아직 구현 안됨
    if (provider === "gmail") {
      getAndSaveAccessTokenFromServer({
        provider,
        code: encodedUrl,
      });
    }
  }, [provider, code]);

  const getAndSaveAccessTokenFromServer = async ({
    provider,
    code,
  }: {
    provider: string;
    code: string;
  }) => {
    try {
      const res = await instance.post("/signIn", { code, provider });

      if (!res) {
        toast.error("서버에 토근 요청 중 에러 발생 - 로그인 실패");
        return;
      }

      const accessToken = (await res).data.data.jwt_token;

      // Save access_token to cookie
      Cookies.set("access_token", accessToken, {
        expires: 1 / 24, // 1시간
        secure: false,
        path: "/",
        sameSite: "lax",
      });

      if (accessToken) window.location.href = "/?state=loggedIn";
    } catch {
      toast.error("에러 발생 - 로그인 실패");
    }
  };

  return (
    <div className="flex flex-col justify-end py-[95px] items-center w-full h-full">
      <a
        href={GOOGLE_SOCIAL_LOGIN_URL}
        className="h-[52px] w-[349px] py-[15px] bg-white rounded-[10px] justify-center gap-2 items-center inline-flex"
      >
        <img src={GoogleIcon} alt="google" width="23px" height="23px" />
        <div className="text-center text-[#1d1c2b] text-base font-semibold font-['Pretendard']">
          Google 계정으로 로그인
        </div>
      </a>
      <div className="h-[12px]"></div>
      <a
        className="h-[52px] py-[15px] w-[349px] bg-[#24292f] rounded-[10px] justify-center gap-2 items-center inline-flex"
        href={GITHUB_SOCIAL_LOGIN_URL}
      >
        <img src={GithubIcon} alt="google" width="23px" height="23px" />
        <div className="text-center text-white text-base font-semibold font-['Pretendard']">
          Github 계정으로 로그인
        </div>
      </a>
    </div>
  );
};

export default LoginPage;
