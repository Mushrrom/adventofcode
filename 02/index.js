const fs = require('fs');

let [topn, currentnum, list] = [0, 0, []]
list = fs.readFileSync('input', 'utf8').split("\n")

for (i = 0; i < list.length; i++) {
    list[i] = list[i].split(" ")
}
/*
notes:
Column 1 (opponent):
A: Rock
B: Paper
C: Scissors

Column 2 (mine):
X: Rock: 1p
Y: Paper: 2p
Z: Scissors: 3p
 */

shapes = ["X", "Y", "Z"]

other = [["B", "A", "C"], ["C", "B", "A"], ["A", "C", "B"]]

//Part one
function score(shapeinput) {
    let [shapescore, winscore] = [0, 0]
    for (let i = 0; i < 3; i++){
        if (shapeinput[1] === shapes[i]) {

            shapescore = i + 1
            for (let ii = 0; ii < 3; ii++) {
                if (other[i][ii] === shapeinput[0]){
                    winscore = ii*3
                }
            }
        }
    }
    return(winscore+shapescore)
}
let total = 0
for (let i = 0; i < list.length; i++) {
    total += score(list[i])
}

console.log(total)


/*
notes:
Column 1 (opponent):
A: Rock
B: Paper
C: Scissors

Column 2 (mine):
X: Rock: 1p
Y: Paper: 2p
Z: Scissors: 3p
 */


shapes = ["X", "Y", "Z"]
shapes2 = ["A", "B", "C"]
other = [["B", "A", "C"], ["C", "B", "A"], ["A", "C", "B"]]
other2 = [[2, 1, 3], [3, 2, 1], [1, 3, 2]]
//Part 2

total = 0
for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < 3; j++) {
        if (list[i][1] === shapes[j]){
            total += j*3
            //console.log(j*3)
            for (let l = 0; l < 3; l++) {
                if (list[i][0] === shapes2[l]){
                    total += other2[l][2-j]
                    //console.log(l)
                    //console.log(2-j)
                    /*console.log(list[i])
                    console.log(other2[l][2-j])*/
                }
            }
        }
    }

}
console.log(total)