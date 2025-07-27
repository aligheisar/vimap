import { GitProject } from "@/types/project";
import { GitUser } from "@/types/user";

export function normalizeRepo(repo: GitProject, currentUserLogin: string) {
  return {
    id: repo.id,
    owner: repo.owner.login,
    name: repo.name,
    fullName: repo.full_name,
    createdAt: repo.created_at,
    isArchived: repo.archived,
    isOwner: repo.owner.login === currentUserLogin,
  };
}

export function normalizeUser(user: GitUser) {
  return {
    id: user.id,
    username: user.login,
    name: user.name,
    avatarUrl: user.avatar_url,
    createdAt: user.created_at,
  };
}
