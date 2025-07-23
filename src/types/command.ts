export type CommandContext = "global" | "tasks" | "notes" | "overview";

export type Command = {
  id: string;
  keys: string[];
  context: CommandContext[];
  label: string;
  description?: string;
  handler: () => void;
};

export type Mode = "normal" | "visual";
