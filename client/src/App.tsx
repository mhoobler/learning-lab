import { useEffect, useState, useContext } from "react";
import {
  LabelWrapper,
  SpringPin,
  SwitchToggle,
  PushButton,
} from "./components";

import { Sidebar, Canvas } from "./containers";

import { debounce } from "./utils/susdash";

import { SidebarProvider, SidebarContext } from "./utils/SidebarContext";

import "./App.less";

type SGprops = { res: [number, number] };

type SidebarStateType = {
  align: "top" | "bottom" | "left" | "right";
  tray: number[];
};

const SidebarGroup: React.FC<SGprops> = ({ res }) => {
  const { state, setState } = useContext(SidebarContext);
  const [selected, setSelected] = useState(-1);

  return (
    <div className="sidebar-group-container unclickable">
      {state.map((e: SidebarStateType, i: number) => {
        return <Sidebar {...e} w={res[0]} h={res[1]} />;
      })}
    </div>
  );
};

const App = () => {
  const [res, setRes] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const { innerWidth, innerHeight } = window;

    setRes([innerWidth, innerHeight]);
  }, []);

  fetch("/api/api/projects?id=1")
    .then((res) => res.json())
    .then((data) => console.log(data));

  return (
    <div className="App">
      <SidebarProvider>
        <SidebarGroup res={res} />
      </SidebarProvider>
      <Canvas res={res} />
    </div>
  );
};

export default App;
