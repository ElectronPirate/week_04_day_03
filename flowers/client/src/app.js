const FlowerView = require('./views/flower_view.js');
const Flowers = require('./models/flowers.js');
const FlowerFormView = require('./views/flower_form_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const flowerContainer = document.querySelector('#flowers-container');
  const flowerView = new FlowerView(flowerContainer);
  flowerView.bindEvents();

  const formElement = document.querySelector('#flower-form');
  const flowerFormView = new FlowerFormView(formElement);
  flowerFormView.bindEvents();


  const characters = new Flowers();
    characters.getData();
  });
