//export the taskList module
module.exports = taskList;

//create the base function receiving tasks and rendering the task list string
function taskList(tasks){
  //init the task list string
  var taskListMessage = '';
  //check if we received tasks
  if (tasks && tasks.length > 0) {
    //if we received tasks lets create a list of tasks
    taskListMessage +='Available tasks:';
    //iterate over the tasks definitions
    for (taskID in tasks){
      //check if the task as a name
      if (!tasks[taskID].name){
        //if there is a task without a name return a error message
        taskListMessage = 'There is a malformed definition in the tasks';
        return taskListMessage;
      }
      //add a new task line
      taskListMessage += '\n'
      //add the dash
      taskListMessage += '- '
      //add the task name
      taskListMessage += tasks[taskID].name
    };
  } else {
    //if there are no task return a message saying it
    taskListMessage +='No available tasks.';
  }
  //return the task list string
  return taskListMessage;
}