import { app } from "@/lib/octokit/client";

export const getAllRepos = async () =>
  (await app.paginate(app.rest.repos.listForAuthenticatedUser, {
    sort: "updated",
  })) as any;
