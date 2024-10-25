document.getElementById("add-btn").addEventListener("click", function() {
    const taskInput = document.getElementById("todo-input");
    const task = taskInput.value.trim();
    
    if (task) {
      const taskItem = document.createElement("li");
      taskItem.textContent = task;
      document.getElementById("todo-list").appendChild(taskItem);
      taskInput.value = "";
    }
  });
  