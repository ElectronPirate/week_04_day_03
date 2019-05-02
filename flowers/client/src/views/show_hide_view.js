

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
    const hidecardForm = document.querySelector('#flowers-container');
    hidecardForm.style.display = 'none';
    const hidePlantCalendar = document.querySelector('#table-container');
    hidePlantCalendar.style.display = 'none';

  }

  showPlantCards(){
    const cardForm = document.querySelector('#flowers-container');
    cardForm.style.display = 'inline-flex';
    const hidePlantCalendar = document.querySelector('#table-container');
    hidePlantCalendar.style.display = 'none';
    const hidePlantForm = document.querySelector('#flower-form');
    hidePlantForm.style.display = 'none';
  }

  showPlantSchedule(){
    const plantCalendar = document.querySelector('#table-container');
    plantCalendar.style.display = 'table';
    const hidecardForm = document.querySelector('#flowers-container');
    hidecardForm.style.display = 'none';
    const hidePlantForm = document.querySelector('#flower-form');
    hidePlantForm.style.display = 'none';

  }




}


module.exports = ShowHideView;
