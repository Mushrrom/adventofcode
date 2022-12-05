const fs = require('fs');


let list = fs.readFileSync('input', 'utf8').split("\n")

for (i = 0; i < list.length; i++){
    list[i] = list[i].split(",")
}
//part one
let total = 0

for (i = 0; i < list.length-1; i++){
    let [a1, a2] = list[i][0].split("-").map(Number)
    let [b1, b2] = list[i][1].split("-").map(Number)

    if ((a1 <= b1 && a2 >= b2) || (a1 >= b1 && a2 <= b2)) {
        total +=1;
    }
}
console.log(total)



//part two

total = 0

for (i = 0; i < list.length-1; i++){
    let [a1, a2] = list[i][0].split("-").map(Number)
    let [b1, b2] = list[i][1].split("-").map(Number)
    
    if ((b1 <= a1 && a1 <= b2) || (a1 <= b2 && b2 <= a2) || (b1 <= a2 && a2 <= b2) || (a1 <= b1 && b1 <= a2)){
        total += 1
    }
}

console.log(total)