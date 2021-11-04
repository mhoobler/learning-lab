import { SyntheticEvent } from "react";
import "./TrayItem.less";

type Props = {
  onMouseDown: (evt: SyntheticEvent<HTMLButtonElement>) => void;
};

const TrayItem: React.FC<Props> = ({ children, onMouseDown }) => {
  return (
    <li className="trayitem-container row center centered clickable">
      <button className="clickable" onMouseDown={onMouseDown}>
        {children}
      </button>
    </li>
  );
};

export default TrayItem;
