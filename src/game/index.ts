import {Loader} from '../engine/Loader.js';

const loader = new Loader();

loader.addDataImageOrderLoad('rabbit', '../static/rabbit.jpg');
loader.addDataJsonOrderLoad('persons', '../static/persons.json');
loader.load(() => {
  document.body.append(loader.getImage('rabbit'));
  console.log(loader.getJson('persons'));
});

console.log(loader);
