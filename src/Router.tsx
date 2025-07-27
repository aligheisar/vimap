import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "@/layouts/Root";
import AppPage from "@/pages/AppPage";
import SettingsPage from "@/pages/SettingsPage";
import GettingStartPage from "@/pages/GettingStartPage";

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
      {
        path: "/getting-start",
        Component: GettingStartPage,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
