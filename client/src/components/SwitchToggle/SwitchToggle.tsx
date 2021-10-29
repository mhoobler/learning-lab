import { useState } from "react";
import "./SwitchToggle.less";

type Props = {
  on: boolean;
};

const SwitchToggle: React.FC<Props> = ({ on }) => {
  const position = on ? "up" : "down";

  // TODO: Remove state
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(!state);
  };

  // TODO: Style screw-accents
  return (
    <div className={`switch-toggle-wrapper ${position}`}>
      <span className="screw-accent"></span>
      <div className="switch-toggle-container">
        <div className="slider-container">
          <div className="slider" />
          <button className={state ? "on" : ""} onClick={handleClick}></button>
        </div>
      </div>
      <span className="screw-accent"></span>
    </div>
  );
};

export default SwitchToggle;
