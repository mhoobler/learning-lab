import "./SvgOverlay.less";

const SvgOverlay: React.FC = ({ children }) => {
  return (
    <svg
      className="svg-overlay"
      xmlns="https://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMinYMin"
    >
      {children}
    </svg>
  );
};

export default SvgOverlay;
