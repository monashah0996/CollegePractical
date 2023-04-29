import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export interface ProjectInterface {
  _id: string;
  title: string;
  description: string;
  category: string;
  date: string;
}

interface ProjectContextType {
  projects: ProjectInterface[];
}

const ProjectContext = createContext<ProjectContextType>({
  projects: [],
});

const ProjectProvider: React.FC<{ children: any }> = ({ children }) => {
  const [projects, setProjects] = useState<ProjectInterface[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://quiz-3-server-nithya-1ww6.vercel.app/projects"
        );
        setProjects(response.data.payload);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider value={{ projects }}>
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectProvider, ProjectContext };
