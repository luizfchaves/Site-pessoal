import React from "react";

import "./styles.css";

const AboutMe = () => {
  return (
    <>
      <div id="about-me" className="section">
        <p className="title distance-above">
          Luiz Fernando Alves de Souza Chaves
        </p>
        <span>Desenvolvedor fullstack</span>
        <span> React | Node.js</span>
        <p id="skills" className="text distance-above">
          <span className="sub-title">Habilidades</span>
          <span>React - Avançado </span>
          <span>Node.js - Intermediário</span>
          <span>HTML - Avançado</span>
          <span>CSS - Avançado</span>
          <span>Git/GitHub - Intermediário</span>
          <span>GitFlow</span>
          <span></span>
        </p>
      </div>
    </>
  );
};

export default AboutMe;
