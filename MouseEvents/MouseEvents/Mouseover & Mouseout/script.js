// 1st

function setImage() {
  img.src = "Images/ocean-3605547__340.jpg";
}

function removeImage() {
  img.src = "Images/sun-rise.jpg";
}

let img = document.getElementById("img");

// 2nd

container.onmouseover = container.onmouseout = handler;

function handler(event) {
  function str(el) {
    if (!el) return "null";
    return el.className || el.tagName;
  }

  log.value +=
    event.type +
    ":  " +
    "target=" +
    str(event.target) +
    ",  relatedTarget=" +
    str(event.relatedTarget) +
    "\n";
  log.scrollTop = log.scrollHeight;

  if (event.type == "mouseover") {
    event.target.style.background = "pink";
  }
  if (event.type == "mouseout") {
    event.target.style.background = "";
  }
}
