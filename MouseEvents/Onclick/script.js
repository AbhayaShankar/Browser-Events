function countRabbits() {
  for (let i = 0; i < 5; i++) {
    console.log("No. of Rabbits are :" + i);
  }
}

let count = 0;
elem.onclick = function countRabbits2() {
  count++;
  console.log("Current Count of Rabbits :" + count);
};
