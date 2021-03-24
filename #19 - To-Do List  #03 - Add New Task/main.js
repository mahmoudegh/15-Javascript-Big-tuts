/* 
  Students tasks:
  [1] Use sweet alert if input is empty
*/

// Setting up variables
let theInput = document.querySelector('.add-task input');
let theAddButton = document.querySelector('.add-task .plus');
let taskContainer = document.querySelector('.tasks-content');
let noTaskMsg = document.querySelector('.no-tasks-message');
let tasksCount = document.querySelector('.tasks-count span');
let tasksCompleted = document.querySelector('.tasks-completed span');

// Focus on input filed
window.onload = function () {
  theInput.focus();
};

// Add in the task
theAddButton.onclick = function () {
  
  // If input is empty
  if (theInput.value === '') {
    // Students tasks:
    // [1] Use sweet alert if input is empty
    swal("You Should Fill Task Filed");

    document.querySelector('.swal-button').onclick = function () {
      theInput.focus();
    };
    
  } else {

    // Remove no tasks message
    noTaskMsg.remove();

    // Create main span element
    let mainSpan = document.createElement('span');

    // Create delete button
    let deleteElement = document.createElement('span');

    // Create the main span text
    let text = document.createTextNode(theInput.value);

    // Create the delete button text
    let deleteText = document.createTextNode('Delete');

    // Add text to main span
    mainSpan.appendChild(text);

    // Add class to main span
    mainSpan.className = 'task-box';

    // Add text to delete button
    deleteElement.appendChild(deleteText);

    // Add class to delete button
    deleteElement.className = 'delete';

    // Add delete button to main span
    mainSpan.appendChild(deleteElement);

    // Add the task to the container
    taskContainer.appendChild(mainSpan);

    // Empty the input
    theInput.value = '';

    // Focus on filed
    theInput.focus();
  }
};