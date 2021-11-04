import { useEffect, useState } from "react";

import { SidebarGroup, Canvas, Canvas2 } from "./containers";

import { ProjectProvider } from "./utils/ProjectContext";

import "./App.less";

const App = () => {
  const [res, setRes] = useState<[number, number]>([0, 0]);
  const [projectData, setProjectData] = useState<ProjectDataMap | null>(null);

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    fetch("/api/api/projects?id=1")
      .then((res) => res.json())
      .then((data) => {
        setProjectData(data as ProjectDataMap);
      });

    setRes([innerWidth, innerHeight]);
  }, []);

  return (
    <div className="App">
      {projectData && (
        <ProjectProvider projectData={projectData}>
          <Canvas2 res={res} />
          <SidebarGroup res={res} />
        </ProjectProvider>
      )}
    </div>
  );
};

export default App;
