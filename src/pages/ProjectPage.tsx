import { useParams } from "react-router-dom";

const ProjectPage = () => {
  const params = useParams();

  if (!params.id) return <h1>error</h1>;

  return <h1>project {params.id}</h1>;
};

export default ProjectPage;
