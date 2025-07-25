import { Octokit } from "@octokit/rest";
import { GITHUB_TOKEN } from "../../../env";

console.log(GITHUB_TOKEN);

export const app = new Octokit({
  auth: GITHUB_TOKEN,
});

export const getAllRepos = app.paginate(
  app.rest.repos.listForAuthenticatedUser,
  {
    sort: "updated",
  },
);
