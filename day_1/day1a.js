const fs = require("fs");
const file = fs
  .readFileSync("./input_1.txt", (encoding = "utf8"))
  .split("\r\n");

let result = 0;
let counter = 0;

for (let line of file) {
  if (!line) {
    if (counter > result) {
      result = counter;
    }
    counter = 0;
  } else counter += Number(line);
}
if (counter > result) {
  result = counter;
  counter = 0;
}

console.log(result);
