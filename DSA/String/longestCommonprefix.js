function longestCommonPrefix(strs){
    let x = 0;
    while(strs[0].length > 0){
        let ch = strs[0][x];
        for(let i=1;i<strs.length;i++){
            if(ch !== strs[i][x] || x === strs[i].length){
                return strs[0].substring(0,1)
            }
        }
        ++x;
    }
}

const result = longestCommonPrefix(["flower", "flow", "flight"])
console.log(result);



// Input: ["flower", "flow", "flight"]

// x = 0: Compare ‘f’ with all → match
// x = 1: Compare ‘l’ → match
// x = 2: Compare ‘o’ vs ‘i’ → mismatch
// Return "fl"