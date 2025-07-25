import { create } from "zustand";
import type { CommandContext } from "@/types/command";
import type { Mode } from "@/types/mode";

type State = {
  focusedPane: CommandContext;
  currentMode: Mode;
};

type Action = {
  setFocusedPane: (focusedPane: CommandContext) => void;
  setCurrentMode: (currentMode: Mode) => void;
};

export const useGlobalStore = create<State & Action>((set) => ({
  focusedPane: "global",
  currentMode: "normal",
  setFocusedPane: (focusedPane) => set({ focusedPane }),
  setCurrentMode: (currentMode) => set({ currentMode }),
}));
