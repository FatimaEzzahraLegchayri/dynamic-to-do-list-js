const addButton = document.getElementById('add-task-btn')
const taskInput = document.getElementById('task-input')
const taskList = document.getElementById('task-list')

document.addEventListener('DOMContentLoaded',()=>{
    // addTask()
    loadTasks();
})

function addTask(taskText, save = true){
        const taskText = taskInput.value.trim()
        
        if (!taskText) {
            taskText = taskInput.value.trim();
        }
        if(taskText == ''){
            alert('enter a task')
            return;
        }else{
            const li = document.createElement('li');
            li.textContent = taskText;
            const removeBtn = document.createElement('button')
            removeBtn.textContent = 'Remove'
            removeBtn.classList.add('remove-btn')

            li.appendChild(removeBtn)
            taskList.appendChild(li)
            taskInput.value = ''
            
            removeBtn.onclick = function(){
                taskList.removeChild(li)
            }
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const updatedTasks = storedTasks.filter(storedTask => storedTask !== taskText);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        }  
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }  
}
addButton.addEventListener('click',addTask)
taskInput.addEventListener('keypress',function (event){
    if(event.key === 'Enter'){
        addTask()
    }
})

function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}
   