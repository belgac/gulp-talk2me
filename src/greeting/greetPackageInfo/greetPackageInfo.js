//call the module to greet the user with a base sentence and a package name
var greetPackageName = require('../greetPackageName/greetPackageName.js');
//call the module to greet the user with package author and license info
var greetAuthorLicense = require('../greetAuthorLicense/greetAuthorLicense.js');

//export the module
module.exports = greetPackage;

//create the greeting string generator function
function greetPackage(packageInfo){
  //create the basic greeting string
  var greeting = '';
  
  //add the base sentence including package name
  greeting += greetPackageName(packageInfo);
  //add the author and license info
  greeting +=  greetAuthorLicense(packageInfo);
  
  //return the greeting string
  return greeting;
};
