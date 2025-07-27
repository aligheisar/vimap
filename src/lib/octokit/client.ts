import { Octokit } from "@octokit/rest";

export const getClient = (token: string) =>
  new Octokit({
    auth: token,
  });
