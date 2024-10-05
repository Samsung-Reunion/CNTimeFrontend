interface User {
  userId: string;
  userName: string;
  userEmail: string;
  userImg: string;
  provider: string;
}
export interface ProjectMember {
  userName: string;
  userImg: string;
  userTime: string;
}

export interface Project {
  projectId: string;
  projectName: string;
  numberOfMember: number;
  color: string;
}

export const PROJECTS: Project[] = [
  {
    projectId: '1',
    projectName: '프로젝트1',
    numberOfMember: 4,
    color: '000000',
  },
  {
    projectId: '2',
    projectName: '프로젝트2',
    numberOfMember: 5,
    color: '000400',
  },
  {
    projectId: '3',
    projectName: '프로젝트3',
    numberOfMember: 1,
    color: '000041',
  },
  {
    projectId: '4',
    projectName: '프로젝트4',
    numberOfMember: 10,
    color: 'FFFFFF',
  },
];

export const TEAMMATES: ProjectMember[] = [
  {
    userImg: 'C',
    userName: '최소정',
    userTime: '01:11:24',
  },
  {
    userImg: 'I',
    userName: '임채림',
    userTime: '01:00:04',
  },
  {
    userImg: 'K',
    userName: '김재훈',
    userTime: '00:30:04',
  },
];
