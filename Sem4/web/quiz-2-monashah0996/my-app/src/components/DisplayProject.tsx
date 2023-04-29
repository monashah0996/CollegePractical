import { useContext } from "react";
import { ProjectContext, ProjectInterface } from "../ProjectContext";

const ProjectList: React.FC = () => {
  const { projects } = useContext(ProjectContext);

  if (projects.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project: ProjectInterface) => (
          <li key={project._id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>{project.category}</p>
            <p>{project.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
