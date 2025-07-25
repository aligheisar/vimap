import { Octokit } from "@octokit/rest";

export const app = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export const getAllRepos = app.paginate(
  app.rest.repos.listForAuthenticatedUser,
  {
    sort: "updated",
  },
);
