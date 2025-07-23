import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "@/layouts/Root";
import AppPage from "@/pages/AppPage";
import SettingsPage from "@/pages/SettingsPage";

export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: AppPage,
      },
      {
        path: "/settings",
        Component: SettingsPage,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
