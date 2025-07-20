import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "@/layouts/Root";
import ProjectsPage from "@/pages/ProjectsPage";
import SettingsPage from "@/pages/SettingsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/projects",
        Component: ProjectsPage,
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
