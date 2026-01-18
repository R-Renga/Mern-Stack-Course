function jewels(j,s){
    let jset = new Set(j);
    let count = 0;
    for(let i=0;i<s.length;i++){
        if(jset.has(s[i])) count++
} 
return count
}

// Input: jewels = “aA”, stones = “aAAbbbb”
// Output: 3

// Input: jewels = “z”, stones = “ZZ”
// Output: 0