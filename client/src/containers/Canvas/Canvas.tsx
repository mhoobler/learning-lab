import useBreadBoard from "./useBreadBoard";

import { debounce } from "../../utils/susdash";

const Draw = (elm: HTMLCanvasElement) => {
  const ctx = elm.getContext("2d");
  if (!ctx) {
    throw new Error("Context not created");
  }
  useBreadBoard({}, ctx);

  console.log(elm);
};

const Canvas = () => {
  const handleMove = () => {
    console.log("test");
  };

  return (
    <div className="canvas-container">
      <canvas
        ref={(canvas) =>
          canvas ? Draw(canvas) : new Error("canvas not loaded")
        }
        onMouseMove={handleMove}
      ></canvas>
    </div>
  );
};

export default Canvas;
