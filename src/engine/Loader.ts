export class Loader {
  constructor() {}

  static loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      try {
        const image: HTMLImageElement = new Image();
        image.onload = () => resolve(image);
        image.src = src;
      } catch (error) {
        reject(error);
      }
    });
  }
}
