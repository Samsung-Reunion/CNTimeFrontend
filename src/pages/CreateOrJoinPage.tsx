import Navigation from '@components/Navigation';
import SquaredBtn from '@components/SquaredBtn';
import { useNavigate } from 'react-router-dom';

const CreateOrJoinPage = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const onClickCreate = () => {
    navigate('/projectname');
  };

  const onClickJoin = () => {
    navigate('/joinproject');
  };
  return (
    <div className="flex flex-col justify-start items-center w-full h-full">
      <Navigation canNavigateBack={true} />
      <div className="flex flex-col justify-center items-center h-full">
        <SquaredBtn text="프로젝트 만들기" onClick={onClickCreate} />
        <div className="h-[20px]" />
        <SquaredBtn text="프로젝트 참여하기" onClick={onClickJoin} />
      </div>
    </div>
  );
};

export default CreateOrJoinPage;
