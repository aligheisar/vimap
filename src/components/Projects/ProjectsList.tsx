import Loading from "@/components/Loading";
import { useProjects } from "@/queries/projects";

const ProjectsList = () => {
  const { data: repos, isLoading, isError, error } = useProjects();

  if (isLoading) return <Loading />;

  if (isError) return <p>error accord: {error.message}</p>;

  return (
    <div className="projects-container">
      {repos &&
        repos.length > 0 &&
        repos.map((proj: any) => (
          <article className="project" key={proj.id}>
            <div className="group">
              <div className="id_name">
                <span className="id">{proj.id}</span>
                <h3 className="name">{proj.full_name}</h3>
              </div>
              {proj.description ? (
                <p className="description">{proj.description}</p>
              ) : null}
            </div>
            <div className="group">
              {proj.topics && proj.topics.length > 0 ? (
                <div className="tag-container">
                  {proj.topics.map((tag: any) => (
                    <span className="tag" key={tag}>
                      # {tag}
                    </span>
                  ))}
                </div>
              ) : null}
              <span className="datetime">
                {new Intl.DateTimeFormat("en-us", {
                  dateStyle: "long",
                  timeStyle: "short",
                }).format(new Date(proj.created_at))}
              </span>
            </div>
          </article>
        ))}
    </div>
  );
};

export default ProjectsList;
