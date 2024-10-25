document.getElementById("add-btn").addEventListener("click", function() {
    const taskInput = document.getElementById("todo-input");
    const task = taskInput.value.trim();
  
    if (task) {
      const taskItem = document.createElement("li");
      taskItem.textContent = task;
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete-btn");
      taskItem.appendChild(deleteBtn);
  
      document.getElementById("todo-list").appendChild(taskItem);
      taskInput.value = "";
  
      deleteBtn.addEventListener("click", function() {
        taskItem.remove();
      });
  
      // Toggle "completed" class on task item click
      taskItem.addEventListener("click", function() {
        taskItem.classList.toggle("completed");
      });
    }
  });
  