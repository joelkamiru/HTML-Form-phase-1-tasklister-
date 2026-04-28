document.addEventListener("DOMContentLoaded", () => {
  // your code here
 
  const taskForm = document.querySelector('#create-task-form');
  const taskList = document.querySelector('#tasks');
  const taskInput = document.querySelector('#new-task-description');

  
  taskForm.addEventListener('submit', (event) => {
    
    event.preventDefault();

    const taskDescription = taskInput.value;

    const newTaskItem = document.createElement('li');
    newTaskItem.textContent = taskDescription;

    taskList.append(newTaskItem);

    taskForm.reset();
  });
});
