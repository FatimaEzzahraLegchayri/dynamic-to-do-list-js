const addButton = document.getElementById('add-task-btn')
const input = document.getElementById('task-input')
const taskList = document.getElementById('task-list')

document.addEventListener('DOMContentLoaded',()=>{
    display()
})

let arr = JSON.parse(localStorage.getItem('tasks')) || [];
function addTask(){
    taskList.innerHTML = ''
        const taskInput = input.value.trim()
        if(taskInput == ''){
            alert('enter a task')
        }else{ 
            arr.push(taskInput)
            console.log(arr,'lll');
            input.value = ''
            display()
        }
    localStorage.setItem('tasks',JSON.stringify(arr))   
}

addButton.addEventListener('click',addTask)
input.addEventListener('keypress',function (event){
    if(event.key === 'Enter'){
        addTask()
    }
})

function display(){
    if(arr.length > 0){
        arr.forEach((element,index)=>{
           const li = document.createElement('li')
           const btn = document.createElement('button')
           btn.classList.add('remove-btn')
           btn.textContent = 'remove'
           li.textContent = element
           li.appendChild(btn)
           taskList.appendChild(li)
    
           btn.onclick = function remove(){
            taskList.removeChild(li)
            arr.splice(index,1)
            localStorage.setItem('tasks',JSON.stringify(arr))
            }
        })
    }else{
        taskList.textContent = 'no tasks for today'
    }
}
 

taskInput.value.trim()", "taskText"]