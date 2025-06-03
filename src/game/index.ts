import {Loader} from '../engine/Loader.js';
import {Renderer} from '../engine/Renderer.js';

const loader = new Loader();
const renderer = new Renderer({
  // update(timestamp) {
  //   renderer.draw((canvas, ctx) => {
  //     ctx.fillStyle = 'green';
  //     ctx.beginPath();
  //     ctx.arc(
  //       canvas.width / 2 + 100 * Math.cos(timestamp / 400),
  //       canvas.height / 2 + 100 * Math.sin(timestamp / 400),
  //       10,
  //       0,
  //       Math.PI * 2
  //     );
  //     ctx.fill();
  //   });
  // },
});

document.body.append(renderer.canvas);

loader.addDataImageOrderLoad('rabbit', '../static/rabbit.jpg');
loader.addDataJsonOrderLoad('persons', '../static/persons.json');
loader.load(() => {});

// console.log(loader);
// console.log(renderer);
