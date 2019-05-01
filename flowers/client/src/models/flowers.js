const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

class Flowers{

  constructor(){
    this.data = null;
  }

  bindEvents(){
    PubSub.subscribe('FlowerView:flower-deleted', (event) => {
      const flowerId = event.detail;
      this.deleteFlower(flowerId);
    })
  }

  // bindEvents(){
  //   PubSub.subscribe('FlowerView:flower-updated', (event) => {
  //     const flowerId = event.detail;
  //     this.updateFlower(flowerId);
  //   })
  // }

  getData() {
      const url = `http://localhost:3000/flowers`;
      const request = new RequestHelper(url);
      request.get()
        .then((data) => {
          this.data = data;
          PubSub.publish('Flowers:flower-data-loaded', this.data);
        })
        .catch((message) => {
          console.error(message);
        });

    }

    postFlower(flower) {
    const url = `http://localhost:3000/flowers`;
    const request = new RequestHelper(url);
    request.post(flower)
      .then((flowers) => {
        PubSub.publish('Flowers:flower-data-loaded', flowers);
      })
      .catch(console.error);
  }

    deleteFlower(flowerId){
      const url = `http://localhost:3000/flowers/${flowerId}`;
      const request = new RequestHelper(url);
      request.delete(flowerId)
        .then((flowers) => {
          PubSub.publish('Flowers:flower-data-loaded', flowers);
        })
        .catch(console.error);
    }

    

    // updateFlower(flowerId){
    //   const url = `http://localhost:3000/flowers/${flowerId}`;
    //   const request = new RequestHelper(url);
    //   request.update(flowerId)
    //   .then((flowers) => {
    //     PubSub.publish('Flowers:flower-data-loaded', flowers);
    //
    //   })
    //   .catch(console.error);
    // }





}



module.exports = Flowers;
