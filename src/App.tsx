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
} from "./containers";

import "./App.less";

const App = () => {
  const styles = {
    display: "flex",
    height: "18rem",
    flexWrap: "wrap" as const,
  };

  const styles2 = {
    width: "20rem",
    height: "100%",
    flexWrap: "wrap" as const,
  };
  return (
    <div className="App" style={styles}>
      <Power />
      <LEDDisplay />
      <LED />
      <BreadBoard />
      <LabelWrapper title={"Label"} labelPosition={"top"}>
        <div className="row center-spaced" style={styles2}>
          <SpringPin />
          <PushButton />
          <SwitchToggle on={false} />
        </div>
      </LabelWrapper>
    </div>
  );
};

export default App;
