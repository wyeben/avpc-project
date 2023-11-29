function addTodo() {
    let inputValue = document.getElementById("todoInput").value;
    if (inputValue === '') {
      alert("Please enter a task!");
      return;
    }
    // let checkbox = document.createElement("input");
    // checkbox.setAttribute("type", "checkbox");



    let listItem = document.createElement("div");
    let textNode = document.createTextNode(inputValue);
    listItem.appendChild(textNode);
    
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "X";
    deleteButton.onclick = function() {
      listItem.remove();
    };
    
    listItem.appendChild(deleteButton);
    document.getElementById("todoList").appendChild(listItem);
    document.getElementById("todoInput").value = "";
  }

  
// const textElement = document.getElementById('myText');

// // Apply the text-decoration style to cross out the text
// textElement.style.textDecoration = 'line-through';

  



//   <div class="todo-container">
//   <h2>My Todo List</h2>
//   <input type="text" id="todoInput" placeholder="Add new task">
//   <button onclick="addTodo()">Add</button>
//   <ul id="todoList"></ul>
// </div>

  