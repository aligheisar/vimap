import { useEffect, useState } from "react";
import { getAllRepos } from "@/lib/octokit/client";

const AppPage = () => {
  const [repos, setRepos] = useState<any | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = (await getAllRepos) as any;
      setRepos(data);
    };
    getData();
  }, []);

  return (
    <section className="app-container">
      <h1>projects</h1>
      <div className="projects-container">
        {repos &&
          repos.length > 0 &&
          repos.map((proj: any) => (
            <article className="project" key={proj.id}>
              <div className="group">
                <span className="id">{proj.id}</span>
                <h3 className="name">{proj.full_name}</h3>
                <p className="description">{proj.description}</p>
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
    </section>
  );
};

export default AppPage;
