import { Outlet } from 'react-router-dom';
const MainLayout = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
