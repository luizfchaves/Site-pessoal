import React, { useState } from "react";

import "./styles.css";

const AboutMe = () => {
  const [skillsHidden, setSkillsHidden] = useState(false);
  return (
    <>
      <div id="about-me" className="section">
        <p className="title distance-above">
          Luiz Fernando Alves de Souza Chaves
        </p>
        <span>Desenvolvedor fullstack</span>
        <span> React | Node.js</span>
        <div id="skills">
          <div id="skills-header">
            <p className="sub-title  distance-above">Habilidades</p>
            <button
              className="btn btn-secondary"
              onClick={() => setSkillsHidden(!skillsHidden)}
            >
              {skillsHidden ? "+" : "-"}
            </button>
          </div>
          <div id="skills-body" className={skillsHidden ? "not-show" : null}>
            <p id="firstskills" className="text">
              <span className="sub-title">Principais</span>
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Git/GitHub</span>
              <span>GitFlow</span>
              <span>SCRUM</span>
            </p>
            <p id="othersSkills" className="text">
              <span className="sub-title">Outras</span>
              <span>React Native</span>
              <span>jQuery</span>
              <span>MySQL</span>
              <span>Bootstrap</span>
              <span>Heroku</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
