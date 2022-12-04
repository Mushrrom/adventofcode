const fs = require('fs');

let [topn, currentnum, list] = [0, 0, []]
list = fs.readFileSync('input', 'utf8').split("\n")


//Part one
for (i = 0; i < list.length; i++){
    if (list[i] === ''){
        if (currentnum > topn) {
            topn = currentnum
        }
        currentnum = 0
    } else {
        
        currentnum += parseInt(list[i])
    }
}

console.log(topn)


//part two
tops = [0, 0, 0]
currentnum = 0
for (i = 0; i < list.length; i++){
    if (list[i] === ''){
        if (currentnum > tops[0]) {
            tops[0] = currentnum
            tops.sort()
        }
        currentnum = 0
    } else {
        
        currentnum += parseInt(list[i])
    }
}

console.log(tops[0]+ tops[1] + tops[2])

//TWO STARS WOOO