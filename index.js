
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

    