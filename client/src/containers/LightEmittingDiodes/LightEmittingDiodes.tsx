import { LabelWrapper, SpringPin } from "../../components";

import "./LightEmittingDiodes.less";

type LEDProps = {
  labels: number[];
  index: number;
  on: boolean;
};

const LED: React.FC<LEDProps> = ({ labels, index, on }) => {
  return (
    <div className="led-container col center-spaced">
      <div className="row top">
        <SpringPin />
        <span className="label">{labels[0]}</span>
      </div>
      <div className="col center-spaced">
        <div className={`led ${on ? "on" : ""}`}></div>
        <div>LED {index + 1}</div>
      </div>
      <div className="row bottom">
        <SpringPin />
        <span className="label">{labels[1]}</span>
      </div>
    </div>
  );
};

const LightEmittingDiodes = () => {
  const labelTuples: number[][] = [
    [11, 12],
    [13, 14],
    [15, 16],
    [17, 18],
    [19, 20],
    [21, 22],
    [23, 24],
    [25, 26],
    [27, 28],
    [29, 30],
  ];
  return (
    <LabelWrapper title="LIGHT EMITTING DIODES" labelPosition="top">
      <div className="led-content-wrapper row">
        {labelTuples.map((labels: number[], i: number) => (
          <LED key={i} labels={labels} index={i} on={i === 3} />
        ))}
      </div>
    </LabelWrapper>
  );
};

export default LightEmittingDiodes;
