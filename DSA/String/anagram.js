function anagram(s,t){
    if(s.length !== t.length) return false;
    let hash= {};
    for(let i=0;i<s.length;i++){
        if(!hash[s[i]]){
            hash[s[i]] = 1;
        }else{
            hash[s[i]]++;
        }
    }
    for(let j=0;j<t.length;j++){
        if(!hash[t[j]]|| hash[t[j]] < 0 ){
            return false
        }else{
            hash[t[j]]--;
        }
    }
    return true;
}


let result = anagram("nagra","ngara");
console.log(result);
