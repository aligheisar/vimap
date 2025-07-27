import { User } from "@/types/user";

export type AuthRow = {
  id: number;
  accessToken: string;
  user: User;
  updatedAt: Date;
};
