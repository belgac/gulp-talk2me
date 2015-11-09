//call the module to greet the user with package info
var greetPackageInfo = require('./greetPackageInfo/greetPackageInfo.js');
//call the module to generate a list of available tasks
var taskList = require('../taskList/taskList.js')

//export the module
module.exports = greeting;

//create the greeting function
function greeting(packageInfo,tasks){
  //init the greeting message string
  var greetingMessage = ''
  //get the greeting including package Info
  greetingMessage += greetPackageInfo(packageInfo);
  //get the list of available tasks
  greetingMessage += taskList(tasks);
  //return the greeting message
  return greetingMessage;
}
