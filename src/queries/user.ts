import type { RestEndpointMethodTypes } from "@octokit/rest";
import { getUser } from "@/lib/octokit/user";
import { useQuery } from "@tanstack/react-query";

export const useUser = () =>
  useQuery<RestEndpointMethodTypes["users"]["getAuthenticated"]["response"]>({
    queryKey: ["user"],
    queryFn: getUser,
  });
