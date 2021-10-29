import { letters, numbers } from "./legend";
import "./BreadBoard.less";

const BreadBoard = () => {
  return (
    <div className="breadboard-wrapper">
      <div className="breadboard-container col spaced">
        {/* POSITIVE */}
        <div className="row positive center-spaced">
          <div className="label">PP</div>
          {numbers.map((vec: number[], i: number) => {
            return (
              <>
                <div className="row cell-group center-spaced">
                  {vec.map((n: number, i2: number) => (
                    <div className="cell row center-spaced">
                      <div className="dot"></div>
                    </div>
                  ))}
                </div>
                {i !== 5 ? <div className="label">{i + 1}</div> : null}
              </>
            );
          })}
          <div className="label">PP</div>
        </div>
        <br />

        <div className="col neutrals">
          {/* GRID */}
          {letters.map((s: string) => (
            <div className="row neutral center-spaced">
              <div className="label">{s}</div>
              {numbers.map((vec: number[], i: number) => (
                <>
                  <div className="row cell-group center-spaced">
                    {vec.map((n: number, i2: number) => (
                      <div className="cell row center-spaced">
                        <div className="dot"></div>
                      </div>
                    ))}
                  </div>
                  {i !== 5 ? <div className="spacer"></div> : null}
                </>
              ))}
              <div className="label">{s}</div>
            </div>
          ))}
        </div>

        {/* GROUND */}
        <br />
        <div className="row ground center-spaced">
          <div className="label">GG</div>
          {numbers.map((vec: number[], i: number) => {
            return (
              <>
                <div className="row cell-group center-spaced">
                  {vec.map((n: number, i2: number) => (
                    <div className="cell row center-spaced">
                      <div className="dot"></div>
                    </div>
                  ))}
                </div>
                {i !== 5 ? <div className="label">{i + 1}</div> : null}
              </>
            );
          })}
          <div className="label">GG</div>
        </div>
      </div>
    </div>
  );
};

export default BreadBoard;
