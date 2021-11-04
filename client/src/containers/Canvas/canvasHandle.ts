// hidden canvas
const hc = document.createElement("canvas");
// hidden context
const hctx = hc.getContext("2d");
// control moving canvas
let panLeft = 0;
let panRight = 0;
let zoom = 0;

const cacheImages = new Map();

const init = (pdm: ProjectDataMap, canvas: HTMLCanvasElement) => {
  const pda = Object.keys(pdm).map((key: string) => pdm[key]);
  const ctx = canvas.getContext("2d");
  const newUris = [];

  // get uris out of ProjectData
  for (const pd of pda) {
    const uris = pd.sprites;

    // Add new uris to cacheImages
    for (const uri of uris) {
      if (!cacheImages.get(uri)) {
        cacheImages.set(uri, undefined);
        newUris.push(uri);
      }
    }
  }
  // TODO: Worry about cache cleanup here?

  // Fetch images from uris and add to cache
  const keys = cacheImages.keys();
  for (let key of keys) {
    // if undefined, we haven't fetched the image yet
    if (!cacheImages.get(key)) {
      const img = new Image();
      img.onload = (evt: any) => {
        const { height, width } = evt.path[0];
        cacheImages.set(key, img);
        console.log(cacheImages);

        ctx!.drawImage(img, 0, 0, width, height);
      };
      img.src = key;
    }
  }
};

export { init };
