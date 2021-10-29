//@ts-ignore
import Icon from "../../assets/breadboard-cell.gif";

type BreadBoardProps = {};

type uBB = (props: BreadBoardProps, ctx: CanvasRenderingContext2D) => void;

/*
 * Load Project Data:
 * */

const useBreadBoard: uBB = (props, ctx) => {
  const canvas2 = document.createElement("canvas");

  const tileWidth = 16;
  const tileCount = 3;
  const multi = 2;

  const img = new Image();
  img.onload = function (evt: any) {
    const { height, width } = evt.path[0];
    canvas2.width = width * 3;
    canvas2.height = height * 3;
    const ctx2 = canvas2.getContext("2d");
    if (!ctx2) {
      throw new Error("cannot get ctx2");
    }

    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        ctx.drawImage(img, x * width, y * height, width, height);
      }
    }
  };

  img.src = Icon;

  ctx.beginPath();
  ctx.rect(20, 20, 20, 20);
  ctx.stroke();
};

export default useBreadBoard;
