import path from "path";
import fs from "fs";
import { basePath, projectsPath, recyclePath } from "@/data";

export const ensureStoragePaths = () => {
  [basePath, projectsPath, recyclePath].forEach((dir) => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  });
};

export const getProjectPath = (owner: string, name: string) =>
  path.join(projectsPath, owner, name);

export const getRecyclePath = (owner: string, name: string) =>
  path.join(recyclePath, owner, name);

export const ensureProjectFolder = (owner: string, name: string) => {
  const folder = getProjectPath(owner, name);
  if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
};

export const moveProjectToRecycle = (owner: string, name: string) => {
  const oldPath = getProjectPath(owner, name);
  const newPath = getRecyclePath(owner, name);
  fs.mkdirSync(path.dirname(newPath), { recursive: true });
  if (fs.existsSync(oldPath)) fs.renameSync(oldPath, newPath);
};
