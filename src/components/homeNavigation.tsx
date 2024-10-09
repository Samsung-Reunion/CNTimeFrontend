import { useState } from 'react';
import ProjectBottomSheet from './ProjectBottomSheet';
import ProjectCodePopup from './ProjectCodePopup';
import { Project } from '../types';
import InviteMemberIcon from '../assets/inviteMemberIcon.png';
import ProjectSwitchIcon from '../assets/projectSwitchIcon.png';
interface HomeNavigationProps {
  currentProject: Project;
  projects: Project[];
  setCurrentProject: (arg0: Project) => void;
}
const HomeNavigation = ({
  currentProject,
  projects,
  setCurrentProject,
}: HomeNavigationProps) => {
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <div className="w-full py-6 pl-1 h-fit flex justify-between items-center gap-4">
      {currentProject && (
        <button
          onClick={() => {
            setBottomSheetOpen(true);
          }}
          className="text-lg flex justify-center items-center font-pretendard font-bold text-white"
        >
          {currentProject.projectName}
          <img
            src={ProjectSwitchIcon}
            className="w-[9.5px] h-[14.25px] ml-[10px]"
          />
        </button>
      )}
      <button onClick={() => setPopupOpen(true)}>
        <img src={InviteMemberIcon} className="w-[50px] h-[50px]" />
      </button>
      <ProjectBottomSheet
        isOpen={bottomSheetOpen}
        setIsOpen={setBottomSheetOpen}
        projects={projects}
        currentProject={currentProject}
        setCurrentProject={setCurrentProject}
      />
      <ProjectCodePopup
        isOpen={popupOpen}
        setIsOpen={setPopupOpen}
        projectCode={currentProject.code}
      />
    </div>
  );
};

export default HomeNavigation;
