let task = document.getElementById("task")
let addBtn = document.getElementById("addBtn")
let toDoList = document.getElementById("todo")
let checkBoxes = document.querySelectorAll(".checkBox")
let completed = document.getElementById("completed")

addBtn.addEventListener("click", function() {
    let taskEl = document.createElement("li")
    taskEl.innerHTML = `<input type="checkbox" class="checkBox" /><span>${task.value}</span>
    <button class="btn btn-light remove">Remove</button>`

    toDoList.appendChild(taskEl)
    task.value = ""

})

document.addEventListener("click", function(e){
    if(e.target.className === "btn btn-light remove"){
        let taskEl = e.target.parentElement
        toDoList.removeChild(taskEl)
    }
})

document.addEventListener("change", function(e){
    if(e.target.className === "checkBox"){
        if(e.target.checked){
            let completedTask = e.target.parentElement
            completed.appendChild(completedTask)
        } else if (!e.target.checked){
            let task = e.target.parentElement
            toDoList.appendChild(task)
        }
        
    }
})

