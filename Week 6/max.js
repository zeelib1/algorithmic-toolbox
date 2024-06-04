// by Alexander Nikolskiy- re-arranged for the string expression input
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");

rl.on("line", (input) => {
  const expression = input.trim();

  if (!isValidExpression(expression)) {
    console.error("Invalid arithmetic expression!");
    process.exit(1);
  }

  console.log(`${maxExpressionValue(expression)}`);
  process.exit();
});

function isValidExpression(expression) {
  const validCharsRegex = /^[\d()+\-*/. ]+$/;
  return validCharsRegex.test(expression);
}
//Zvonimir Damjanovic - task
const maxExpressionValue = (expr) => {
  const nums = [];
  const ops = [];

  // Parse the expression - numbers and operators
  for (let i = 0; i < expr.length; i++) {
    if (i % 2 === 0) nums.push(parseInt(expr[i]));
    else ops.push(expr[i]);
  }

  const n = nums.length;
  const m = Array(n)
    .fill()
    .map(() => Array(n).fill(0));
  const M = Array(n)
    .fill()
    .map(() => Array(n).fill(0));

  // Initialize diagonal in matrix
  for (let i = 0; i < n; i++) {
    m[i][i] = nums[i];
    M[i][i] = nums[i];
  }

  // Fill matrices
  for (let s = 1; s < n; s++) {
    for (let i = 0; i < n - s; i++) {
      let j = i + s;
      let minMax = minAndMax(i, j, m, M, ops);
      m[i][j] = minMax.min;
      M[i][j] = minMax.max;
    }
  }

  return M[0][n - 1];
};
// min and max subproblem values
const minAndMax = (i, j, m, M, ops) => {
  let min = Infinity;
  let max = -Infinity;

  for (let k = i; k < j; k++) {
    let a, b, c, d;

    // Multiplication priority
    if (ops[k] === "*") {
      a = M[i][k] * M[k + 1][j];
      b = M[i][k] * m[k + 1][j];
      c = m[i][k] * M[k + 1][j];
      d = m[i][k] * m[k + 1][j];
    } else {
      // Addition and substraction
      let opFunc = ops[k] === "+" ? (x, y) => x + y : (x, y) => x - y;
      a = opFunc(M[i][k], M[k + 1][j]);
      b = opFunc(M[i][k], m[k + 1][j]);
      c = opFunc(m[i][k], M[k + 1][j]);
      d = opFunc(m[i][k], m[k + 1][j]);
    }

    // storing min and max
    min = Math.min(min, a, b, c, d);
    max = Math.max(max, a, b, c, d);
  }

  return { min, max };
};

module.exports = maxExpressionValue;
