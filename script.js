const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const task = {text : taskText};
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";

    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${task.text}</span>
        <hr>
        <button class="delete__button" onclick="deleteTask(${index})"><i class="ri-delete-bin-line"></i></button>
        `;

        taskList.appendChild(li);   
    })
}

function updateClock(){
    var now = new Date();
    var dayName = now.getDay();
    var month = now.getMonth();
    var dayNum = now.getDate();
    var year = now.getFullYear();

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];  
    var ids = ["dayName", "month", "day", "year"];
    
    var values = [weeks[dayName], months[month], dayNum, year];
    for (var i = 0; i < values.length; i++) {
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }
}

function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1)
}

initClock();
displayTasks();