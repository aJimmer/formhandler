import $ from 'jquery';

let formhandler;

class Formhandler {
  constructor(selector) {
    if (!selector) {
      throw new Error('No selector');
    }
    this.$formElement = $(selector);


    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
    console.log('formhandler initialized...');
  }

  addSubmitHandler(fn) {
    console.log('Setting submit handler for form');
    this.$formElement.submit((event) => {
      event.preventDefault();

      let data = {};
      $(":input").serializeArray().forEach(item => {
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });
      console.log(data);
      fn(data);
    });
  }
}
export default Formhandler
