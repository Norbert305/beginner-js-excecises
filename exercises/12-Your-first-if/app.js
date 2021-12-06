var total = prompt('How many km are left to go?');

total = parseInt(total)
// Your code below:
let msg = ""

if (total > 100) {
    msg = "We still have a bit of driving left to go"
}

else if (total > 50) {
    msg = "We'll be there in 5 minutes"
}

else {
    "I'm parking. I'll see you right now"
}

console.log(msg)

