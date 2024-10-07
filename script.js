const element = document.getElementById('loginsignup2');
const body = document.getElementById("all");
function Visibility() 
{
    element.style.visibility = 'visible';
    body.style.opacity='0.05';
}  
const head = document.getElementById("head");
const para = document.getElementById("para");
const cover = document.getElementById("coverid");
const colorchange  = document.getElementById("colorchange");
function move()
{    
 
    cover.style.transform = 'translateX(0)';
    cover.style.borderTopRightRadius="100%";
    cover.style.borderBottomRightRadius="100%";
    cover.style.borderTopLeftRadius="0";
    cover.style.borderBottomLeftRadius="0";
    head.innerText = 'Welcome!';
    para.innerText = 'Enter your Personal Details to see the Tasks Assigned to you.';        
}
function moveback()
{
  
    cover.style.transform = 'translateX(100%)';
    cover.style.borderTopLeftRadius="100%";
    cover.style.borderBottomLeftRadius="100%";
    cover.style.borderTopRightRadius="0";
    cover.style.borderBottomRightRadius="0";
    head.innerText = 'Welcome!';
    para.innerText = 'Enter your Personal Details to see the Tasks Progress of Your Team.'         
}

function admin()
{
    const email = document.getElementById('emailid').value;
    const pass = document.getElementById('passwordid').value;
    const incorrect = document.getElementById('invalid');
    if(email === "Prateek" && pass==="Prateek123")
    {
        window.location.href='admin.html';
    }
    else{
        incorrect.innerText="Incorrect Email or Password!";
    }
}

function emp()
{
    const email = document.getElementById('emailidemp').value;
    const pass = document.getElementById('passwordidemp').value;
    const incorrect = document.getElementById('invalidemp');
    if(email === "Pulkit" && pass==="Pulkit123")
    {
        window.location.href='emp1.html';
    }
    else if(email === "Prabhash" && pass==="Prabhash123")
    {
        window.location.href='emp2.html';
    }
    else{
        incorrect.innerText="Incorrect Email or Password!";
    }
}

const container=document.getElementById('align');

// function assign()
// {
//     const taskname= document.getElementById('taskname').value;
//     const taskdesc=document.getElementById('taskdesc').value;
//     const date=document.getElementById('desc').value;
//     const assignedto=document.getElementById('select').value;
//     const task=document.createElement('span');
//     task.classList.add('tasks');
//     task.innerHTML=`<span class="tasks">Task-1 (Prabhash)+<span id="date"><i class="fa-solid fa-circle-dot" style="color: #ff0000;"></i> Today</span></span>`;
// }

document.addEventListener("DOMContentLoaded", function() {
    // Get the necessary elements from the DOM
    const taskNameInput = document.getElementById('task-name');
    const taskDescInput = document.getElementById('task-desc');
    const taskDateInput = document.getElementById('task-date');
    const taskAssignSelect = document.getElementById('task-assign');
    const assignTaskBtn = document.getElementById('assign-task-btn');
    const urgentTasksContainer = document.getElementById('align');

    const employeeMap = {
        'emp1': 'Prabhash',
        'emp2': 'Pulkit'
    };

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            const taskElement = createTaskElement(task);
            urgentTasksContainer.appendChild(taskElement);
        });
    }

    function createTaskElement(task) {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task-item');

        const assigneeName = employeeMap[task.assignee] || task.assignee;  

        taskElement.innerHTML = `
            <span class="tasks">${task.taskName} (${assigneeName}) 
                <span id="date">
                    <i class="fa-solid fa-circle-dot" style="color: #ff0000;"></i> ${task.taskDate}
                </span>
            </span>
            <hr>
        `;
        return taskElement;
    }

    assignTaskBtn.addEventListener('click', function() {
        const taskName = taskNameInput.value.trim();
        const taskDesc = taskDescInput.value.trim(); 
        const taskDate = taskDateInput.value;
        const assignee = taskAssignSelect.value;

        if (!taskName || !taskDesc || !taskDate || assignee === 'select') {
            alert('Please fill in all fields before assigning a task.');
            return;
        }

        const newTask = {
            taskName: taskName,
            taskDesc: taskDesc, 
            taskDate: taskDate,
            assignee: assignee
        };

        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        tasks.push(newTask);

        localStorage.setItem('tasks', JSON.stringify(tasks));

        const taskElement = createTaskElement(newTask);
        urgentTasksContainer.appendChild(taskElement);

        taskNameInput.value = '';
        taskDescInput.value = '';
        taskDateInput.value = '';
        taskAssignSelect.value = 'select';
    });

    loadTasks();
});







