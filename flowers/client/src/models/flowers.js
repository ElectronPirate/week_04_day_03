const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

class Flowers{

  constructor(){
    this.data = null;
  }

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





}



module.exports = Flowers;
