// TO COMPLETE TASK
var taskComplete = function() {
  // append item
  var listItem = this.parentNode;
  completeTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
};



// TO INCOMPLETE TASK BACK
var taskIncomplete = function() {
  // append item
  var listItem = this.parentNode;
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskComplete);
};



// DELETE TASK
var deleteTask = function() {
  var listItem = this.parentNode;
  var ul = listItem.parentNode;

  // remove parent
  ul.removeChild(listItem);
};



// CREATE TASK
var addTask = function() {
  // create new list item
  var listItem = createNewTaskElement(taskInput.value);

  // append item
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskComplete);
  taskInput.value = '';
};



// EDIT TASK
var editTask = function() {
  var listItem = this.parentNode;
  var editInput = listItem.querySelector('input[type=text]');
  var label = listItem.querySelector('label');

  if (listItem.classList.contains('editMode')) {
    // normal mode - text to input value
    label.innerText = editInput.value;
  } else {
    // edit mode - input value to label text
    editInput.value = label.innerText;
  }

  // toggle
  listItem.classList.toggle('editMode');
};
