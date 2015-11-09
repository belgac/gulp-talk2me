var expect = require('chai').expect;
var greetAuthorLicense = require('./greetAuthorLicense.js');

describe('greetAuthorLicense', function() {

  it('should create a correct author/license greeting message if packageInfo.author and packageInfo.license is defined', function() {
    var packageInfo = {
      author: 'test-author',
      license: 'test-license'
    };

    var result = greetAuthorLicense(packageInfo);

    expect(result).to.equal('This package was built by test-author and is licensed under the test-license license.\n')
  });

  it('should create a correct author/license greeting message if packageInfo.author is defined and packageInfo.license is undefined', function() {
    var packageInfo = {
      author: 'test-author'
    };

    var result = greetAuthorLicense(packageInfo);

    expect(result).to.equal('This package was built by test-author.\n')
  });

  it('should create a correct author/license greeting message if packageInfo.license is defined and packageInfo.author is undefined', function() {
    var packageInfo = {
      license: 'test-license'
    };

    var result = greetAuthorLicense(packageInfo);

    expect(result).to.equal('This package is licensed under the test-license license.\n')
  });

  it('should not render anything if packageInfo.license and packageInfo.author are undefined', function() {
    var packageInfo = {};

    var result = greetAuthorLicense(packageInfo);

    expect(result).to.equal('')
  });

  it('should not render anything if packageInfo is undefined', function() {
    var packageInfo = undefined;

    var result = greetAuthorLicense(packageInfo);

    expect(result).to.equal('')
  });

});