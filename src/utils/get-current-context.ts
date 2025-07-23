import { CommandContext } from "@/types/command";
import { useGlobalStore } from "@/store/global-store";

export const getCurrentContext = (): CommandContext => {
  return useGlobalStore.getState().focusedPane;
};
