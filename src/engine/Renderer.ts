import {RendererClassArgs} from '../types';

export class Renderer {
  readonly canvas: HTMLCanvasElement;
  readonly ctx: CanvasRenderingContext2D | null;
  background: string;
  update: (timestamp: number) => void;

  constructor(args?: RendererClassArgs) {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = args?.width || 500;
    this.canvas.height = args?.height || 500;
    this.background = args?.background || 'black';
    this.update = args?.update || (() => {});

    requestAnimationFrame((timestamp) => this.tick(timestamp));
  }

  private tick(timestamp: number) {
    this.clear();

    this.update(timestamp);

    requestAnimationFrame((timestamp) => this.tick(timestamp));
  }

  draw(callback: (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => void) {
    if (this.ctx) callback(this.canvas, this.ctx);
  }

  clear() {
    if (this.ctx) {
      this.ctx.beginPath();
      this.ctx.fillStyle = this.background;
      this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fill();
    }
  }
}
