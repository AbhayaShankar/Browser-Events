function countRabbits() {
  for (let i = 0; i < 5; i++) {
    console.log("No. of Rabbits are :" + i);
  }
}

let count = 0;
//incrementing the number of rabbit counts when onCLick event is called .
elem.onclick = function countRabbits2() {
  count++;
  console.log("Current Count of Rabbits :" + count);
};

function sayThanks() {
  console.log("Thanks!");
}

elem.onclick = sayThanks;

//mouseup and mousedown event
class Menu {
  handleEvent(event) {
    switch (event.type) {
      case "mousedown":
        btn.innerHTML = "mouse pressed down.";
        break;

      case "mouseup":
        btn.innerHTML += "...and released.";
        break;
    }
  }
}

let menu = new Menu();

btn.addEventListener("mouseup", menu);
btn.addEventListener("mousedown", menu);
