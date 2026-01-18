function lastword(word){
    let n = word.length-1;
    console.log(word[0]);
    
    let count = 0;
    while(n >=0){
        if(word[n] !== " "){
            count++
        }else if(count > 0){
            break
        }
        n--
    }
    return count;

}

let result = lastword("hello worlds");
console.log(result);



