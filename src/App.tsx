import { useEffect, useState } from "react";
import {
  LabelWrapper,
  SpringPin,
  SwitchToggle,
  PushButton,
} from "./components";

import {
  LEDDisplay,
  Power,
  LightEmittingDiodes as LED,
  BreadBoard,
  Sidebar,
} from "./containers";

import "./App.less";

const debounce = (func: (a: unknown) => unknown, time: number) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (args: unknown) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(args);
    }, time);
  };
};

type SGprops = { res: [number, number] };

const SidebarGroup: React.FC<SGprops> = ({ res }) => {
  return (
    <div className="sidebar-group-container">
      <Sidebar align={"top"} w={res[0]} h={res[1]} />
      <Sidebar align={"left"} w={res[0]} h={res[1]} />
      <Sidebar align={"right"} w={res[0]} h={res[1]} />
      <Sidebar align={"bottom"} w={res[0]} h={res[1]} />
    </div>
  );
};

const App = () => {
  const [res, setRes] = useState<[number, number]>([0, 0]);
  useEffect(() => {
    const handleResize = debounce((evt) => {
      setRes((curr) => [curr[0] + 1, curr[1] + 2]);
    }, 150);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="App">
      <SidebarGroup res={res} />
    </div>
  );
};

export default App;
