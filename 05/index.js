const fs = require('fs');

const list = fs.readFileSync('input', 'utf8').split("\n")
function generateitems() {
    let itemslist = [[], [], [], [], [], [], [], [], []]
    for (let i = 7; i >= 0; i--) {
        let items = list[i].replace(/[\[+\]]/g, " ")

        for (let j = 0; j < items.length; j += 4) {
            itemslist[j / 4].push(items[j + 1])
        }

    }

    for (let i = 0; i < itemslist.length; i++) {
        for (let j = 0; j < itemslist[i].length; j++) {
            if (itemslist[i][j] === ' ') {
                itemslist[i].splice(j, 100)
                break
            }
        }

    }
    return itemslist
}

itemslist = generateitems()

for (let i = 9; i < list.length-1; i++) {
    let instructions = list[i].replace(/move |from |to /g, "")
    instructions = instructions.split(" ")
    let movefrom = instructions[1]-1
    let moveto = instructions[2]-1
    for (let j = 0; j < parseInt(instructions[0]); j++){

        let letter = itemslist[movefrom].at(-1)
        itemslist[movefrom].splice(-1, 1)
        itemslist[moveto].push(letter)

    }
}
let final = ""
for (let i = 0; i < itemslist.length; i++){
    final += itemslist[i].at(-1)
}

console.log(final)

itemslist = generateitems()
for (let i = 9; i < list.length -1; i++) {
    let instructions = list[i].replace(/move |from |to /g, "")
    instructions = instructions.split(" ")
    let movefrom = instructions[1]-1
    let moveto = instructions[2]-1
    let tomove = []
    for (let j = 0; j < parseInt(instructions[0]); j++) {

        let letter = itemslist[movefrom].at(-1)
        tomove.unshift(letter)
        itemslist[movefrom].splice(-1, 1)

    }
    for (let j = 0; j < tomove.length; j++){
        itemslist[moveto].push(tomove[j])
    }


}
final = ""
for (let i = 0; i < itemslist.length; i++){
    final += itemslist[i].at(-1)
}

console.log(final)
