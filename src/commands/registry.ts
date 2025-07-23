import { normalMode, visualMode } from "@/commands/handlers/modes";
import { Command } from "@/types/command";

export const commandRegistry: Command[] = [
  {
    id: "visualMode",
    keys: ["v"],
    context: ["global"],
    label: "Visual Mode",
    handler: visualMode,
  },
  {
    id: "normalMode",
    keys: ["Escape"],
    context: ["global"],
    label: "Normal Mode",
    handler: normalMode,
  },
];
