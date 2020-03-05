import React, { useEffect } from "react";

import AboutMe from "./../components/AboutMe";
import Curriculum from "./../components/Curriculum";

function HomeScreen() {
  useEffect(() => {
    document.title = "LC - Página inicial";
  });
  return (
    <>
      <div className="content">
        <AboutMe />
        <hr />
        <div id="projects" style={{ height: "120vh" }}>
          projects
        </div>
        <hr />
        <div id="texts" style={{ height: "120vh" }}>
          texts
        </div>
        <hr />
        <Curriculum />
      </div>
    </>
  );
}
export default HomeScreen;
