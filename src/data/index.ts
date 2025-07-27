import Database from "better-sqlite3";
import path from "path";
import os from "os";
import {
  createAuthTable,
  createProjectsTable,
  createNotesTable,
  createSyncTable,
} from "@/data/schema";
import { ensureStoragePaths } from "@/data/utils/fs";

export const basePath = path.join(os.homedir(), "Documents", "vimap");
export const dbPath = path.join(basePath, "database.db");
export const projectsPath = path.join(basePath, "projects");
export const recyclePath = path.join(basePath, "recycle");

export const getDb = () => new Database(dbPath);

export const initDB = () => {
  ensureStoragePaths();

  const db = getDb();

  db.exec(`
  ${createAuthTable}
  ${createProjectsTable}
  ${createNotesTable}
  ${createSyncTable}
`);
};
