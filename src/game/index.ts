import {Loader} from '../engine/Loader.js';
import {Renderer} from '../engine/Renderer.js';
import {Sprite} from '../engine/Sprite.js';

const loader = new Loader();
loader.addDataImageOrderLoad('rabbit', '../static/rabbit.jpg');
loader.addDataJsonOrderLoad('persons', '../static/persons.json');

let sprite: Sprite;

const renderer = new Renderer({
  width: 700,
  height: 600,

  update(timestamp) {
    // if (sprite) {
    //   sprite.x = renderer.canvas.width / 2 + 100 * Math.sin(timestamp / 300);
    //   sprite.y = renderer.canvas.height / 2 + 100 * Math.cos(timestamp / 300);
    // }
  },
});

document.body.append(renderer.canvas);

loader.load(() => {
  sprite = new Sprite(loader.getImage('rabbit'));

  renderer.stage.addDisplaySprite(sprite);
});
