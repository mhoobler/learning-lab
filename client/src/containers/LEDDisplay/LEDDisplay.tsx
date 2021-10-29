import { LabelWrapper, SpringPin, SvgOverlay } from "../../components";

import "./LEDDisplay.less";

const LEDDisplay = () => {
  return (
    <LabelWrapper title="LED DIGITAL DISPLAY" labelPosition="top">
      <div className="led-display-contents-wrapper">
        <div className="led-display-contents row">
          {/*
          <SvgOverlay>
            <path
              stroke="red"
              stroke-width="0.5"
              fill="transparent"
              d="M 13 20 L 13 40 Q 13 43 16 43"
            />
          </SvgOverlay>
          */}
          <div className="spring-group col">
            <div className="spring-row row top">
              <div className="row center">
                <SpringPin />
                <span>3</span>
              </div>
              <div className="row center">
                <SpringPin />
                <span>4</span>
              </div>
              <div className="row center">
                <SpringPin />
                <span>5</span>
              </div>
              <div className="row center">
                <SpringPin />
                <span>6</span>
              </div>
            </div>
            <div className="led-label"></div>
            <div className="spring-row row bottom">
              <div className="row center">
                <SpringPin />
                <span>7</span>
              </div>
              <div className="row center">
                <SpringPin />
                <span>8</span>
              </div>
              <div className="row center">
                <SpringPin />
                <span>9</span>
              </div>
              <div className="row center">
                <SpringPin />
                <span>10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LabelWrapper>
  );
};

export default LEDDisplay;
