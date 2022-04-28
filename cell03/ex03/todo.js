function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded .split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res;
}

window.onload = function UpdatePge() {
    if (document.cookie)
    {
        let task = getCookie("task");
        let area = document.getElementById("ft_list");
        area.innerHTML += `
        <div class="task" id="tasked" onclick=RemoveTask()>
            <span id="taskname">
                ${task}
            </span>
        </div> `;
    }
    return ;
}

function RemoveTask () {
    let tasks = document.querySelectorAll("#tasked");
    console.log(document.cookie);
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].onclick = 
        function() {
            this.remove();
        }
    }
    document.cookie = "task=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    return ;
}

function NewToDo() {
    let task = prompt("Task's name :");
    let area = document.getElementById("ft_list");
    
    if (!task)
        return ;
    else
    {
        area.innerHTML += `
        <div class="task" id="tasked" onclick=RemoveTask()>
            <span id="taskname">
                ${task}
            </span>
        </div> `;
    }
    document.cookie = "task="+task;
    return ;
}