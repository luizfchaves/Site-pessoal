import React from "react";

// import { Container } from './styles';

const AboutMe = () => {
  return (
    <>
      <div id="about-me" className="section">
        <p className="title text-center">Sobre mim</p>
        <p className="sub-title">
          <span style={{ color: "var(--primary-color)" }}>L</span>uiz Fernando
          Alves de Souza{" "}
          <span style={{ color: "var(--primary-color)" }}>C</span>haves
        </p>
        <p className="text">Desenvolvedor Junior</p>
        <p className="text distance-above">isso</p>
      </div>
    </>
  );
};

export default AboutMe;
