function permutation(s1,s2){
    let hashs = Array(26).fill(0);
    let hashw = Array(26).fill(0);

    let window_length = s1.length;

    for(let i=0;i<window_length;i++){
        ++hashs[s1.charCodeAt(i) - 97]
        ++hashw[s2.charCodeAt(i)- 97]
    }

    let i = 0;
    let j = window_length - 1;
    while(j<s2.length){
        if(ishashsame(hashs,hashw)){
            return true
        }else{
            --hashw[s2.charCodeAt(i)- 97]
            ++i;
            ++j;
            ++hashw[s2.charCodeAt(j)- 97]
        }
    }
    return false
}

function ishashsame(hashs,hashw){
    for(let i =0 ;i<26;i++){
        if(hashs[i] !== hashw[i]){
            return false
        }
    }
    return true
}


let result = permutation("ab","eidbaof");
console.log(result);


//fill 2 array

//fill using charcode incremnt the word

//check whether true or not