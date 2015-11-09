var expect = require('chai').expect;
var taskLister = require('./taskList.js');

describe('taskList', function() {
  it('should render an available task list message with one task', function() {
    var taskList = [{
      name: 'testask1'
    }];

    var result = taskLister(taskList);

    expect(result).to.equal('Available tasks:\n- testask1')
  });

  it('should render an available task list message with two task', function() {
    var taskList = [{
      name: 'testask1'
    }, {
      name: 'testask2'
    }];

    var result = taskLister(taskList);

    expect(result).to.equal('Available tasks:\n- testask1\n- testask2')
  });

  it('should say there are no available tasks', function() {
    var taskList = [];

    var result = taskLister(taskList);

    expect(result).to.equal('No available tasks.')
  });

  it('should say there is a malformed definition in the tasks', function() {
    var taskList = [{}];

    var result = taskLister(taskList);

    expect(result).to.equal('There is a malformed definition in the tasks')
  });
})