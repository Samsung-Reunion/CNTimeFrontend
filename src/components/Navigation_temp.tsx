import { useNavigate } from "react-router-dom";

const Navigation = ({
  canNavigateBack,
  currentProjectName,
}: {
  canNavigateBack: boolean;
  currentProjectName: string;
}) => {
  const navigate = useNavigate();

  function handleBackButton() {
    navigate(-1);
  }

  return (
    <div className="w-full py-6 pl-1 h-fit flex flex-row justify-start items-center gap-4">
      {canNavigateBack && (
        <button
          className="text-2xl font-pretendard text-white"
          onClick={handleBackButton}>
          ←
        </button>
      )}
      {currentProjectName && (
        <span className="text-lg font-pretendard font-bold text-white">
          {currentProjectName}
        </span>
      )}
    </div>
  );
};

Navigation.defaultProps = {
  currentProjectName: undefined,
};

export default Navigation;
