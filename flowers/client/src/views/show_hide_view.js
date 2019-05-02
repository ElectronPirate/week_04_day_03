

class ShowHideView{

  constructor(){

    this.addPlant = document.querySelector('#addPlant');
    this.plants = document.querySelector('#plants');
    this.tracker = document.querySelector('#tracker');

  }


  bindEvents(){
    this.addPlant.addEventListener('click', () => {

      this.showAddPlantForm();
      PubSub.publish('ShowHideView:button-clicked');
    })
  }

  bindEvents(){
    this.plants.addEventListener('click', () => {
      this.showPlantCards();
      PubSub.publish('ShowHideView:button-clicked');
    })
  }

  bindEvents(){
    this.tracker.addEventListener('click', () => {
      this.showPlantSchedule();
      PubSub.publish('ShowHideView:button-clicked');
    })
  }



  showAddPlantForm(){
    this.addPlant.style.display = 'visible';
  }

  showPlantCards(){
    this.plants.style.display = 'visible';
  }

  showPlantSchedule(){
    this.tracker.style.display = 'visible';
  }




}


module.exports = ShowHideView;
