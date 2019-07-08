var button = document.getElementById("enter");
var input = document.getElementById("user input");
var ul = document.querySelector("ul");
var parentList = document.getElementById("myList");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    var delButton = document.createElement("button");    
        delButton.appendChild(document.createTextNode("Delete"));
        delButton.className = "delete";
        li.appendChild(delButton);
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }    
}

function addListAfterKeypress(event) {
        if (inputLength() > 0 && event.keyCode === 13) {
            createListElement();
        }
}

function crossOut(event) {
    if (event.target && event.target.nodeName === "LI") {
        event.target.classList.toggle("done");
    }
}

function deleteItem(event) {
    if (event.target && event.target.className === "delete") {
        event.target.parentNode.parentNode.removeChild(event.target.parentNode);    
    } 
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

parentList.addEventListener("click", crossOut);

parentList.addEventListener("click", deleteItem);