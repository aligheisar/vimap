import { commandRegistry } from "@/commands/registry";
import { keyBuffer } from "@/commands/keyBuffer";
import { getCurrentContext } from "@/utils/get-current-context";
import { getCurrentMode } from "@/utils/get-current-mode";

export const handleKeyPress = (key: string) => {
  const buffer = keyBuffer.addKey(key);
  const context = getCurrentContext();
  const mode = getCurrentMode();

  const matched = commandRegistry.find((cmd) => {
    if (!cmd.context.includes(context)) return false;
    if (cmd.mode && !cmd.mode.includes(mode)) return false;

    if (JSON.stringify(cmd.keys) === JSON.stringify(buffer)) {
      return true;
    } else {
      return false;
    }
  });

  if (matched) {
    matched.handler();
    keyBuffer.clear();
  } else if (buffer.length > 2) {
    keyBuffer.clear();
  }
};
