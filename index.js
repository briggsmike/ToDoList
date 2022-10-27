//document.getElementById("addBtn").addEventListener("click", newElement);
document.getElementById("myForm").addEventListener("submit", newElement);
 


// Create a new list item when clicking on the "Add" button
function newElement(event) {
    event.preventDefault();
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You gotta write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";


    let xBtn = document.createElement("button");
    let txt = document.createTextNode("\u00D7");
    xBtn.className = "closeBtn";
    xBtn.addEventListener("click", removeElement);
    xBtn.appendChild(txt);
    li.appendChild(xBtn);  
}

function removeElement(elem) {
    elem.target.parentNode.remove();
}