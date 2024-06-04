// by Alexander Nikolskiy- re-arranged for the array input
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");
let firstLine = true;
let arraySize;
let knapsackCapacity;

rl.on("line", (line) => {
  if (firstLine) {
    [knapsackCapacity, arraySize] = line.toString().split(" ").map(Number);
    firstLine = false;
  } else {
    const weights = line.toString().split(" ").map(Number);
    if (weights.length !== arraySize) {
      console.error("Array size does not match the specified size!");
      process.exit();
    }
    console.log(`${knapsack(knapsackCapacity, weights)}`);
    process.exit();
  }
});

/*********************************************************** */
//Zvonimir Damjanovic - knapsack task
const knapsack = (capacity, weight) => {
  let m = new Array(weight.length + 1);
  //matrix creation
  for (let i = 0; i <= weight.length; i++) {
    m[i] = new Array(capacity + 1).fill(0);
  }
  for (let i = 1; i <= weight.length; i++) {
    for (let w = 1; w <= capacity; w++) {
      //item too heavy, cannot be included
      if (weight[i - 1] > w) {
        m[i][w] = m[i - 1][w];
      } else {
        //include or not include the current item
        m[i][w] = Math.max(
          m[i - 1][w],
          m[i - 1][w - weight[i - 1]] + weight[i - 1]
        );
      }
    }
  }
  return m[weight.length][capacity];
};

module.exports = knapsack;
