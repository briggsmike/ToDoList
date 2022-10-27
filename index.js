document.getElementById("addBtn").addEventListener("click", newElement);

// Create a new list item when clicking on the "Add" button
function newElement() {
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
      xBtn.appendChild(txt);
      li.appendChild(xBtn);  
  }
// remove an element when X is clicked
  function removeElement(elem) {
  
  }
  

