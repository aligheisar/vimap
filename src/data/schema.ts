export const createProjectsTable = `
CREATE TABLE IF NOT EXISTS projects (
  id INTEGER PRIMARY KEY,
  owner TEXT NOT NULL,
  name TEXT NOT NULL,
  fullName TEXT NOT NULL,
  createdAt DATE NOT NULL,
  updatedAt DATE,
  isArchived INTEGER DEFAULT 0,
  isOwner BOOLEAN NOT NULL
);
`;

export const createNotesTable = `
CREATE TABLE IF NOT EXISTS notes (
  id TEXT PRIMARY KEY,
  projectId INTEGER NOT NULL,
  title TEXT,
  createdAt DATE,
  updatedAt DATE,
  FOREIGN KEY (projectId) REFERENCES projects(id) ON DELETE CASCADE
);
`;

export const createAuthTable = `
CREATE TABLE IF NOT EXISTS auth (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  accessToken TEXT NOT NULL,
  user TEXT NOT NULL, -- { id, username, name, avatarUrl, createdAt }
  updatedAt DATE
);
`;

export const createSyncTable = `
CREATE TABLE IF NOT EXISTS sync (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  gitSyncedAt DATE,
  megaSyncedAt DATE
);
`;
