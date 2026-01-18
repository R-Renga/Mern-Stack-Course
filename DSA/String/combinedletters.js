function combinedLetters(s){
    let temp = 0;
    let count = 0;
    for(let val of s){
        if(val === "R"){
            temp++
        }else{
            temp--
        }

        if(temp === 0){
            count++
        }
    }
    return count;
}

let results = combinedLetters("RLRRLLLRRL")
console.log(results);
