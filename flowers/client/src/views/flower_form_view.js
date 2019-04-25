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
      newFlower.sun = evt.target['sun'].value;
      newFlower.water = evt.target['water'].value;
      newFlower.soil = evt.target['soil'].value;

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
