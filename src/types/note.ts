import { UUID } from "crypto";

export type Note = {
  id: UUID;
  projectId: number;
  title?: string;
  createdAt: Date;
  updatedAt: Date;
};
