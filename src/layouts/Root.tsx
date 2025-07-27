import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { CommandEngine } from "@/commands/CommandEngine";
import BottomBar from "@/components/BottomBar";

const Root = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.vimap.onNoUser(() => {
      navigate("/getting-start");
    });
  }, []);
  return (
    <main>
      <CommandEngine />
      <Outlet />
      <BottomBar />
    </main>
  );
};

export default Root;
