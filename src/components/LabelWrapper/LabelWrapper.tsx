import "./styles.less";

type Props = {
  title: string;
  labelPosition: string;
};

const LabelTitle: React.FC<{ title: string; labelPosition: string }> = ({
  title,
  labelPosition,
}) => {
  const pathStrings =
    labelPosition === "reverse"
      ? [
          "M 0 100 L 40 30 Q 60 0 100 0 L 100 0 L 100 100  Z",
          "M 100 100 L 60 30 Q 40 0 0 0 L 0 0 L 0 100 Z",
        ]
      : [
          "M 0 0 L 40 70 Q 60 100 100 100 L 100 100 L 100 0 Z",
          "M 100 0 L 60 70 Q 40 100 0 100 L 0 100 L 0 0 Z",
        ];
  if (title) {
    return (
      <div className="label-wrapper-title">
        <div className="svg-container">
          <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d={pathStrings[0]} fill="#484848" />
          </svg>
          <div> {title} </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d={pathStrings[1]} fill="#484848" />
          </svg>
        </div>
      </div>
    );
  }

  return null;
};

const LabelWrapper: React.FC<Props> = ({ children, title, labelPosition }) => {
  return (
    <div className={`label-wrapper ${labelPosition}`}>
      <LabelTitle {...{ title, labelPosition }} />

      {children}
    </div>
  );
};

export default LabelWrapper;
