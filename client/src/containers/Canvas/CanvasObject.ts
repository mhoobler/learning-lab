class CanvasObject {
  sprites: string[];
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    sprites: string[]
  ) {
    this.sprites = sprites;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  getBoundingBox() {
    return {
      left: this.x,
      top: this.y,
      right: this.x + this.width,
      bottom: this.y + this.height,
    };
  }
}

export default CanvasObject;
