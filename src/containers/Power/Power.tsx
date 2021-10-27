import { LabelWrapper, SwitchToggle } from "../../components";

import "./Power.less";

const Power = () => {
  return (
    <LabelWrapper title="POWER" labelPosition="top">
      <div className="power-contents row">
        <div className="power-labels col center-spaced">
          <span>ON</span>
          <span>OFF</span>
        </div>
        <SwitchToggle on={false} />
      </div>
    </LabelWrapper>
  );
};

export default Power;
