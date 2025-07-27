import type { RestEndpointMethodTypes } from "@octokit/rest";

export type GitUser =
  RestEndpointMethodTypes["users"]["getAuthenticated"]["response"]["data"];

export type User = {
  id: number;
  username: string;
  name: string;
  avatarUrl: string;
  createdAt: Date;
};
