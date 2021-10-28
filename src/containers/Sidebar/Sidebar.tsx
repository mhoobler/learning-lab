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

  return (
    <div className={`sidebar-wrapper ${align} ${hide ? "hide" : null}`}>
      <div className={`sidebar-container ${classAdd[0]}`}>
        <button className="options">O</button>
        <ul className={classAdd[1]}>
          {tray.map((e: number, i: number) => {
            return (
              <li className="row center centered" key={i}>
                {e}
              </li>
            );
          })}
        </ul>
        <button className="pull-tab" onClick={handleHide}>
          O
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
