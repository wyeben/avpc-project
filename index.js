
window.onload = function(){
    loadTasksFromLocalStorage();
  };

    function addTask() {
      const inputField = document.getElementById('taskInput');
      const taskDescription = inputField.value.trim();
      if (taskDescription === '') return;

      const taskList = document.getElementById('taskList');
      const newTask = document.createElement('li');
      newTask.innerHTML = `<input type="checkbox" onchange="toggleTaskCompletion(this)"> 
      ${taskDescription} <button onclick="deleteTask(this.parentNode)">Delete</button>`;
      taskList.appendChild(newTask);

      inputField.value = '';
      saveTasksToLocalStorage();
    }

  function deleteTask(task) {
    task.parentNode.removeChild(task);
    saveTasksToLocalStorage();
  }

  function saveTasksToLocalStorage() {
    const tasks = [];
    const taskList = document.getElementById('taskList').querySelectorAll('li');
    taskList.forEach(task => {
      const taskObj = {
        description: task.textContent.replace('Delete', '').trim(),
        completed: task.classList.contains('completed')
      };
      tasks.push(taskObj);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    tasks.forEach(task => {
      const newTask = document.createElement('li');
      newTask.innerHTML = `<input type="checkbox" onchange="toggleTaskCompletion(this)" ${task.completed ? 'checked' : ''}> 
      ${task.description} <button onclick="deleteTask(this.parentNode)">Delete</button>`;
      if (task.completed) {
        newTask.classList.add('completed');
      }
      taskList.appendChild(newTask);
    });
  }
   
// const checkbox = document.getElementById('myCheckbox');

// // Add an event listener to the checkbox
// checkbox.addEventListener('change', function() {
//     // Check if the checkbox is checked
//     if (this.checked) {
//         document.getElementById('result').innerText = 'Checkbox is checked.';
//     } else {
//         document.getElementById('result').innerText = 'Checkbox is unchecked.';
//     }
// });

function addTodo() {
    let inputValue = document.getElementById("todoInput").value;
  
    let listItem = document.createElement("div");
  
    let checkbox = document.createElement("input");
    checkbox.style.color = "pink";
    checkbox.setAttribute("type", "checkbox");
    // checkbox.style = 
  
    let textSpan = document.createElement("span");
    let textNode = document.createTextNode(inputValue);
    textSpan.appendChild(textNode);
  
    listItem.appendChild(checkbox);
    listItem.appendChild(textSpan);
  
    checkbox.onclick = function() {
      if (checkbox.checked) {
        textSpan.style.textDecoration = "line-through";
      } else {
        textSpan.style.textDecoration = "none";
      }
    };
  
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete"
    deleteButton.onclick = function() {
      listItem.remove();
    };
  
    listItem.appendChild(deleteButton);
    document.getElementById("todoList").appendChild(listItem);
    document.getElementById("todoInput").value ="";
}
