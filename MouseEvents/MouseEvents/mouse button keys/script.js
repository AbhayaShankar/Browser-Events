let button = document.getElementById("button");
button.addEventListener("mouseup", (event) => {
  let text = document.getElementById("text");
  switch (event.button) {
    case 0:
      text.textContent = "Left button clicked";
      break;

    case 1:
      text.textContent = "scroll button clicked";
      break;

    case 2:
      text.textContent = "right button clicked";
      break;

    default:
      break;
  }
});

button.addEventListener("mousedown", (event) => {
  let text = document.getElementById("text");
  switch (event.button) {
    case 0:
      text.textContent = "Left button down";
      break;

    case 1:
      text.textContent = "scroll button down";
      break;

    case 2:
      text.textContent = "right button down";
      break;

    default:
      break;
  }
});
