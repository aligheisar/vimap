import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "@/layouts/Root";
import ProjectsPage from "@/pages/ProjectsPage";
import ProjectPage from "@/pages/ProjectPage";
import SettingsPage from "@/pages/SettingsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: ProjectsPage,
      },
      {
        path: "/project/:id",
        Component: ProjectPage,
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
