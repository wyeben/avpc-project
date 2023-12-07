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
    