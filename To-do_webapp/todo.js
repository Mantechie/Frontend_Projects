function addTask() {
    let title = document.getElementById("title").value;
    let desc = document.getElementById("desc").value;

    if (title === "" || desc === "") {
        alert("Please fill all fields");
        return;
    }

    let time = new Date().toLocaleString();

    let li = document.createElement("li");
    li.innerHTML = `
        <div>
            <strong>${title}</strong><br>
            ${desc}<br>
            <span class="time">${time}</span>
        </div>
        <div class="actions">
            <button class="complete" onclick="completeTask(this)">✓</button>
            <button class="delete" onclick="deleteTask(this)">X</button>
        </div>
    `;

    document.getElementById("pending").appendChild(li);

    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";
}

function completeTask(btn) {
    let li = btn.parentElement.parentElement;
    btn.remove();
    document.getElementById("completed").appendChild(li);
}

function deleteTask(btn) {
    btn.parentElement.parentElement.remove();
}
