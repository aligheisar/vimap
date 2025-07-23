import { Outlet } from "react-router-dom";
import BottomBar from "@/components/BottomBar";
import { CommandEngine } from "@/commands/CommandEngine";

const Root = () => {
  return (
    <main>
      <CommandEngine />
      <Outlet />
      <BottomBar />
    </main>
  );
};

export default Root;
