const {displayTask} = require('../helpers/display_helper.js');
const PubSub = require('../helpers/pub_sub.js');

class FlowerTableView{

  constructor (container){
    this.container = container;
  }

  bindEvents() {
      PubSub.subscribe('Flowers:flower-data-loaded', (evt) => {
        const table = evt.detail;
        this.renderTableRows(table);

      });
    }



    renderTableRows(flowers) {
      this.clearTable();


      const tableHeader = document.createElement('thead');
      tableHeader.classList.add("table-header");

      const headerRow = document.createElement('tr');


      const headerPlant = document.createElement('th');
      headerPlant.textContent = 'Plant';

      const headerMonday = document.createElement('th');
      headerMonday.textContent = 'Monday';

      const headerTuesday = document.createElement('th');
      headerTuesday.textContent = 'Tuesday';

      const headerWednesday = document.createElement('th');
      headerWednesday.textContent = 'Wednesday';

      const headerThursday = document.createElement('th');
      headerThursday.textContent = 'Thursday';

      const headerFriday = document.createElement('th');
      headerFriday.textContent = 'Friday';

      const headerSaturday = document.createElement('th');
      headerSaturday.textContent = 'Saturday';

      const headerSunday = document.createElement('th');
      headerSunday.textContent = 'Sunday';



      tableHeader.appendChild(headerRow);

      headerRow.appendChild(headerPlant);
      headerRow.appendChild(headerMonday);
      headerRow.appendChild(headerTuesday);
      headerRow.appendChild(headerWednesday);
      headerRow.appendChild(headerThursday);
      headerRow.appendChild(headerFriday);
      headerRow.appendChild(headerSaturday);
      headerRow.appendChild(headerSunday);

      this.container.appendChild(tableHeader);











      flowers.forEach((flower) => {
        const tableRow = this.createTableRow(flower);
        this.container.appendChild(tableRow);
      });


    }


    clearTable() {
      this.container.innerHTML = '';
    }


    createTableRow(flower){
      const row = document.createElement('tr');
      row.classList.add('row');

    // row.innerHTML = `<span class="table-image-text">${flower.name}</span>`;

    // const table = document.querySelector('#table-container');
    // table.classList.add("ui", "fixed", "table");

      // function displayTask(dayValue){
      //   if(dayValue){
      //     return dayValue;
      //   }
      //   return "";
      // }


      const tableData = document.createElement('td');
      tableData.classList.add('tableData');
      // tableData.src = `images/${flower.image}`;
      // tableData.innerHTML = `<span class="table-image-text">${flower.name}</span>`;

      const tableName = document.createElement('td');
      tableName.classList.add('tableName');
      tableName.innerHTML = `<span class="table-image-text">${displayTask(flower.name)}</span>`;

      const tableMon = document.createElement('td');
      tableMon.classList.add('tableMon');
      tableMon.innerHTML = `<span class="table-task-text">${displayTask(flower.monday)}</span>`;

      const tableTue = document.createElement('td');
      tableTue.classList.add('tableTue');
      tableTue.innerHTML = `<span class="table-task-text">${displayTask(flower.tuesday)}</span>`;

      const tableWed = document.createElement('td');
      tableWed.classList.add('tableWed');
      tableWed.innerHTML = `<span class="table-task-text">${displayTask(flower.wednesday)}</span>`;

      const tableThu = document.createElement('td');
      tableThu.classList.add('tableThu');
      tableThu.innerHTML = `<span class="table-task-text">${displayTask(flower.thursday)}</span>`;

      const tableFri = document.createElement('td');
      tableFri.classList.add('tableFri');
      tableFri.innerHTML = `<span class="table-task-text">${displayTask(flower.friday)}</span>`;

      const tableSat = document.createElement('td');
      tableSat.classList.add('tableSat');
      tableSat.innerHTML = `<span class="table-task-text">${displayTask(flower.saturday)}</span>`;

      const tableSun = document.createElement('td');
      tableSun.classList.add('tableSun');
      tableSun.innerHTML = `<span class="table-task-text">${displayTask(flower.sunday)}</span>`;



      const imageDiv = document.createElement('div');


      const image = document.createElement('img');
      image.classList.add("ui", "fluid", "image");

      if(!flower.image){
        image.src = `images/piranhaPlant.jpg`
      }else{
        image.src = `images/${flower.image}`;
      }









      row.appendChild(tableData);
      tableData.appendChild(imageDiv);
      imageDiv.appendChild(image);
      tableData.appendChild(tableName);

      row.appendChild(tableMon);
      row.appendChild(tableTue);
      row.appendChild(tableWed);
      row.appendChild(tableThu);
      row.appendChild(tableFri);
      row.appendChild(tableSat);
      row.appendChild(tableSun);



      // table.appendChild(row);

      // table.appendChild(row);

      return row;


    }


}


module.exports = FlowerTableView;
