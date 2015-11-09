module.exports = taskList;

function taskList(tasks){
  var greeting = '';
  if (tasks && tasks.length > 0) {
    greeting +='Available tasks:';
    for (taskID in tasks){
      if (!tasks[taskID].name){
        greeting = 'There is a malformed definition in the tasks';
        return greeting;
      }
      greeting += '\n'
      greeting += '- '
      greeting += tasks[taskID].name
    };
  } else {
    greeting +='No available tasks.';
  }
  return greeting;
}