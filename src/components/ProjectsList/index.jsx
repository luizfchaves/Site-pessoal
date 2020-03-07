import React, { useEffect } from "react";

import { projects } from "./../../mock";

import "./styles.css";
// import { Container } from './styles';

const Projects = () => {
  useEffect(() => {
    console.log("Projects", projects);
  }, []);
  return (
    <div id="projects">
      <p className="title">Projetos</p>
      <div id="projects-list">
        {projects.map(project => (
          <div className="projects-list-item" key={project.title}>
            <div className="projects-list-item-logo">
              <img src={project.url} alt={`${project.title} logo`} />
            </div>
            <p className="projects-list-item-title sub-title">
              {project.title}
            </p>
            <a href={`/projects/${project.id}`} className="btn btn-secondary">
              Saiba mais
            </a>
          </div>
        ))}
      </div>
      <div className="row to-right">
        <a href="/projects" className="btn btn-primary">
          Exibir todos
        </a>
      </div>
    </div>
  );
};

export default Projects;
