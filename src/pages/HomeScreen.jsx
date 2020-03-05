import React, { useEffect } from "react";

import AboutMe from "./../components/AboutMe";

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
        <div id="curriculum" style={{ height: "120vh" }}>
          curriculum
        </div>
      </div>
    </>
  );
}
export default HomeScreen;
