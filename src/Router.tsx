import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "@/layouts/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
