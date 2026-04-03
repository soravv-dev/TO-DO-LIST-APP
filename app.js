 const input = document.getElementById("inputTask");  

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});
function addTask() {
    const newTask = document.createElement("li");
    const tasklist = document.getElementById("tasklist");
    tasklist.prepend(newTask);
    newTask.textContent = document.getElementById("inputTask").value
    document.getElementById("inputTask").value = "";
    deleteTask(newTask);
}

function deleteTask(newTask) {
    const deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    newTask.appendChild(deletebtn);
    deletebtn.onclick = function(){
        newTask.remove();

    }
}
