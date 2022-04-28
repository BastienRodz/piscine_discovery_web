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

function setCookie(cname,cvalue,exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires=" + d.toGMTString();
    console.log(cname, cvalue, expires)
	document.cookie = cname+"="+cvalue+"; "+expires;
}

window.onload = function UpdatePge() {
    if (document.cookie)
    {
        let cookies = document.cookie.split(";");

        for (i = 1; i < cookies.length + 1; i++)
        {
            let task = getCookie("task" + i);
            let area = document.getElementById("ft_list");
            area.innerHTML += `
            <div class="task" id="tasked" onclick=RemoveTask()>
                <span id="taskname">
                    <p id="task_content">${task}</p>
                </span>
            </div> `;
        }
    }
    return ;
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    console.log(document.cookie);
}

function setAllCookie() {
    let tasks = document.querySelectorAll("#task_content");
    let count = 1;
    let i = 0;

    while (i < tasks.length)
    {
        setCookie("task" + count, tasks[i].textContent, 30);
        count++;
        i++;
    }
}

function RemoveTask () {
    let tasks = document.querySelectorAll("#tasked");
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].onclick = 
        function() {
            if (confirm("Did you really want to delete that task ?"))
            {
                deleteAllCookies();
                this.remove();
                setAllCookie();
            }
            else
                return ;
        }
    }
    document.cookie = "task=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
    return ;
}

var index = 0;

function NewToDo() {
    let task = prompt("Task's name :");
    let area = document.getElementById("ft_list");
    let count = 0;
    
    if (!task)
        return ;
    else
    {
        if (document.cookie)
        {
            cookies = document.cookie.split(';');
            count = cookies.length + 1;
        }
        else
            count = 1;
        area.innerHTML += `
        <div class="task" id="tasked" onclick=RemoveTask()>
            <span id="taskname">
                <p id="task_content">${task}</p>
            </span>
        </div> `;
        index++;
    }
    setCookie("task" + count, task, 30);
    return ;
}