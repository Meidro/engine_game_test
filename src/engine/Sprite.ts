export class Sprite {
  texture: HTMLImageElement;

  frame: {
    x: number;
    y: number;
    width: number;
    height: number;
  };

  x: number;
  y: number;
  width: number;
  height: number;

  constructor(texture: HTMLImageElement) {
    this.texture = texture;
    this.frame = {
      x: 0,
      y: 0,
      width: texture.width,
      height: texture.height,
    };
    this.x = 0;
    this.y = 0;
    this.width = this.frame.width;
    this.height = this.frame.height;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(
      this.texture,

      this.frame.x,
      this.frame.y,
      this.frame.width,
      this.frame.height,

      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
