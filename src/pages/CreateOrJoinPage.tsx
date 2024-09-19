import SquaredBtn from '../components/SquaredBtn';
import { useNavigate } from 'react-router-dom';

const CreateOrJoinPage = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const onClickCreate = () => {
    navigate('/projectname');
  };

  const onClickJoin = () => {
    navigate('/createorjoin');
  };
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <SquaredBtn text="프로젝트 만들기" onClick={onClickCreate} />
      <div className="h-[20px]" />
      <SquaredBtn text="프로젝트 참여하기" onClick={onClickJoin} />
    </div>
  );
};

export default CreateOrJoinPage;
