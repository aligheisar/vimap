import { projects } from "@/mock/projects";

const AppPage = () => {
  return (
    <section className="app-container">
      <h1>projects</h1>
      <div className="projects-container">
        {projects.map((proj) => (
          <article key={proj.id}>
            <span>{proj.id}</span>
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AppPage;
