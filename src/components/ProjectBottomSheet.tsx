import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';

interface ProjectBottomSheetProps {
  open: boolean;
  setOpen: (arg0: boolean) => void;
}
interface CustomStyle extends React.CSSProperties {
  '--rsbs-bg'?: string;
}

const ProjectBottomSheet = ({ open, setOpen }: ProjectBottomSheetProps) => {
  const handleProjectClick = (project: string) => {
    // 프로젝트 전환 로직
    console.log(`Switching to: ${project}`);
    setOpen(false); // 바텀 시트 닫기
  };
  const projects = ['프로젝트 1', '프로젝트 2', '프로젝트 3'];
  return (
    <BottomSheet
      open={open}
      onDismiss={() => setOpen(false)}
      //snapPoints={({ maxHeight }) => [maxHeight * 0.5, maxHeight * 0.9]} // 열리는 위치 설정
      style={
        {
          '--rsbs-bg': '#23262b', // 전체 바텀 시트 배경을 설정
          '--rsbs-handle-bg': '#23262b', // (선택사항) 바텀 시트 핸들 색상 변경
          '--rsbs-handle-radius': '15px',
          ' --rsbs-content-max-h': '40vh',
        } as CustomStyle // 커스텀 스타일 타입 확장
      }
    >
      <div className="bg-[#23262b] cursor-pointer rounded-tl-[15px] rounded-tr-[15px] px-[23px] py-[20px]">
        {/* 프로젝트 리스트 */}
        {projects.map((project, index) => (
          <div key={index} className="flex-column items-center mb-4">
            <div
              onClick={() => handleProjectClick(project)}
              className="flex w-full justify-start items-center mb-4"
            >
              <div className="w-[45px] h-[45px] bg-[#d9d9d9] rounded-full"></div>
              <div className="ml-4">
                <div className="text-white text-base font-semibold">
                  {project}
                </div>
                <div className="text-neutral-400 text-sm">팀원 4명</div>
              </div>
            </div>
            <div className="border-[0.3px] border-[#6b727f]"></div>
          </div>
        ))}
      </div>
    </BottomSheet>
  );
};

export default ProjectBottomSheet;
