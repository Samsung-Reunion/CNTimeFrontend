import { RouteObject } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import HomePage from "./pages/HomePage";
import RunTimerPage from "./pages/RunTimerPage";
import FinishTaskPage from "./pages/FinishTaskPage";
import EnterNamePage from "./pages/EnterNamePage";
import CreateOrJoinPage from "./pages/CreateOrJoinPage";
import ProjectNamePage from "./pages/ProjectNamePage";
import ProjectCodePage from "./pages/ProjectCodePage";
import TargetGoalInputPage from "./pages/TargetGoalInputPage";
import LoginPage from "./pages/LoginPage";
import JoinProjectPage from "./pages/JoinProjectPage";
import RestTimerPage from "./pages/RestTimerPage";
import Cookies from "js-cookie";

const IS_LOGGED_OUT = Cookies.get("access_token") === undefined;

// 라우팅 처리를 위한 객체
const RENDER_OBJECT = {
  "/": <HomePage />,
  "/oauth/:provider": <LoginPage />,
  "/entername": <EnterNamePage />,
  "/createorjoin": <CreateOrJoinPage />,
  "/joinproject": <JoinProjectPage />,
  "/projectname": <ProjectNamePage />,
  "/projectcode": <ProjectCodePage />,
  "/runtimer": <RunTimerPage />,
  "/resttimer": <RestTimerPage />,
  "/finishtask": <FinishTaskPage />,
  "/writegoal": <TargetGoalInputPage />,
  // 404 페이지 처리 (존재하지 않는 페이지(url) 접근 시)
  "/*": <HomePage />,
};

const renderRoutesContent = (path: string) => ({
  path,
  // access_token이 존재하지 않으면 무조건 LoginPage로 리다이렉트
  element: IS_LOGGED_OUT ? (
    <LoginPage />
  ) : (
    RENDER_OBJECT[path as keyof typeof RENDER_OBJECT]
  ),
});

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: Object.keys(RENDER_OBJECT).map((path) =>
      renderRoutesContent(path)
    ),
  },
];

export default routes;
