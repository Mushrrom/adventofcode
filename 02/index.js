const fs = require('fs');

let [topn, currentnum, list] = [0, 0, []]
list = fs.readFileSync('input', 'utf8').split("\n")

for (i = 0; i < list.length(); i++) {

}
/*
Column 1:
A: Rock
B: Paper
C: Scissors

Column 2:
X: Rock
Y: Paper
Z: Scissors
 */


rock = ["y", "x", "z"]
paper = ["z", "y", "x"]
scissors = [""]