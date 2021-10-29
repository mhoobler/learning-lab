import { useState } from "react";
import "./Sidebar.less";

type Props = {
  align: "top" | "bottom" | "left" | "right";
  tray: number[];
  w: number;
  h: number;
};

const Sidebar: React.FC<Props> = ({ align, tray, w, h }) => {
  const [hide, setHide] = useState(false);
  const classAdd = align.match(/(top|bottom)/i)
    ? ["col", "row"]
    : ["row", "col"];

  const handleHide = () => {
    setHide(!hide);
  };

  // TODO: Add Modal

  return (
    <div className={`sidebar-wrapper ${align} ${hide ? "hide" : null}`}>
      <div className={`sidebar-container ${classAdd[0]}`}>
        <button className="options clickable">O</button>
        <ul className={classAdd[1]}>
          {tray.map((e: number, i: number) => {
            return (
              <li className="row center centered clickable" key={i}>
                {e}
              </li>
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
