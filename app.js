//Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task')

//Load all event listenersss
loadEventListeners();

//Load al event listeners
function loadEventListeners(){
    // Add task event
    form.addEventListener('submit', addTask);

    //Remove Task Event
    taskList.addEventListener('click', removeTask)

    //clear task event
    clearBtn.addEventListener('click', clearTasks)

    //Filter tasks event
    filter.addEventListener('keyup', filterTasks)
}

// Add Task
function addTask(e) {

    if(taskInput.value === ''){
        alert('Add a task');
    }

    // Create LI element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to LI
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append the link to the li
    li.appendChild(link);

    //Append the LI to the UL
    taskList.appendChild(li);

    //Clear Input
    taskInput.value = '';


    e.preventDefault();
}


// Remove Task
function removeTask(e) {

    if (e.target.parentElement.classList.contains('delete-item')){

        if(confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();

        }

    }

}

//Clear Task
function clearTasks(){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

//Filter Tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })


}