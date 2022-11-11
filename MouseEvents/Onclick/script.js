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
