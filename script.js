var taskInput = document.getElementById("inputtask");
var btnAdd = document.getElementById("btnadd");
var taskList = document.getElementById("tasklist");

btnAdd.addEventListener("click", () => {
    var taskData = taskInput.value.trim();
    if(taskData==""){
        alert("Please Enter Task");
        return;
    }

    createTask(taskData);
    taskInput.value="";

});

function createTask(data){
    var item=document.createElement("li");
    item.innerHTML=` <input type="checkbox" class="check"> <span>${data}</span> 
    <button class="edit">Edit</button> <button class="delete">Delete</button> `;
    taskList.appendChild(item);


    var check=item.querySelector(".check");
    check.addEventListener("change",()=>{
        var task=item.querySelector("span");
        if(check.checked){
            task.style.textDecoration="line-through";
            task.style.color="green";
        }

        else{
            task.style.textDecoration="none";
            task.style.color="black";

        }

    });



    var editBtn=item.querySelector(".edit");
    editBtn.addEventListener("click",()=>{
        var task=item.querySelector("span");
        var newTask=prompt("Edit Task",task.innerText);
        if(newTask!=null && newTask.trim()!=""){
            task.innerText=newTask;
        }
    });

  

    var deleteBtn=item.querySelector(".delete");
    deleteBtn.addEventListener("click",()=>{
        item.remove();
    });

}

