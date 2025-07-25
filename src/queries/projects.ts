import type { RestEndpointMethodTypes } from "@octokit/rest";
import { getAllRepos } from "@/lib/octokit/projects";
import { useQuery } from "@tanstack/react-query";

export const useProjects = () =>
  useQuery<
    RestEndpointMethodTypes["repos"]["listForAuthenticatedUser"]["response"][]
  >({
    queryKey: ["projects"],
    queryFn: getAllRepos,
  });
