import { Outlet } from 'react-router-dom';
const MainLayout = () => {
  return (
    <div className="flex bg-cntimer-background justify-center">
      <div className="flex flex-col w-app-width h-screen bg-cntimer-background px-6">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
