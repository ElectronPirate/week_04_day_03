const FlowerView = require('./views/flower_view.js');
const Flowers = require('./models/flowers.js');
const FlowerFormView = require('./views/flower_form_view.js');
const FlowerTableView = require('./views/flower_table_view.js');
const ShowHideView = require('./views/show_hide_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const flowerContainer = document.querySelector('#flowers-container');
  const tableContainer = document.querySelector('#table-container');
  const flowerTableView = new FlowerTableView(tableContainer);
  const flowerView = new FlowerView(flowerContainer);
  flowerView.bindEvents();
  flowerTableView.bindEvents();

  const formElement = document.querySelector('#flower-form');
  const flowerFormView = new FlowerFormView(formElement);
  flowerFormView.bindEvents();


  const showHideView = new ShowHideView();
  showHideView.bindEvents();


  const flowers = new Flowers();

    flowers.getData();
    flowers.bindEvents();
  });
