import { useState, useContext, SyntheticEvent } from "react";

import { TrayItem } from "../../components";
import { ProjectContext } from "../../utils/ProjectContext";

import "./Sidebar.less";

type Props = {
  tray: number[];
  width: number;
  height: number;
};

const Sidebar: React.FC<Props> = ({ tray, width, height }) => {
  const [hide, setHide] = useState(false);
  const { state } = useContext(ProjectContext);
  const classAdd = ["col", "row"];

  const handleHide = () => {
    setHide(!hide);
  };

  const handleMouseDown = (evt: SyntheticEvent<HTMLButtonElement>) => {
    console.log("tray-click");
  };

  const handleOptionsClick = () => {
    console.log("options-click");
  };

  // TODO: Add Modal

  return (
    <div className={`sidebar-wrapper centered ${hide ? "hide" : ""}`}>
      <div className={`sidebar-container ${classAdd[0]}`}>
        <button className="options clickable" onClick={handleOptionsClick}>
          O
        </button>
        <ul className={classAdd[1]}>
          {/* TODO: Sprites need to load in differently */}
          {tray.map((e: number, i: number) => {
            if (state.projectData[i]) {
              return (
                <TrayItem key={i} onMouseDown={handleMouseDown}>
                  <img
                    src={state.projectData[i].sprites[0]}
                    draggable="false"
                  />
                </TrayItem>
              );
            }
            return (
              <TrayItem key={i} onMouseDown={handleMouseDown}>
                T
              </TrayItem>
            );
          })}
        </ul>
        <button className="pull-tab clickable" onClick={handleHide}>
          O
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
