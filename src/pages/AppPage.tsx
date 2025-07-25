import ProjectsList from "@/components/Projects/ProjectsList";
import { useUser } from "@/queries/user";

const AppPage = () => {
  const { data } = useUser();

  return (
    <section className="app-container">
      <h1>Projects</h1>
      <ProjectsList />
    </section>
  );
};

export default AppPage;
