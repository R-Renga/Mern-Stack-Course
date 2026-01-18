function groupAnagarams(strs){
    let hash = {};
    for(let val of strs){
        let sortstr = val.split("").sort().join("");

        if(!hash[sortstr]){
            hash[sortstr] = [val];
        }else{
            hash[sortstr].push(val)
        }
    }
    console.log(hash);
    return Object.values(hash)
}

let results = groupAnagarams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(results);
