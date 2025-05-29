import {Loader} from '../engine/Loader.js';

Loader.loadImage('../static/rabbit.jpg').then((image) => {
  document.body.append(image);
});
