import {
  useCallback,
  useState,
  useRef,
  useEffect,
  SyntheticEvent,
  FC,
} from "react";
import useBreadBoard from "./useBreadBoard";

import { debounce } from "../../utils/susdash";

import "./Canvas.less";

type Props = {
  res: [number, number];
};
type HTMLCanvas = HTMLCanvasElement;
type Context2D = CanvasRenderingContext2D;

const initDraw = (ctx: Context2D | null) => {
  if (!ctx) {
    throw new Error("Context not created");
  }
  useBreadBoard({}, ctx);
};

const scaleDraw = (
  ctx: Context2D | null,
  res: [number, number],
  zoom: number
) => {
  console.log(zoom);
  if (!ctx) {
    throw new Error("Context not created");
  }
  ctx.imageSmoothingEnabled = false;
  const canvas = ctx.canvas;
  const imageObject = new Image();
  imageObject.onload = () => {
    ctx.clearRect(0, 0, res[0], res[1]);
    ctx.scale(zoom, zoom);
    ctx.drawImage(imageObject, 0, 0);
  };

  imageObject.src = canvas.toDataURL();
};

const Canvas: FC<Props> = ({ res }) => {
  const canvasRef = useRef<HTMLCanvas | null>(null);
  const contextRef = useRef<Context2D | null>(null);
  const [zoom, setZoom] = useState(1);
  const handleMove = () => {};
  console.log(res);

  useEffect(() => {
    const handleKeyDown = (evt: KeyboardEvent) => {
      console.log(evt);
      if (evt.key === "ArrowUp") {
        setZoom((curr) => {
          const value = Math.round((curr + 0.1) * 10) / 10;
          console.log(res);
          scaleDraw(contextRef.current, res, value);
          return value;
        });
      }
      if (evt.key === "ArrowDown") {
        setZoom((curr) => {
          const value = Math.round((curr - 0.1) * 10) / 10;
          scaleDraw(contextRef.current, res, value);
          return value;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [res]);

  const handleRef = (elm: HTMLCanvas) => {
    const init = canvasRef.current === null;
    canvasRef.current = elm;
    contextRef.current = elm.getContext("2d");
    if (init) {
      initDraw(contextRef.current);
    }
  };

  return (
    <div className="canvas-container">
      <canvas
        width={res[0]}
        height={res[1]}
        ref={(canvas) =>
          canvas ? handleRef(canvas) : new Error("canvas not loaded")
        }
        onMouseMove={handleMove}
      ></canvas>
    </div>
  );
};

export default Canvas;
