var greetPackageInfo = require('./greetPackageInfo/greetPackageInfo.js');
var taskList = require('../taskList/taskList.js')

//export the module
module.exports = greeting;

//create the greeting function
function greeting(packageInfo,tasks){
  
  var greetingMessage = ''
  greetingMessage += greetPackageInfo(packageInfo);
  greetingMessage += taskList(tasks);
  
  return greetingMessage;
}
