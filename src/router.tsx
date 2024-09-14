import { RouteObject } from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import HomePage from './pages/HomePage';
import RunTimerPage from './pages/RunTimerPage';
import BreakTimerPage from './pages/BreakTimerPage';
import FinishTaskPage from './pages/FinishTaskPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: '/runtimer', element: <RunTimerPage /> },
      { path: '/breaktimer', element: <BreakTimerPage /> },
      { path: '/finishtask', element: <FinishTaskPage /> },
    ],
  },
];

export default routes;
