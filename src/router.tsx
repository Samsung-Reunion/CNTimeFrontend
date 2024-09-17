import { RouteObject } from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import HomePage from './pages/HomePage';
import RunTimerPage from './pages/RunTimerPage';
import BreakTimerPage from './pages/BreakTimerPage';
import FinishTaskPage from './pages/FinishTaskPage';
import EnterNamePage from './pages/EnterNamePage';
import CreateOrJoinPage from './pages/CreateOrJoinPage';
import ProjectNamePage from './pages/ProjectNamePage';
import ProjectCodePage from './pages/ProjectCodePage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/entername', element: <EnterNamePage /> },
      { path: '/createorjoin', element: <CreateOrJoinPage /> },
      { path: '/projectname', element: <ProjectNamePage /> },
      { path: '/projectcode', element: <ProjectCodePage /> },

      { path: '/home', element: <HomePage /> },
      { path: '/runtimer', element: <RunTimerPage /> },
      { path: '/breaktimer', element: <BreakTimerPage /> },
      { path: '/finishtask', element: <FinishTaskPage /> },
    ],
  },
];

export default routes;
