import {Sprite} from './Sprite.js';

export class Container {
  displaySprites: Sprite[];

  constructor() {
    this.displaySprites = [];
  }

  add(displaySprite: Sprite): void {
    if (!this.displaySprites.includes(displaySprite)) {
      this.displaySprites.push(displaySprite);
    }
  }

  drawDisplaySprites(ctx: CanvasRenderingContext2D): void {
    for (const displaySprite of this.displaySprites) {
      displaySprite.draw(ctx);
    }
  }
}
