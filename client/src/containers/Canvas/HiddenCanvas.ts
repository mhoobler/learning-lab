import CanvasObject from "./CanvasObject";

/* console log color scheme
 * #e4e - function call
 * #cc2 - possible failure (i.e. async calls)
 * console.error - #cc2 failure
 * #282 - #cc2 success
 */
class HiddenCanvas {
  canvas: any;
  cx: any;
  xOffset: number;
  yOffset: number;
  zoom: number;
  imageCache: Map<string, HTMLImageElement>;
  entities: { [key: string]: CanvasObject };

  constructor() {
    this.canvas = document.createElement("canvas");
    const cx = this.canvas.getContext("2d");
    if (!cx) {
      throw new Error("Could not create hidden canvas context");
    }

    this.cx = cx;
    this.xOffset = 0;
    this.yOffset = 0;
    this.zoom = 1;
    this.imageCache = new Map();
    this.entities = {};
  }

  async loadProjectData(projectData: ProjectDataType[]) {
    console.log("%c loadProjectData", "color: #e4e");
    const sprites = [];
    for (const pd of projectData) {
      if (!this.entities[pd.id]) {
        const co = new CanvasObject(pd.x, pd.y, 16, 16, pd.sprites);
        sprites.push(...pd.sprites);
        this.entities[pd.id] = co;
      }
    }
    await this.loadImageCache(sprites);
  }

  moveCoordinates(id: string, x: number, y: number) {
    console.log("%c moveCoordinates", "color: #e4e");
    this.entities[id].x = x;
    this.entities[id].y = y;
  }

  getFromPoint(x: number, y: number) {
    console.log("%c getFromPoint", "color: #e4e");
    const entities = Object.values(this.entities);
    const results = [];

    for (const e of entities) {
      const { left, top, right, bottom } = e.getBoundingBox();

      if (x >= left && x <= right && y >= top && y <= bottom) {
        results.push(e);
      }
    }

    return results;
  }

  // TODO: need to cleanup cache
  loadImageCache(sprites: string[]) {
    console.log("%c loadImageCache", "color: #e4e");
    const promiseArray = [];

    for (let uri of sprites) {
      const cache = this.imageCache.get(uri);
      if (!cache) {
        console.log("%c Setting Promise for image cache", "color: #cc2");
        const promise = new Promise((resolve, reject) => {
          const img = new Image();
          // TODO: See if this handles bad URIs
          setTimeout(() => reject(false), 2500);

          img.onload = (evt: any) => {
            const { height, width } = evt.path[0];
            img.height = height;
            img.width = width;
            this.imageCache.set(uri, img);
            console.log("%c Image Cache Success", "color: #282");
            resolve(true);
          };
          img.src = uri;
        });

        promiseArray.push(promise);
      }
    }
    return Promise.all(promiseArray);
  }

  // TODO: Need to utilize the hidden canvas
  render(canvas: HTMLCanvasElement | null) {
    console.log("%c render", "color: #e4e");
    if (!canvas) {
      return console.error("Render fired without canvas element");
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return console.error("Render failed to generate context");
    }
    console.log("%c Attempting Render", "color: #cc2");
    const entities = Object.values(this.entities);
    for (let e of entities) {
      for (let s of e.sprites) {
        const img = this.imageCache.get(s) as any;
        ctx.drawImage(img, e.x, e.y, img.width, img.height);
      }
    }

    console.log("%c Rendered Successfully", "color: #282");
  }
}

export default HiddenCanvas;
