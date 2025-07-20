import { Outlet } from "react-router";

const Root = () => {
  return (
    <main>
      <h1>root</h1>
      <Outlet />
    </main>
  );
};

export default Root;
