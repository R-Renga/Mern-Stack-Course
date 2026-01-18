function wordsContaining(words,x){
    let res = [];

    for(let i=0;i<words.length;i++){
        for(let j=0;j<words[i].length;j++){
            if(words[i][j] === x){
                res.push[i]
            }
        }
    }
    return res;
}

// Input: words = [“leet”, “code”], x = “e”
// Output: [0, 1]