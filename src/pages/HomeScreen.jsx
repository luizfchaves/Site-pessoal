import React, { useEffect } from "react";

import AboutMe from "./../components/AboutMe";
import Curriculum from "./../components/Curriculum";
import Projects from "./../components/Projects";

function HomeScreen() {
  useEffect(() => {
    document.title = "LC - Página inicial";
  });
  return (
    <>
      <div className="content">
        <AboutMe />
        <hr />
        <Projects />
        <hr />
        <Curriculum />
      </div>
    </>
  );
}
export default HomeScreen;
