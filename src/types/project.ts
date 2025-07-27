import type { RestEndpointMethodTypes } from "@octokit/rest";

export type GitProject =
  RestEndpointMethodTypes["repos"]["listForAuthenticatedUser"]["response"]["data"][0];

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
