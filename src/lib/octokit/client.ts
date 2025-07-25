import { Octokit } from "@octokit/rest";
import { GITHUB_TOKEN } from "../../../env";

export const app = new Octokit({
  auth: GITHUB_TOKEN,
});
