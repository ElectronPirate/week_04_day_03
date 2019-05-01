const Flowers = require('../models/flowers');

class FlowerFormView{

  constructor (element) {
    this.element = element;
  }

  bindEvents() {
    this.element.addEventListener('submit', (evt) => {

      evt.preventDefault();

      const newFlower = {};
      newFlower.name = evt.target['name'].value;
      newFlower.light = evt.target['light'].value;
      newFlower.water = evt.target['water'].value;
      newFlower.temperature = evt.target['temperature'].value;
      newFlower.humidity = evt.target['humidity'].value;
      newFlower.feed = evt.target['feed'].value;
      newFlower.height_growth = evt.target['height-growth'].value;
      newFlower.toxicity = evt.target['toxicity'].value;
      newFlower.origin = evt.target['origin'].value;
      newFlower.monday = evt.target['monday'].value;
      newFlower.tuesday = evt.target['tuesday'].value;
      newFlower.wednesday = evt.target['wednesday'].value;
      newFlower.thursday = evt.target['thursday'].value;
      newFlower.friday = evt.target['friday'].value;
      newFlower.saturday = evt.target['saturday'].value;
      newFlower.sunday = evt.target['sunday'].value;
      newFlower.image = evt.target['image'].value;



      const flowers = new Flowers();
      flowers.postFlower(newFlower);

      this.element.reset();
    });
  }

  // bindEvents() {
  //   this.element.addEventListener('', (evt) => {
  //
  //   });
  }


module.exports = FlowerFormView;
