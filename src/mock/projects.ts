import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "proj_001",
    name: "My Web App",
    description:
      "this is a fake description that im writing for delectation peipus",
    pinned: true,
    tags: ["personal", "frontend"],
    archived: false,
    createdAt: "2025-07-22T10:01:00Z",
    updatedAt: "2025-07-22T10:30:00Z",
  },
  {
    id: "proj_002",
    name: "My New Web App",
    description:
      "this is also a fake description that im writing for delectation peipus",
    color: "#aa0022",
    pinned: true,
    tags: ["personal", "frontend"],
    archived: false,
    createdAt: "2025-07-22T10:01:00Z",
    updatedAt: "2025-07-22T10:30:00Z",
  },
];
