import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Outlet />
    </div>
  );
};

export default MainLayout;
