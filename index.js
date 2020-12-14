// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

//when a user clicks on a list item, its removed
{
  const liElement = event.target;
  if (ulElement !== liElement) {
    liElement.removeEventListener("mouseenter", liElementMouseEnter);
    liElement.removeEventListener("mouseleave", liElementMouseLeave);
    liElement.classList.remove("list-group-item-danger");
    liElement.classList.remove("cursor-pointer");
    liElement.classList.add("cursor-not-allowed");
    liElement.classList.add("list-group-item-danger");
    liElement.classList.add("text-decoration-line-through");
    liElement.classList.add("active");
    setTimeout(() => {
      liElement.remove();
      inputTextCreateItemElement.focus();
    }, 1000);
  }

  /*var list = $('<li/>')
          .text(text)
          .on("click",function() { $(this).remove()});
        $("#ul").prepend(list); */

  // Create a new list item when clicking on the "Add" button
  function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
      };
    }
  }
}

console.log('1')

setTimeout(function afterTwoSeconds() {
  console.log('2')
}, 2000)

console.log('3')
