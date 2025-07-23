import { Mode } from "@/types/mode";
import { useGlobalStore } from "@/store/global-store";

export const getCurrentMode = (): Mode => {
  return useGlobalStore.getState().currentMode;
};
