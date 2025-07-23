import { useGlobalStore } from "@/store/global-store";

export const visualMode = () => {
  const store = useGlobalStore.getState();
  const currentMode = store.currentMode;
  store.setCurrentMode(currentMode === "visual" ? "normal" : "visual");
};

export const normalMode = () => {
  useGlobalStore.getState().setCurrentMode("normal");
};
