const PubSub = require('../helpers/pub_sub.js');

class FlowerView{

  constructor (container){
    this.container = container;
  }

  bindEvents() {
      PubSub.subscribe('Flowers:flower-data-loaded', (evt) => {
        const flowers = evt.detail;
        this.render(flowers);
      });
    }

    render(flowers) {
      this.clearFlowers();

      flowers.forEach((flower) => {
        const card = this.createCard(flower);
        this.container.appendChild(card);
      });
    }

    clearFlowers() {
      this.container.innerHTML = '';
    }

    createCard(flower) {
      const meta = document.createElement('div');
      meta.classList.add('meta');
      meta.innerHTML = `<span>Sun: ${flower.sun}</span></br>
                        <span>Water: ${flower.water}</span></br>
                        <span>Soil: ${flower.soil}</span>`;



      const header = document.createElement('div');
      header.classList.add("header");
      header.innerHTML = `${flower.name}`;

      const content = document.createElement('div');
      content.classList.add("content");

      const card = document.createElement('div');
      card.classList.add("ui");
      card.classList.add("card");

      const buttons = document.createElement('div');
      buttons.classList.add("ui", "buttons");





      // const buttons = document.createElement('div');
      // button.classList.add("ui", "basic", "red", "btn-group");
      // button.innerHTML = "Delete";
      // button.classList.add("ui", "basic", "blue", "btn-group");
      // button.innerHTML = "Update";


      const deleteButton = document.createElement('button');
      deleteButton.classList.add("ui", "basic", "red", "button",);
      deleteButton.value = flower.id;
      deleteButton.innerHTML = "Delete";
      deleteButton.addEventListener('click', (event) => {
        console.log(event.target.value);
        
      });


      const updateButton = document.createElement("div", "button");
      updateButton.classList.add("ui", "basic", "blue", "button");
      // updateButton.id = `update ${flower.id}`;
      updateButton.innerHTML = "Update";




      content.appendChild(header);
      content.appendChild(meta);
      card.appendChild(content);

      buttons.appendChild(deleteButton);
      buttons.appendChild(updateButton);
      card.appendChild(buttons);
      // card.appendChild(deleteButton);
      // card.appendChild(updateButton);


      // card.appendChild(deleteButton);
      //
      // card.insertAdjacentElement("beforeend", updateButton);




      return card;
    }


}


module.exports = FlowerView;
