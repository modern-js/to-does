// ZDRAVEY
var taskInput = document.getElementById('new-task');
var addButton = document.getElementById('add-button');
var incompleteTaskHolder = document.getElementById('incomplete-tasks');
var completeTaskHolder = document.getElementById('complete-tasks');



// LIST ITEMS
var createNewTaskElement = function(taskString) {
  var listItem = document.createElement('li');
  var checkBox = document.createElement('input');
  var label = document.createElement('label');
  var editInput = document.createElement('input');
  var editButton = document.createElement('button');
  var deleteButton = document.createElement('button');

  checkBox.type = 'checkbox';
  editInput.type = 'text';
  editButton.innerText = 'Edit';
  editButton.className = 'edit';
  deleteButton.innerText = 'Delete';
  deleteButton.className = 'delete';
  label.innerText = taskString;

  // appending items
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
};



// BIND ITEMS
var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  // select children
  var checkBox = taskListItem.querySelector('input[type=checkbox]');
  var editButton = taskListItem.querySelector('button.edit');
  var deleteButton = taskListItem.querySelector('button.delete');

  // bind edit button
  editButton.onclick = editTask;

  //bind delete button
  deleteButton.onclick = deleteTask;

  //bind checkbox
  checkBox.onchange = checkBoxEventHandler;
};

// setting click handler to add task action
addButton.addEventListener('click', addTask);
