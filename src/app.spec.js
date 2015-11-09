var expect = require('chai').expect;
var app = require('./app.js');

describe('app',function(){
  
  var packageInfo = {name:'test-package',author:'test-author',license:'test-license'};
  var taskList = [{
    name: 'testask1'
  }];
      
  var appInstance = new app(packageInfo,taskList);
  it('should create an instance of app',function(){
    expect(appInstance).to.be.an.instanceof(app);
  })
  
  describe('#greeting',function(){
    
    it('should output a greeting message',function(){
   
      var result = appInstance.greeting;
      
      expect(result).to.be.a('string');
      expect(result).to.not.equal('');
      expect(result).not.to.be.null;
      expect(result).not.to.be.undefined;
    });
    
  });
});