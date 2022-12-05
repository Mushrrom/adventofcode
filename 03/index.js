const fs = require('fs');

list = fs.readFileSync('input', 'utf8').split("\n")

for (i = 0; i < list.length; i++) {
    let stri = list[i]
    list[i] = [stri.slice(0, stri.length / 2), stri.slice(stri.length / 2, stri.length)]
}
let total = 0
for (i = 0; i < list.length; i++){
    let found = 0
    for (j = 0; j < list[i][0].length; j++){
        for (k = 0; k < list[i][0].length; k++) {
            if (list[i][0][j] === list[i][1][k]){
                let aa = list[i][0][j].charCodeAt(0)-96
                if (aa < 0) aa += 58
                found = 1
                total += aa
            }
            if (found === 1) break
        }
        if (found === 1) break
    }
}
console.log(total)

total = 0
list2 = fs.readFileSync('input', 'utf8').split("\n")
for (let i = 0; i < list2.length; i += 3) {
    let found = 0
    for (i1 = 0; i1 < list2[i].length; i1++) {
        for (i2 = 0; i2 < list2[i+1].length; i2++) {
            for (i3 = 0; i3 < list2[i+2].length; i3++) {
                if (list2[i][i1] === list2[i+1][i2] && list2[i][i1] === list2[i+2][i3]) {
                    let aa = list2[i][i1].charCodeAt(0)-96
                    if (aa < 0) aa += 58
                    found = 1
                    total += aa
                }
                if (found === 1) break
            }
            if (found === 1) break
        }
        if (found === 1) break
    }
}
console.log(total)
