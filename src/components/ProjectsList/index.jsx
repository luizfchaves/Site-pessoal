import React, { useEffect, useState } from "react";

import { projects } from "./../../mock";

import "./styles.css";
import { useStore } from "react-redux";
// import { Container } from './styles';

import dotenv from "dotenv";
dotenv.config();
const Projects = () => {
  let [modalSelected, setModal] = useState(null);
  useEffect(() => {
    console.log("Projects", projects);
  }, []);
  return (
    <div id="projects">
      <p className="title">Projetos</p>
      <div id="projects-list">
        {projects.map((project) => (
          <div key={project.title}>
            <div
              className={
                modalSelected === project.id ? "modal" : "modal-closed modal"
              }
            >
              <div className="modal-content">
                <p className="modal-title">{project.title}</p>
                <p className="modal-description">{project.description}</p>
                <a
                  href={project.url}
                  className={project.url ? "btn btn-primary" : "not-show"}
                >
                  Acessar
                </a>

                <button
                  className="btn btn-secondary modal-close-btn"
                  onClick={() => {
                    setModal(null);
                  }}
                >
                  Fechar
                </button>
              </div>
            </div>
            <div className="projects-list-item">
              <div className="projects-list-item-logo">
                <img
                  src={`${project.imageUrl}`}
                  alt={`${project.title} logo`}
                />
              </div>
              <p className="projects-list-item-title sub-title">
                {project.title}
              </p>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setModal(project.id);
                }}
              >
                Saiba mais
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
