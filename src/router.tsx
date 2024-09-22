import { RouteObject } from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import HomePage from './pages/HomePage';
import RunTimerPage from './pages/RunTimerPage';
import FinishTaskPage from './pages/FinishTaskPage';
import EnterNamePage from './pages/EnterNamePage';
import CreateOrJoinPage from './pages/CreateOrJoinPage';
import ProjectNamePage from './pages/ProjectNamePage';
import ProjectCodePage from './pages/ProjectCodePage';
import TargetGoalInputPage from './pages/TargetGoalInputPage';
import LoginPage from './pages/LoginPage';
import JoinProjectPage from './pages/JoinProjectPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/entername', element: <EnterNamePage /> },
      { path: '/createorjoin', element: <CreateOrJoinPage /> },
      { path: '/joinproject', element: <JoinProjectPage /> },
      { path: '/projectname', element: <ProjectNamePage /> },
      { path: '/projectcode', element: <ProjectCodePage /> },
      { path: '/runtimer', element: <RunTimerPage /> },
      { path: '/finishtask', element: <FinishTaskPage /> },
      { path: '/writegoal', element: <TargetGoalInputPage /> },
    ],
  },
];

export default routes;
