import { useEffect, useState, useContext } from "react";
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

import { SidebarProvider, SidebarContext } from "./utils/SidebarContext";

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

type SidebarStateType = {
  align: "top" | "bottom" | "left" | "right";
  tray: number[];
};

const SidebarGroup: React.FC<SGprops> = ({ res }) => {
  const { state, setState } = useContext(SidebarContext);
  const [selected, setSelected] = useState(-1);

  return (
    <div className="sidebar-group-container">
      {state.map((e: SidebarStateType, i: number) => {
        return <Sidebar {...e} w={res[0]} h={res[1]} />;
      })}
      {/*
       */}
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
      <SidebarProvider>
        <SidebarGroup res={res} />
      </SidebarProvider>
    </div>
  );
};

export default App;
