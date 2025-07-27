import { normalizeUser } from "@/data/utils/normalize";
import { getDb } from "@/data";
import { getClient } from "@/lib/octokit/client";
import { AuthRow } from "@/types/db/auth";

export async function getSession() {
  const db = getDb();

  const authRow = db
    .prepare<[], AuthRow>(`SELECT * FROM auth WHERE id = 1`)
    .get();

  if (!authRow) return { newUser: true };

  const octokit = getClient(authRow.accessToken);

  const { data: user } = await octokit.rest.users.getAuthenticated();
  const normalizedUser = normalizeUser(user);

  db.prepare<[string, string]>(
    `UPDATE auth SET user = ?, updatedAt = ? WHERE id = 1`,
  ).run(JSON.stringify(normalizedUser), new Date().toISOString());

  // const repos = await octokit.paginate(
  //   octokit.rest.repos.listForAuthenticatedUser,
  //   {
  //     per_page: 100,
  //   },
  // );

  // const insert = db.prepare(`
  //   INSERT OR REPLACE INTO projects (id, owner, name, fullName, createdAt, updatedAt, isArchived, isOwner)
  //   VALUES (?, ?, ?, ?, ?, COALESCE((SELECT updatedAt FROM projects WHERE id = ?), NULL), ?, ?)
  // `);

  // const tx = db.transaction((repos: any[]) => {
  //   for (const r of repos) {
  //     const norm = normalizeRepo(r, normalizedUser.username);
  //     insert.run(
  //       norm.id,
  //       norm.owner,
  //       norm.name,
  //       norm.fullName,
  //       norm.createdAt,
  //       norm.id,
  //       norm.isArchived ? 1 : 0,
  //       norm.isOwner ? 1 : 0,
  //     );
  //   }
  // });

  // tx(repos);

  return { newUser: false, user: normalizedUser };
}
