import { create } from "zustand";
import { CommandContext, Mode } from "@/types/command";

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
