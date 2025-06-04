import {RendererClassArgs} from '../types';
import {Container} from './Container.js';

export class Renderer {
  readonly canvas: HTMLCanvasElement;
  readonly ctx: CanvasRenderingContext2D | null;
  background: string;
  update: (timestamp: number) => void;
  stage: Container;

  constructor(args?: RendererClassArgs) {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = args?.width || 500;
    this.canvas.height = args?.height || 500;
    this.background = args?.background || 'gray';
    this.update = args?.update || (() => {});

    this.stage = new Container();

    requestAnimationFrame((timestamp) => this.tick(timestamp));
  }

  private tick(timestamp: number) {
    this.clearCanvas();

    this.update(timestamp);

    this.render();

    requestAnimationFrame((timestamp) => this.tick(timestamp));
  }

  render(): void {
    if (this.ctx) {
      this.stage.drawDisplaySprites(this.ctx);
    }
  }

  clearCanvas(): void {
    if (this.ctx) {
      this.ctx.beginPath();
      this.ctx.fillStyle = this.background;
      this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fill();
    }
  }
}
