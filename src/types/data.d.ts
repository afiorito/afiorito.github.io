export interface NavLink {
  title: string;
  pathname: string;
}

export interface SiteMetadata {
  author: string;
  description: string;
  image: string;
  title: string;
  twitterUsername: string;
  url: string;
}

export interface Note {
  classAvg: number;
  classSize: number;
  code: string;
  courseTitle: string;
  credits: number;
  distribution: number[];
  grade: string;
  id: string;
  link: string;
  professor: string;
  semester: string;
  type: string;
}

export interface GradeData {
  letter: string;
  count: number;
}

export type NodesQuery<Key extends string, Node> = {
  [key in Key]: {
    nodes: Node[];
  };
};

export type NodeQuery<Key extends string, Node> = {
  [key in Key]: Node;
};
