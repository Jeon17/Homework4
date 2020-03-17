var initialsInput = document.querySelector("#initials");
var scoreInput = document.querySelector("#score");


function printHighscores() {
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;
  
  for (var i = 0; i < todos.length; i++){
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete";

    li.appendChild(button);
    todoList.appendChild(li);
  }

}
  
  
  
  
  // either get scores from localstorage or set to empty array


  // sort highscores by score property in descending order

}

function clearHighscores() {
  window.localStorage.removeItem("highscores");
  window.location.reload();
}

