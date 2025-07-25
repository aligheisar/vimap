import { app } from "@/lib/octokit/client";

export const getUser = app.users.getAuthenticated;
