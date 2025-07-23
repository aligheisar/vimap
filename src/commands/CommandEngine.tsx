import { useEffect } from "react";
import { handleKeyPress } from "@/commands/engine";

export const CommandEngine = (): null => {
  useEffect(() => {
    const controller = new AbortController();

    window.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Shift") return;
        handleKeyPress(e.key);
      },
      { signal: controller.signal },
    );
    return () => controller.abort();
  }, []);

  return null;
};
