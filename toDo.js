let toDoList = document.getElementById('toDoList');
let inputField = document.getElementById('inputField');
let deadline = document.getElementById('deadline');
let addToDoBtn = document.getElementById('addToDo');

addToDoBtn.onclick = function addingToDo() {
    let toDoContainer = document.createElement('div');
    toDoContainer.setAttribute('class', 'toDoInstance')
    toDoList.appendChild(toDoContainer);

    let paragraph = document.createElement('p');
    paragraph.innerHTML = inputField.value;
    paragraph.setAttribute('class', 'toDoItem');
    toDoContainer.appendChild(paragraph);
    inputField.value = "";

    let deadlineSplit = deadline.value.split('-');
    let dueDate = document.createElement('p');
    dueDate.textContent = "Complete by: " + deadlineSplit.reverse().join('-');
    dueDate.setAttribute('class', 'dueDate')
    toDoContainer.appendChild(dueDate);

    let complete = document.createElement('button');
    complete.textContent = 'Completed';
    complete.setAttribute('class', 'completeBtn')
    complete.onclick = () => {
        toDoContainer.remove();
    }
    toDoContainer.appendChild(complete);
}

function ontime() {
    let today = Date.now();
    let parsedDue = Date.parse(deadline.value);
    if (today < parsedDue) {
        dueDate.setAttribute('class', 'ontime');
    } else if (today > parsedDue + 86400000) {
        dueDate.setAttribute('class', 'overDue');
    }
}

setInterval(ontime, 43200000);