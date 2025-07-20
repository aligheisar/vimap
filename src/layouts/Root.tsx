import { Outlet } from "react-router";
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
