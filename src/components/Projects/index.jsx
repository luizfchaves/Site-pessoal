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
            <p className="sub-title">{project.title}</p>
            <button className="btn btn-secondary">Saiba mais</button>
          </div>
        ))}
      </div>
      <div className="row to-right">
        <button className="btn btn-primary">Exibir mais</button>
      </div>
    </div>
  );
};

export default Projects;
