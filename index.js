


const list = document.getElementById("todoList");
const form = document.getElementById("todoForm");

function newElement() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("inputForm").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
        alert("You gotta write something!");
    } else {
        document.getElementById("todoList").appendChild(li);
    }
    document.getElementById("inputForm") = "";
}

function launch() {
    form.addEventListener("submit", newElement);
}
launch();