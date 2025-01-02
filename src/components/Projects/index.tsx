import React from "react";

import Project, { ProjectValues } from "./components/Project";
import { PROJECTS } from "../../utils/constants";

export const Projects = () => {
  return (
    <section className="bg-gray-950 w-screen font-mono text-lime-500 overflow-y-auto pb-20">
      <div className="w-4/5 m-auto">
        {PROJECTS.map((proj: ProjectValues, key: React.Key) => (
          <Project {...proj} key={key} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
