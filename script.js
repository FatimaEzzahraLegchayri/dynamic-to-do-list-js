document.addEventListener('DOMContentLoaded',()=>{
    addTask()
})
const addButton = document.getElementById('add-task-btn')
const taskInput = document.getElementById('task-input')
const taskList = document.getElementById('task-list')

    function addTask(){
        console.log( 'll');
        const taskText = taskInput.trim()
        
        if(taskText == ''){
            alert('enter a task')
        }else{
            const li = document.createElement('li');
            li.textContent = taskText;
            const removeBtn = document.createElement('button')
            removeBtn.textContent = 'Remove'
            removeBtn.classList = 'remove-btn'
            removeBtn.onclick() = function(){
                taskList.removeChild(li)
            }
        }
    }
    addButton.addEventListener('click',addTask())
    taskInput.addEventListener('keypress',function (event){
        console.log(event,'kk');
        
        if(event.key === 'Enter'){
            addTask()
        }
    })
     
// /////////////////

    // let arr = JSON.parse(localStorage.getItem('tasks-list')) || [];
    // function StoreData(){
    //     localStorage.setItem('tasks-list',JSON.stringify(arr))
    // }
    // addButton.addEventListener('click',function add(){
    //     if(taskInput.value === ''){
    //         alert('enter task')
    //     }else{
    //         arr.push(taskInput.value)
    //         StoreData()
    //         console.log(arr);
    //         // localStorage.setItem('tasks-list',JSON.stringify(arr))
    //         taskInput.value = ''
    //     }
    // })

    // function display(){
    //     if(arr.length > 0){
    //         arr.forEach(elment => {
    //             const li = document.createElement('li')
    //             li.textContent = elment  
    //             taskList.appendChild(li)
    //         })
    //     }else{
    //         taskList.textContent = 'no tasks for today.'
    //     }
    // }
    // display()

     