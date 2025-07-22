import { Outlet } from "react-router-dom";
import BottomBar from "@/components/BottomBar";

const Root = () => {
  return (
    <main>
      <Outlet />
      <BottomBar />
    </main>
  );
};

export default Root;
