const fs = require('fs');
const input = fs.readFileSync('input', 'utf8').split("\n")

let monkeyitems = []
for (i = 0; i < input.length; i+= 7) {
    a = input[i+1].replace("  Starting items: ", "")
    a = a.split(", ").map(Number)
    monkeyitems.push(a)
}


monkeytotal = [0,0,0,0,0,0,0,0]
for (idontknowwhatonamethis = 0; idontknowwhatonamethis < 20; idontknowwhatonamethis++) {
    for (i = 0; i < input.length; i += 7) { //for each monkey
        j = i/7 //gives the actual number of the monkey
        operation = input[i + 2].replace("  Operation: new = old ", "") //gets what to do
        monkeytotal[j] += monkeyitems[j].length
            for (l = 0; l < monkeyitems[j].length; l++) { //for each item the monkey has
                let worry = 0n
                if (operation[0] === "*") { //if its * or +
                    if (operation[2] === "o") {
                        worry = monkeyitems[j][l] * monkeyitems[j][l] // if multiply by each then taht
                    } else {
                        a = operation.replace("* ", "")
                        worry = parseInt(a) * monkeyitems[j][l]
                    }
                } else {
                    a = operation.replace("+ ", "")
                    worry = parseInt(a) + monkeyitems[j][l]

                }

                test = parseInt(input[i + 3].replace("  Test: divisible by ", ""))
                if (worry % test === 0) {
                    throwto = parseInt(input[i + 4].replace("    If true: throw to monkey ", ""))
                    monkeyitems[throwto].push(worry)
                } else {
                    throwto = parseInt(input[i + 5].replace("    If false: throw to monkey ", ""))
                    monkeyitems[throwto].push(worry)
                }
        }
        monkeyitems[j].splice(0, 100)
    }
}

let [topn, top2] = [0, 0]



for (let ii = 0; ii < monkeytotal.length; ii++) {
    if (monkeytotal[ii] > topn) {
        topn = monkeytotal[ii]
    }
}

for (let ii = 0; ii < monkeytotal.length; ii++) {
    if (monkeytotal[ii] > top2 && !(monkeytotal[ii]=== topn)) {
        top2 = monkeytotal[ii]
    }
}

console.log(topn*top2)
console.log(monkeytotal)

// part 2

monkeyitems = []


for (i = 0; i < input.length; i+= 7) {
    a = input[i+1].replace("  Starting items: ", "")
    a = a.split(", ").map(Number)
    monkeyitems.push(a)
}


monkeytotal = [BigInt(0),BigInt(0),BigInt(0),BigInt(0),BigInt(0),BigInt(0),BigInt(0),BigInt(0)]
for (idontknowwhatonamethis = 0; idontknowwhatonamethis < 10000 ; idontknowwhatonamethis++) {
    for (i = 0; i < input.length; i += 7) { //for each monkey
        j = i/7 //gives the actual number of the monkey
        //console.log(j)
        operation = input[i + 2].replace("  Operation: new = old ", "") //gets what to do
        monkeytotal[j] += BigInt(monkeyitems[j].length)
        for (l = 0; l < monkeyitems[j].length; l++) { //for each item the monkey has
            let worry = BigInt(0)
            if (operation[0] === "*") { //if its * or +
                if (operation[2] === "o") {
                    worry = BigInt(monkeyitems[j][l]) * BigInt(monkeyitems[j][l]) // if multiply by each then taht
                } else {
                    a = operation.replace("* ", "")
                    worry = BigInt(parseInt(a)) * BigInt(monkeyitems[j][l])
                }
            } else {
                a = operation.replace("+ ", "")
                worry = BigInt(parseInt(a)) + BigInt(monkeyitems[j][l])

            }
            //worry = Math.floor(worry)
            //console.log(worry.toString())

            test = parseInt(input[i + 3].replace("  Test: divisible by ", ""))
            if (worry % BigInt(test) === BigInt(0)) {
                throwto = parseInt(input[i + 4].replace("    If true: throw to monkey ", ""))
                monkeyitems[throwto].push(worry)
                //if (idontknowwhatonamethis > 9990) console.log("a")
            } else {
                throwto = parseInt(input[i + 5].replace("    If false: throw to monkey ", ""))
                monkeyitems[throwto].push(worry)
                //if (idontknowwhatonamethis > 9990) console.log("b")
            }
        }
        monkeyitems[j].splice(0, 100)
    }
}

[topn, top2] = [0, 0]

for (let ii = 0; ii < monkeytotal.length; ii++) {
    monkeytotal[ii] = parseInt(monkeytotal[ii])
}

for (let ii = 0; ii < monkeytotal.length; ii++) {
    if (monkeytotal[ii] > topn) {
        topn = monkeytotal[ii]
    }
}

for (let ii = 0; ii < monkeytotal.length; ii++) {
    if (monkeytotal[ii] > top2 && !(monkeytotal[ii]=== topn)) {
        top2 = monkeytotal[ii]
    }
}

console.log(topn*top2)
console.log(monkeytotal)