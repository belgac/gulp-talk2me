var expect = require('chai').expect;
var greeting = require('./greeting.js');

describe('greeting',function(){
  
  it('should create a correct greeting message if all options of packageInfo and tasklist are defined',function(){
    var packageInfo = {name:'test-package',author:'test-author',license:'test-license'};
    var taskList = [{
      name: 'testask1'
    }];
    
    var result = greeting(packageInfo,taskList);
    expect(result).to.equal('Welcome to the gulp build and test system of test-package!\nThis package was built by test-author and is licensed under the test-license license.\nAvailable tasks:\n- testask1');
  });
  
  it('should create a correct greeting message if all options of packageInfo are defined and taskList is undefined',function(){
    var packageInfo = {name:'test-package',author:'test-author',license:'test-license'};
    var taskList = undefined;
    
    var result = greeting(packageInfo,taskList);
    expect(result).to.equal('Welcome to the gulp build and test system of test-package!\nThis package was built by test-author and is licensed under the test-license license.\nNo available tasks.');
  });
  
  it('should create a correct greeting message if taskList is defined and packageInfo is undefined',function(){
    var packageInfo = undefined;
    var taskList = [{
      name: 'testask1'
    }];
    
    var result = greeting(packageInfo,taskList);
    expect(result).to.equal('Welcome to the gulp build and test system of this module!\nAvailable tasks:\n- testask1');
  });
  
  it('should create a correct greeting message if packageInfo and tasklist are undefined',function(){
    
    var result = greeting();
    expect(result).to.equal('Welcome to the gulp build and test system of this module!\nNo available tasks.');
  });
  
})
