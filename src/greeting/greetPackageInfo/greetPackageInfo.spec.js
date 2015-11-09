var expect = require('chai').expect;
var greetPackage = require('./greetPackageInfo.js');

describe('greetPackageInfo', function() {
  it('should create a correct package greeting message if all options of packageInfo are defined', function() {
    var packageInfo = {
      name: 'test-package',
      author: 'test-author',
      license: 'test-license'
    };

    var result = greetPackage(packageInfo);

    expect(result).to.equal('Welcome to the gulp build and test system of test-package!\nThis package was built by test-author and is licensed under the test-license license.\n')
  });

  it('should create a correct package greeting message if all options of packageInfo are undefined', function() {
    var packageInfo = {};

    var result = greetPackage(packageInfo);

    expect(result).to.equal('Welcome to the gulp build and test system of this module!\n')
  });

  it('should create a correct package greeting message if packageInfo is undefined', function() {
    var packageInfo = undefined;

    var result = greetPackage(packageInfo);

    expect(result).to.equal('Welcome to the gulp build and test system of this module!\n')
  });
});