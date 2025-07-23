import { useGlobalStore } from "@/store/global-store";

const ModeIndicator = () => {
  const currentMode = useGlobalStore((store) => store.currentMode);
  return <span>-- {currentMode} --</span>;
};

export default ModeIndicator;
