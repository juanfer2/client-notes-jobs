import React, { useState, useEffect } from 'react';
import { CopyBlock, dracula  } from "react-code-blocks";
import ProjectsModule from '../../modules/projects';
import QueriesModule from '../../modules/queries';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ProjectsModule/>
      {/** <QueriesModule/> */}
    </div>
  )
}

export default Home
