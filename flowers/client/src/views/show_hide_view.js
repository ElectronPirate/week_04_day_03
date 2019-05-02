

class ShowHideView{

  constructor(){

    this.addPlant = document.querySelector('#addPlant');
    this.plants = document.querySelector('#plants');
    this.tracker = document.querySelector('#tracker');

  }


  bindEvents(){
    this.addPlant.addEventListener('click', () => {

      this.showAddPlantForm();

    })
    this.plants.addEventListener('click', () => {
      this.showPlantCards();


    })
    this.tracker.addEventListener('click', () => {
      this.showPlantSchedule();

    })
  }







  showAddPlantForm(){
    const plantForm = document.querySelector('#flower-form');
    plantForm.style.display = 'block';
  }

  showPlantCards(){
    const cardForm = document.querySelector('#flowers-container');
    cardForm.style.display = 'inline-flex';
  }

  showPlantSchedule(){
    const plantCalendar = document.querySelector('#table-container');
    plantCalendar.style.display = 'table';
  }




}


module.exports = ShowHideView;
