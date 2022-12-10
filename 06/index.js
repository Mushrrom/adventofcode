//get stuff
const fs = require('fs');
const input = fs.readFileSync('input', 'utf8')

function checkif(items, times) {
    let found = false
    for (let i = 0; i < times; i ++) {
        let items2 = items.slice(0)
        items2.splice(i, 1)
        if (items2.includes(items[i])) found = true
    }
    return found
}

items = []
for (let i = 0; i < 4; i++) items.push(input[i])

for (let i = 4; i < input.length; i++) {
    items.splice(0, 1)
    items.push(input[i])
    if (!checkif(items, 4)) {
        console.log(i + 1)
        break
    }
}

//part 2
items = []
for (let i = 0; i < 14; i++) items.push(input[i])

for (let i = 4; i < input.length; i++) {
    items.splice(0, 1)
    items.push(input[i])
    if (!checkif(items, 14)) {
        console.log(i + 1)
        break
    }
}

//I'm happy wih the way i started this one because part 2 became ctrl+c ctrl+v and changing 4 lines of code