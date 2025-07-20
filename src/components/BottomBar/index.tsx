import CommandBar from "@/components/BottomBar/CommandBar";
import ModeIndicator from "@/components/BottomBar/ModeIndicator";
import Status from "@/components/BottomBar/Status";

const BottomBar = () => {
  return (
    <section className="bottom-bar">
      <div className="command_mode">
        <CommandBar />
        <ModeIndicator />
      </div>
      <Status />
    </section>
  );
};

export default BottomBar;
