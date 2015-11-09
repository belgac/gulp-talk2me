var greeting = require('./greeting/greeting.js')
//export the module
module.exports = talk2me;

//create the module base function
function talk2me(packageInfo,tasks){
  //link "this" to a variable
  var gulpTalk2me = this;
  
  //call the greeting function
  gulpTalk2me.greeting = greeting(packageInfo,tasks);
}; 