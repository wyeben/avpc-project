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
