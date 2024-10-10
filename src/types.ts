export interface ProjectMember {
  name: string;
  profileImage: string;
  cumulateTime: string;
}

export interface Project {
  projectId: string;
  projectName: string;
  numberOfMember: number;
  color: string;
  code: string;
}

export const PROJECTS: Project[] = [
  {
    projectId: '1',
    projectName: '프로젝트1',
    numberOfMember: 4,
    color: '000000',
    code: 'asdfds',
  },
  {
    projectId: '2',
    projectName: '프로젝트2',
    numberOfMember: 5,
    color: '000400',
    code: 'dsfase',
  },
  {
    projectId: '3',
    projectName: '프로젝트3',
    numberOfMember: 1,
    color: '000041',
    code: 'aejifd',
  },
  {
    projectId: '4',
    projectName: '프로젝트4',
    numberOfMember: 10,
    color: 'FFFFFF',
    code: 'dafewe',
  },
];

export const TEAMMATES: ProjectMember[] = [
  {
    profileImage: 'C',
    name: '최소정',
    cumulateTime: '01:11:24',
  },
  {
    profileImage: 'I',
    name: '임채림',
    cumulateTime: '01:00:04',
  },
  {
    profileImage: 'K',
    name: '김재훈',
    cumulateTime: '00:30:04',
  },
];
