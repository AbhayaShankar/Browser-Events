// document.addEventListener("keydown", (event) => {
//   if (event.key == "k") alert("key k is pressed");
//   if (event.code == "KeyZ" && event.ctrlKey) alert("Undo call.");
// });

// example-1 : alert when set of keys are pressed.
let runOnKeys = function (runOnKeys, ...codes) {
  let pressed = new Set();

  document.addEventListener("keydown", (event) => {
    pressed.add(event.code);

    for (let code of codes) {
      if (!pressed.has(code)) return;
    }

    pressed.clear();

    runOnKeys();
  });

  document.addEventListener("keyup", (event) => {
    pressed.delete(event.code);
  });
};

runOnKeys(() => alert("Hello!"), "KeyQ", "KeyW");
runOnKeys(() => alert("Undo!"), "ControlLeft ctrlKey", "KeyZ"); // control doesnt come under codes , so we dont get any result
