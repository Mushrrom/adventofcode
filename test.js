const list = [1, 2, 3, 4, 5]

console.log(list.at(-1))

let list2 = list

list2.splice(-1, 1)
list2.push(["a", "b"])
console.log(list)
console.log(list2)

console.log(list[list.length-1])


if ("a" in ["a", "b"]){
    console.log("a")
} else {
    console.log("B")
}