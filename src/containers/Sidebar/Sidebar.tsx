import { useState } from "react";
import "./Sidebar.less";

type Props = {
  align: "top" | "bottom" | "left" | "right";
  w: number;
  h: number;
};

const Sidebar: React.FC<Props> = ({ align, w, h }) => {
  const [hide, setHide] = useState(false);
  const classAdd = align.match(/(top|bottom)/i)
    ? ["col", "row"]
    : ["row", "col"];
  const arr = new Array(8).fill(0);

  const handleHide = () => {
    setHide(!hide);
  };

  return (
    <div className={`sidebar-wrapper ${align} ${hide ? "hide" : null}`}>
      <div className={`sidebar-container ${classAdd[0]}`}>
        <button className="options">O</button>
        <ul className={classAdd[1]}>
          {arr.map((e: number, i: number) => {
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
