import "./TrayItem.less";

type Props = {
  onClick: () => void;
};

const TrayItem: React.FC<Props> = ({ children, onClick }) => {
  return (
    <li className="trayitem-container row center centered clickable">
      <button onClick={onClick}>{children}</button>
    </li>
  );
};

export default TrayItem;
