const DisplayHelper = require('../helpers/display_helper.js');


describe('Display Helper', () => {

let displayHelper;

  beforeEach(() => {

  displayHelper =  new DisplayHelper();


  })

  test('should have a value', () => {

    const result = displayHelper.displayTask('monday');
    expect(result).toEqual('monday');
  })

  test('should return empty string if no data provided', () => {
    const result = displayHelper.displayTask(null);
    expect(result).toEqual("");
  })

})
