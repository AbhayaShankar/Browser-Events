document.querySelector("#category").addEventListener("click", (e) => {
  console.log(e.target.id);
  if (e.target.tagName == "LI") {
    window.location.href = "/" + e.target.id;
  }
});

//Dispatch events script code --

function hide() {
  let event = new CustomEvent("hide", {
    cancelable: true, // without that flag preventDefault doesn't work
  });
  if (!rabbit.dispatchEvent(event)) {
    alert("The action was prevented by a handler");
  } else {
    rabbit.hidden = true;
  }
}

rabbit.addEventListener("hide", function (event) {
  if (confirm("Call preventDefault?")) {
    event.preventDefault();
  }
});
