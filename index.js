
// function addTodo() {
//     let inputValue = document.getElementById("todoInput").value;

//     let listItem = document.createElement("div");

//     let checkbox = document.createElement("input");
//     checkbox.setAttribute("type", "checkbox");
//     checkbox.onclick = function() {
//         if (checkbox.checked) {
//             textNode.style.textDecoration = "line-through";
//         } else {
//             textNode.style.textDecoration = "none";
//         }
//     };
//     listItem.appendChild(checkbox);

//     let textNode = document.createTextNode(inputValue);
//     listItem.appendChild(textNode);

//     let deleteButton = document.createElement("button");
//     deleteButton.innerHTML = "X";
//     deleteButton.onclick = function() {
//         listItem.remove();
//     };

//     listItem.appendChild(deleteButton);
//     document.getElementById("todoList").appendChild(listItem);
//     document.getElementById("todoInput").value = "";
// }

// function addTodo() {
//     let inputValue = document.getElementById("todoInput").value;

//     let listItem = document.createElement("div");

//     let checkbox = document.createElement("input");
//     checkbox.setAttribute("type", "checkbox");
//     let textNode = document.createTextNode(inputValue); // Define textNode here
//     listItem.appendChild(checkbox);
//     listItem.appendChild(textNode);

//     checkbox.onclick = function() {
//         if (checkbox.checked) {
//             textNode.style.textDecoration = "line-through";
//         } else {
//             textNode.style.textDecoration = "none";
//         }
//     };

//     let deleteButton = document.createElement("button");
//     deleteButton.innerHTML = "X";
//     deleteButton.onclick = function() {
//         listItem.remove();
//     };

//     listItem.appendChild(deleteButton);
//     document.getElementById("todoList").appendChild(listItem);
//     document.getElementById("todoInput").value = "";
// }


function addTodo() {
    let inputValue = document.getElementById("todoInput").value;
  
    let listItem = document.createElement("div");
  
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
  
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
    deleteButton.innerHTML = "X";
    deleteButton.onclick = function() {
      listItem.remove();
    };
  
    listItem.appendChild(deleteButton);
    document.getElementById("todoList").appendChild(listItem);
    document.getElementById("todoInput").value = "";
  }
  