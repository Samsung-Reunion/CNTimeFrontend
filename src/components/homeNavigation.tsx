import { useState } from 'react';
import ProjectBottomSheet from './ProjectBottomSheet';
import Navigation from './navigation';
import ProjectCodePopup from './ProjectCodePopup';

const HomeNavigation = ({
  currentProjectName,
}: {
  currentProjectName: string;
}) => {
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  const onClickProject = () => {
    setBottomSheetOpen(true);
  };
  const onClickInvite = () => {
    setPopupOpen(true);
  };
  return (
    <div className="w-full py-6 pl-1 h-fit flex justify-between items-center gap-4">
      {currentProjectName && (
        <button
          onClick={onClickProject}
          className="text-lg flex justify-center items-center font-pretendard font-bold text-white"
        >
          {currentProjectName}
          <img
            src="src/assets/projectSwitchIcon.png"
            className="w-[9.5px] h-[14.25px] ml-[10px]"
          ></img>
        </button>
      )}
      <button onClick={onClickInvite}>
        <img
          src="src/assets/inviteMemberIcon.png"
          className="w-[50px] h-[50px]"
        />
      </button>
      <ProjectBottomSheet open={bottomSheetOpen} setOpen={setBottomSheetOpen} />
      <ProjectCodePopup open={popupOpen} setOpen={setPopupOpen} />
    </div>
  );
};

Navigation.defaultProps = {
  currentProjectName: undefined,
};

export default HomeNavigation;
