import {Loader} from '../engine/Loader.js';

const loader = new Loader();

loader.addDataImageOrderLoad('rabbit', '../static/rabbit.jpg');
loader.addDataJsonOrderLoad('persons', '../static/persons.json');
loader.load(() => {
  console.log('fired!');
});

console.log(loader);
