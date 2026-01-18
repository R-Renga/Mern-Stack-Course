function permu(s,t){
let hashs = Array(26).fill(0);
let hashw = Array(26).fill(0);


for(let i=0;i<s.length;i++){
    ++hashs[s.charCodeAt(i)-97]
    ++hashw[s.charCodeAt(i)-97]
}

let i = 0;
let j = s.length - 1;
while(j< t.length){
    if(hashConfirm(hashs,hashw)){
        return true;
    }else{
        --hashw[t.charCodeAt(i) -97];
        i++;
        j++;
        ++hashw[t.charCodeAt(j) - 97]

    }
}

}

function hashConfirm(hashs,hashw){
    for(let i=0;i<26;i++){
        if(hashs[i] !== hashw[i]){
            return false
        }
    }
}


let results = permu("ab","eidbao")