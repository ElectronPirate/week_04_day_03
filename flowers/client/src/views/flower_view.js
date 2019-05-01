const PubSub = require('../helpers/pub_sub.js');

class FlowerView{

  constructor (container){
    this.container = container;
  }

  bindEvents() {
      PubSub.subscribe('Flowers:flower-data-loaded', (evt) => {
        const flowers = evt.detail;
        this.renderCards(flowers);
        // this.renderTables(flowers);
      });
    }

    renderCards(flowers) {
      this.clearFlowers();

      flowers.forEach((flower) => {
        const card = this.createCard(flower);
        this.container.appendChild(card);
      });


    }

    renderTableRows(flowers) {
      this.clearFlowers();

      flowers.forEach((flower) => {
        const tableRow = this.createTableRow(flower);
        this.container.appendChild(tableRow);
      });


    }


    clearFlowers() {
      this.container.innerHTML = '';
    }

    createCard(flower) {
      const meta = document.createElement('div');
      meta.classList.add('meta');
      meta.innerHTML = `<br><span><span class="card-property">Light:</span> ${flower.light}</span></br>
                        <span><span class="card-property">Water:</span> ${flower.water}</span></br>
                        <span><span class="card-property">Temperature:</span> ${flower.temperature}</span></br>
                        <span><span class="card-property">Humidity:</span> ${flower.humidity}</span></br>
                        <span><span class="card-property">Feed:</span> ${flower.feed}</span></br>
                        <span><span class="card-property">Height and Growth Rate:</span> ${flower.height_growth}</span></br>
                        <span><span class="card-property">Toxicity:</span> ${flower.toxicity}</span></br>
                        <span><span class="card-property">Origin:</span> ${flower.origin}</span>`;



      const header = document.createElement('div');
      header.classList.add("header");
      header.innerHTML = `${flower.name}`;

      const content = document.createElement('div');
      content.classList.add("content");

      const card = document.createElement('div');
      card.classList.add("ui");
      card.classList.add("link");
      card.classList.add("card");

      const buttons = document.createElement('div');
      buttons.classList.add("ui", "buttons");

      const imageDiv = document.createElement('div');
      imageDiv.classList.add("image");

      const image = document.createElement('img');
      // image.src = `images/${flower.image}`;

      if(!flower.image){
        image.src = `images/piranhaPlant.jpg`
      }else{
        image.src = `images/${flower.image}`;
      }

      imageDiv.appendChild(image);




      const deleteButton = document.createElement('button');
      deleteButton.classList.add("ui", "black", "button",);
      deleteButton.value = flower.id;
      deleteButton.innerHTML = "Delete";
      deleteButton.addEventListener('click', (event) => {
        console.log(event.target.value);
        const flowerId = event.target.value;
        PubSub.publish('FlowerView:flower-deleted', flowerId);

      });


      const updateButton = document.createElement("div", "button");
      updateButton.classList.add("ui", "olive", "button");
      updateButton.id = flower.id;
      updateButton.innerHTML = "Update";
      updateButton.addEventListener('click', (event) => {
        console.log(event.target.id);
        // const flowerId = event.target.value;
        // PubSub.publish('FlowerView:flower-updated', flowerId);
      });




      content.appendChild(header);
      content.appendChild(meta);
      card.appendChild(imageDiv)
      card.appendChild(content);


      buttons.appendChild(deleteButton);
      buttons.appendChild(updateButton);
      card.appendChild(buttons);


      // card.insertAdjacentElement("beforeend", updateButton);




      return card;
    }

    createTableRow(flower){
    const row = document.createElement('div');
    row.classList.add('row');
    row.innerHTML = `<span>${flower.name}</span>`;



    const table = document.createElement('div');
    table.classList.add("ui", "celled", "table");



    const imageDiv = document.createElement('div');
    imageDiv.classList.add("image");

    const image = document.createElement('img');
    image.src = `images/${flower.image}`;




    imageDiv.appendChild(image);

    table.appendChild(imageDiv);
    table.appendChild(row);

    return table;


    }


}


module.exports = FlowerView;
