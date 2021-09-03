/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { LinkedIn,Github,Mail,Whatsapp } from '../../images'

import "./styles.css";

const AboutMe = () => {
  return (
    <>
      <div id="about-me" className="section">
        <p className="title distance-above">
          Luiz Fernando Alves de Souza Chaves
        </p>
        <span>Graduando em Ciência da Computação</span>
        <span>Desenvolvedor fullstack</span>
        <span> React | Node.js | GraphQL</span>
        <div id="contacts">
          <p className="title">Contatos</p>
          <ul className="contacts-list">
            <li>
              <a
                href="https://www.linkedin.com/in/luiz-chaves/"
                target="_blank"
              >
                <LinkedIn/>
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5521988705275&text=Ol%C3%A1%20Luiz!"
                target="_blank"
              >
                  <Whatsapp/>
              </a>
            </li>
            <li>
              <a href="https://github.com/LuizFChaves" target="_blank">
                  <Github/>
              </a>
            </li>
            <li>
              <a href="mailto:luizfaschaves@gmail.com" target="_blank">
                  <Mail/>
              </a>
            </li>
          </ul>
        </div>
        <div id="skills">
          <div id="skills-header">
            <p className="title  distance-above">Habilidades</p>
          </div>
          <div id="skills-body">
            <div>
              <p id="firstskills" className="text">
                <span className="sub-title">Principais (Hard)</span>
                <span>React</span>
                <span>GraphQL</span>
                <span>Node.js</span>
                <span>Parse Platform</span>
                <span>React Native</span>
                <span>MongoDB</span>
              </p>
            </div>
            <div>
              <p id="othersSkills" className="text">
                <span className="sub-title">Complementares (Soft)</span>
                <span>Testes automatizados</span>
                <span>GitFlow</span>
                <span>SCRUM</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
