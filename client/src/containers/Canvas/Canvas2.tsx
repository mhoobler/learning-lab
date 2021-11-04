import { FC, useContext, useEffect, useRef, useMemo } from "react";
import { default as HC } from "./HiddenCanvas";

import { ProjectContext } from "../../utils/ProjectContext";

import "./Canvas.less";

type Props = {
  res: [number, number];
};

const Canvas2: FC<Props> = ({ res }) => {
  const HiddenCanvas = useMemo(() => new HC(), []);
  const { state } = useContext(ProjectContext);
  const { projectData } = state;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleRef = (canvas: HTMLCanvasElement) => {
    if (!canvasRef.current) {
      canvasRef.current = canvas;
    }
  };

  // Update Hidden Canvas
  useEffect(() => {
    const loadProject = async () => {
      const values = Object.values(projectData);
      await HiddenCanvas.loadProjectData(values);
      HiddenCanvas.render(canvasRef.current);
    };
    loadProject();
  }, [projectData]);

  const handleMove = () => {};

  return (
    <div className="canvas-container">
      <canvas
        width={res[0]}
        height={res[1]}
        ref={(canvas) =>
          canvas ? handleRef(canvas) : new Error("canvas ref failed")
        }
        onMouseMove={handleMove}
      ></canvas>
    </div>
  );
};

export default Canvas2;
