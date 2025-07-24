import { projects } from "@/mock/projects";

const AppPage = () => {
  return (
    <section className="app-container">
      <h1>projects</h1>
      <div className="projects-container">
        {projects.map((proj) => (
          <article className="project" data-color={proj.color} key={proj.id}>
            <div className="group">
              <span className="id">{proj.id}</span>
              <h3 className="name">{proj.name}</h3>
              <p className="description">{proj.description}</p>
            </div>
            <div className="group">
              {proj.tags && proj.tags.length > 0 ? (
                <div className="tag-container">
                  {proj.tags.map((tag) => (
                    <span className="tag"># {tag}</span>
                  ))}
                </div>
              ) : null}
              <span className="datetime">
                {new Intl.DateTimeFormat("en-us", {
                  dateStyle: "long",
                  timeStyle: "short",
                }).format(new Date(proj.createdAt))}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AppPage;
