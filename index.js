//document.getElementById("addBtn").addEventListener("click", newElement);
document.getElementById("myForm").addEventListener("submit", newElement);
 


// Create a new list item when clicking on the "Add" button
function newElement(event) {
  event.preventDefault();
  let li = document.createElement("li");
  let p = document.createElement("p");
  
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(p)
  p.appendChild(t);
  p.addEventListener("click", editItem);
 
 
  
  if (inputValue === '') {
    alert("You gotta write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  
  

  //create check button
  let vBtn = document.createElement("button");
  let vtxt = document.createTextNode("v");
  vBtn.className = "checkBtn";
  vBtn.addEventListener("click", addStrikethrough);
  vBtn.appendChild(vtxt);
  li.appendChild(vBtn);  

  //create close button
  let xBtn = document.createElement("button");
  let xtxt = document.createTextNode("x");
  xBtn.className = "closeBtn";
  xBtn.addEventListener("click", removeElement);
  xBtn.appendChild(xtxt);
  li.appendChild(xBtn);  

 
}



function removeElement(elem) {
  elem.target.parentNode.remove();
}

function addStrikethrough(ev) {
  ev.target.parentNode.classList.toggle('checked');
}

function editItem(item) {
//console.log("editing the thing");
  const checkBtn = item.target.parentNode.childNodes[1];
  const inputChild = item.target;
  const newInput = document.createElement("input");
  newInput.value = inputChild.innerText;
  newInput.type = "text";
  
  item.target.parentNode.insertBefore(newInput, checkBtn);
  newInput.focus();
  item.target.parentNode.removeChild(inputChild);
  item.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      newElement(event);
    }
  })
}