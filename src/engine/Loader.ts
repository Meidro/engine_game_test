export class Loader {
  loadOrder: {
    dataImagesList: {[key: string]: string};
    dataJsonsList: {[key: string]: string};
  };
  resources: {
    imagesList: {[key: string]: HTMLImageElement};
    jsonsList: {[key: string]: JSON};
  };

  constructor() {
    this.loadOrder = {
      dataImagesList: {},
      dataJsonsList: {},
    };
    this.resources = {
      imagesList: {},
      jsonsList: {},
    };
  }

  addDataImageOrderLoad(imageName: string, src: string) {
    this.loadOrder.dataImagesList[imageName] = src;
  }

  addDataJsonOrderLoad(jsonName: string, address: string) {
    this.loadOrder.dataJsonsList[jsonName] = address;
  }

  getImage(imageName: string): HTMLImageElement {
    return this.resources.imagesList[imageName];
  }

  getJson(jsonName: string): JSON {
    return this.resources.jsonsList[jsonName];
  }

  load(callback: () => void) {
    const promises = [];
    const dataImagesList = this.loadOrder.dataImagesList;
    const dataJsonsList = this.loadOrder.dataJsonsList;

    for (let key in dataImagesList) {
      const promise = Loader.loadImage(dataImagesList[key]).then((image) => {
        this.resources.imagesList[key] = image;
        delete dataImagesList[key];
      });

      promises.push(promise);
    }

    for (let key in dataJsonsList) {
      const promise = Loader.loadJson(dataJsonsList[key]).then((json) => {
        this.resources.jsonsList[key] = json;
        delete dataJsonsList[key];
      });

      promises.push(promise);
    }

    Promise.all(promises).then(callback);
  }

  static loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      try {
        const image: HTMLImageElement = new Image();
        image.src = src;
        image.onload = () => resolve(image);
      } catch (error) {
        reject(error);
      }
    });
  }

  static loadJson(address: string): Promise<JSON> {
    return new Promise((resolve, reject) => {
      fetch(address)
        .then((result) => result.json())
        .then((json) => resolve(json))
        .catch((error) => reject(error));
    });
  }
}
