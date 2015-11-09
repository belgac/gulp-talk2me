//export the greeting function
module.exports = greetPackageName;

//create a function to greet the gulp user with a basic welcome sentence and the package name (with fallback if no package name is defined)
function greetPackageName(packageInfo) {
  //basic welcome sentence
  var greeting = 'Welcome to the gulp build and test system of ';
  
  //detect if there is info on the package and if this info contains the package name
  if (packageInfo && packageInfo.name) {
    //package name exists, add it to the greeting sentence
    greeting += packageInfo.name;
  } else {
    //package name doesn't exist add the placeholde to the greeting sentence
    greeting +=  'this module';
  }
  //add the sentence end
  greeting += '!';
  //create a new line
  greeting += '\n';
  
  //return the greeting sentence
  return greeting;
}