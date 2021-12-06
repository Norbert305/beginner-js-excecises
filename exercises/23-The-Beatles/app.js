function sing() {

    let lyrics = ""

    for (let i = 0; i < 10; i++) {
        if (i == 4) {
            lyrics+="whisper words of wisdom, let it be, "
        }
        else if (i == 9) {
            lyrics+="there will be an answer, let it be"
        }
        else {
            lyrics+="let it be, "
        }
    }

    return lyrics;

}

//Your code above ^^^

console.log(sing());