var expect = require('chai').expect;
var greetPackageName = require('./greetPackageName.js');

describe('greetPackageName', function() {
  it('should create a correct package name greeting message if packageInfo.name is defined', function() {
    var packageInfo = {
      name: 'test-package'
    };

    var result = greetPackageName(packageInfo);

    expect(result).to.equal('Welcome to the gulp build and test system of test-package!\n')
  });

  it('should create a correct package name greeting message if packageInfo.name is undefined', function() {
    var packageInfo = {};

    var result = greetPackageName(packageInfo);

    expect(result).to.equal('Welcome to the gulp build and test system of this module!\n')
  });

  it('should create a correct package name greeting message if packageInfo is undefined', function() {
    var packageInfo = undefined;

    var result = greetPackageName(packageInfo);

    expect(result).to.equal('Welcome to the gulp build and test system of this module!\n')
  });
});