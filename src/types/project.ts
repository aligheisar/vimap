export type Project = {
  id: string;
  name: string;
  description?: string;
  color?: string;
  pinned: boolean;
  tags?: string[];
  archived: boolean;
  createdAt: string;
  updatedAt: string;
};
