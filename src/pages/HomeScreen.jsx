import React, { useEffect } from 'react';

import AboutMe from '../components/AboutMe';
import Curriculum from '../components/Curriculum';
import ProjectsList from '../components/ProjectsList';

function HomeScreen() {
  useEffect(() => {
    document.title = 'Luiz Chaves';
  });
  return (
    <div className="content">
      <AboutMe />
      <hr />
      <ProjectsList />
      <hr />
      <Curriculum />
    </div>
  );
}
export default HomeScreen;
