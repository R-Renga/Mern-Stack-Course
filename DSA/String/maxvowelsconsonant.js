function maxconsonant(s){
    let hash = {};
    for(let i=0;i<s.length;i++){
        if(!hash[s[i]]){
            hash[s[i]] = 1
        }else{
            hash[s[i]]++
        }
    }

    let maxconsonants = 0;
    let maxvowels = 0;
    let vowels = ["a","e","i","o","u"];

    for(let j=0;j<s.length;j++){
        if(vowels.includes(s[j])){
            if(hash[s[j]] > maxvowels){
                maxvowels = hash[s[j]]
            }
        }else{
              if (hash[s[i]] > maxConsonant) {
                maxconsonants = map[s[i]]
            }
        }
    }
    return maxconsonants + maxvowels
}