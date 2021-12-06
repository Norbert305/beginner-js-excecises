// Your code here:

for (let i = 0; i < 100; i++) {
    if (i == 1) {
        console.log(`${i} bottle of milk on the wall, ${i} bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.`)
    }
    else if (i == 99) {
        console.log(`No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, ${i} bottles of milk on the wall.`)
    }
    else {
        console.log(`${i} bottles of milk on the wall, ${i} bottles of milk. Take one down and pass it around, ${i-1} bottles of milk on the wall.`)
    }
}