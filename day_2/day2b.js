const fs = require("fs");
const file = fs
  .readFileSync("./input_2.txt", (encoding = "utf8"))
  .split("\r\n");

const wins = { A: "Z", B: "X", C: "Y" };
const looses = { A: "Y", B: "Z", C: "X" };
const draws = { A: "X", B: "Y", C: "Z" };

let counter = 0;

function points(choice) {
  switch (choice) {
    case "X":
      return 1;
    case "Y":
      return 2;
    case "Z":
      return 3;
  }
}

function strategy(player1, player2) {
  switch (player2) {
    case "X":
      return wins[player1];
    case "Y":
      return draws[player1];
    case "Z":
      return looses[player1];
  }
}

for (let line of file) {
  line = line.split(" ");
  const player1 = line[0];
  const player2 = strategy(player1, line[1]);
  counter += points(player2);

  if (player2 == draws[player1]) {
    counter += 3;
  } else if (player2 == looses[player1]) counter += 6;
}

console.log(counter);
