// by Alexander Nikolskiy- reading values from the standard input

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");

rl.once("line", (line) => {
  const [itemsCount, knapsackCapacity] = line.toString().split(" ").map(Number);
  const values = [];
  const weights = [];
  let count = 0;

  rl.on("line", (line) => {
    const [v, w] = readLine(line);
    values.push(v);
    weights.push(w);

    if (++count >= itemsCount) {
      console.log(max(itemsCount, knapsackCapacity, values, weights));
      process.exit();
    }
  });
});

function readLine(line) {
  const v = parseInt(line.toString().split(" ")[0], 10);
  const w = parseInt(line.toString().split(" ")[1], 10);

  return [v, w];
}
// by Zvonimir Damjanovic
function max(count, capacity, values, weights) {
  // extract the profit ratios from values/ weights and sort them out
  let sortedRatios = [];
  for (let i = 0; i < values.length; i++) {
    let ratio = values[i] / weights[i];
    sortedRatios.push({
      index: i,
      ratio: ratio,
      weight: weights[i],
      value: values[i],
    });
  }
  // sort the ratios
  sortedRatios.sort((a, b) => {
    if (a.ratio !== b.ratio) {
      return b.ratio - a.ratio;
    } else {
      return a.weight - b.weight;
    }
  });
  let result = 0;
  //set according to knapsack capacity
  for (let i = 0; i < sortedRatios.length; i++) {
    if (capacity === 0) break;
    if (capacity >= sortedRatios[i].weight) {
      capacity -= sortedRatios[i].weight;
      result += sortedRatios[i].value;
    } else {
      result += (capacity / sortedRatios[i].weight) * sortedRatios[i].value;
      break;
    }
  }
  return result;
}

module.exports = max;
