const fs = require('fs');
const input = fs.readFileSync('input', 'utf8').split("\n")

console.log(input[1].length)
let total = 0

let total1 = 0
for (let i = 0; i < input[1].length+1; i++) {
    for (let j = 0; j < input.length+1; j++) {
        let cansee = false
        if (i === 0 || i === input[1].length-1 || j === 0 || j === input.length-1) {total1++;
            console.log(`i: ${i} input[1].length: ${input[1].length} j: ${j} input.length: ${input.length}`)} else {
            for (let l = 0; l < input.length - j; l++) {
                if (!(input[l][i] < input[j][i])) {
                    total += 1
                    cansee = true
                    break
                }
            }
            if (cansee === true) break
            for (let l = j; l < input.length; l++) {
                if (!(input[l][i] < input[j][i])) {
                    total += 1
                    cansee = true
                    break
                }
            }
            if (cansee === true) break


            for (let l = 0; l < input[1].length - i; l++) {
                if (!(input[j][l] < input[j][i])) {
                    total += 1
                    cansee = true
                    break
                }
            }
            if (cansee === true) break
            for (let l = i; l < input.length; l++) {
                if (!(input[j][l] < input[j][i])) {
                    total += 1
                    cansee = true
                    break
                }
            }
            if (cansee === true) break

        }


    }
}
console.log(total1)