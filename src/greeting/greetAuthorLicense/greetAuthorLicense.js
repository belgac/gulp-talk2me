module.exports = greetAuthorLicense;

function greetAuthorLicense(packageInfo){
  var greeting = '';
  
   if (packageInfo && Object.keys(packageInfo).length > 0){
    greeting += 'This package';    
  }
  if (packageInfo && packageInfo.author){
    greeting += ' was built by ';
    greeting += packageInfo.author;
  }
  if (packageInfo && packageInfo.author && packageInfo.license) {
    greeting +=' and';
  }
  if (packageInfo && packageInfo.license) {
    greeting +=' is licensed under the ';
    greeting += packageInfo.license;
    greeting += ' license';
  }
  if (packageInfo && (packageInfo.author || packageInfo.license)) {
    greeting +='.\n';
  }
  
  return greeting;
}