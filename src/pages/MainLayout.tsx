import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
const MainLayout = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className=" w-full max-w-lg h-full flex flex-col justify-center items-center">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
