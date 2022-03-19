import React, { useState } from "react";

import "./styles.css";
const curriculumDate = "19-03-2022"

const Curriculum = () => {
  const [stateCurriculum, setStateCurriculum] = useState("closed");

  async function handleDivCurriculum() {
    await setStateCurriculum(
      stateCurriculum === "opened" ? "closed" : "opened"
    );

    if (stateCurriculum === "closed")
      setTimeout(() => {
        window.scroll({
          top: document.getElementsByClassName("content")[0].attributes[0]
            .ownerElement.offsetHeight,
          left: 0,
          behavior: "smooth"
        });
      }, 250);
  }

  function handleDownloadCurriculum() {
    window.open(`curriculo-${curriculumDate}.pdf`, "_blank");
  }
  return (
    <div id="curriculum">
      <p className="title">Currículo</p>

      <iframe
        id="curriculum-iframe"
        title="curriculum"
        src={`curriculo-${curriculumDate}.pdf`}
        className={`curriculum-${stateCurriculum}`}
      />
      <div className="row to-right distance-above">
        <button className="btn btn-primary" onClick={handleDivCurriculum}>
          {stateCurriculum === "opened" ? "Fechar" : "Abrir"}
        </button>
        <button
          className="btn btn-secondary"
          onClick={handleDownloadCurriculum}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default Curriculum;
