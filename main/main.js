// ZDRAVEY
var taskInput = document.getElementById("new-task");
var addButton = document.getElementById("add-button");
var incompleteTaskHolder = document.getElementById("incomplete-tasks");
var completeTaskHolder = document.getElementById("complete-tasks");




// LIST ITEMS
var createNewTaskElement = function (taskString) {
	var listItem = document.createElement("li");
	var checkBox = document.createElement("input");
	var label = document.createElement("label");
	var editInput = document.createElement("input");
	var editButton = document.createElement("button");
	var deleteButton = document.createElement("button");
	
	checkBox.type = "checkbox";
	editInput.type = "text";
	editButton.innerText = "Edit";
	editButton.className = "edit";
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";
	label.innerText = taskString;
	
	// appending items
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	
	return listItem;
};




// EDIT TASK
var editTask = function () {
	var listItem = this.parentNode;
	var editInput = listItem.querySelector("input[type=text]");
	var label = listItem.querySelector("label");
	
	
	if (listItem.classList.contains("editMode")) {
		// normal mode - text to input value
		label.innerText = editInput.value;
	} else {
		// edit mode - input value to label text
		editInput.value = label.innerText;
	}
	
	// toggle
	listItem.classList.toggle("editMode");
};




// DELETE TASK
var deleteTask = function () {
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    
    // remove parent
    ul.removeChild(listItem);
};




// CREATE TASK
var addTask = function () {
	// create new list item
	var listItem = createNewTaskElement(taskInput.value);
	
	// append item
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskComplete);
	taskInput.value = "";
};




// BIND ITEMS
var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
	
	// select children
	var checkBox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");
	
	// bind edit button
	editButton.onclick = editTask;
	
	//bind delete button
	deleteButton.onclick = deleteTask;
	
	//bind checkbox
	checkBox.onchange = checkBoxEventHandler;
};




// TO COMPLETE TASK
var taskComplete = function () {
	
	// append item
	var listItem = this.parentNode;
	completeTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);
};

// TO INCOMPLETE TASK BACK
var taskIncomplete = function () {
	
	// append item
	var listItem = this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskComplete);
};




// setting click handler to add task action
addButton.addEventListener("click", addTask);




// incrementing
// i spent two days to get this
// and understood that you don't even need this but it's ok
for (
	var i = 0; 
	i < incompleteTaskHolder.children.length; i++){
	bindTaskEvents(incompleteTaskHolder.children[i],taskComplete);
}

// incrementing
for (
	var i = 0; 
	i < completeTaskHolder.children.length; i++){
	bindTaskEvents(completeTaskHolder.children[i],taskIncomplete);
}
