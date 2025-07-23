import { Mode } from "@/types/mode";

export type CommandContext = "global" | "tasks" | "notes" | "overview";

export type Command = {
  id: string;
  keys: string[];
  context: CommandContext[];
  mode?: Mode[];
  label: string;
  description?: string;
  handler: () => void;
};
