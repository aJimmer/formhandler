import Formhandler from './formhandler'

var FORM_SELECTOR = '[data-coffee-order="form"]';

console.log('starting coffeerun es6');
var formhandler = new Formhandler(FORM_SELECTOR);
formhandler.addSubmitHandler((order) => {
  console.log('Adding order for ' + order.emailAddress)
});
