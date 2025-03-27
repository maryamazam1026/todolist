const taskInput=document.getElementById("taskInput");
const listContainer=document.getElementById("list-container");
function addTask(){
    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }
    else{
       let li=document.createElement("li");
         li.innerHTML=taskInput.value;
            listContainer.appendChild(li);
            let span=document.createElement("span");
            span.innerHTML = "\u00d7"; // Unicode for "×"

            li.appendChild(span);
    }
    taskInput.value="";
    saveTasks();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveTasks();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveTasks();
    }
    },false)
function saveTasks(){
    localStorage.setItem("tasks",listContainer.innerHTML);
}
function showTasks(){
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        listContainer.innerHTML = savedTasks;
    }
}

showTasks();