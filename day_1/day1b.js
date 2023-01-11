const fs = require("fs");
const file = fs
  .readFileSync("./input_1.txt", (encoding = "utf8"))
  .split("\r\n");

let arr = [];
let counter = 0;

for (let line of file) {
  if (!line) {
    arr.push(counter);
    counter = 0;
  } else counter += Number(line);
}
arr.push(counter);

console.log(
  arr
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b)
);
