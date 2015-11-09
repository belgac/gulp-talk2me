var greetPackageName = require('../greetPackageName/greetPackageName.js');
var greetAuthorLicense = require('../greetAuthorLicense/greetAuthorLicense.js');

module.exports = greetPackage;

function greetPackage(packageInfo){
  var greeting = '';
  
  greeting += greetPackageName(packageInfo);
  greeting +=  greetAuthorLicense(packageInfo);
  
  return greeting;
};
