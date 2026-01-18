function parenthesis(paren){
    let stack = [];
    let hash = {
        "{":"}",
        "[":"]"
    }

    for(let i=0;i<paren.length;i++){
        if(hash[paren[i]]){
            stack.push(paren[i])
        }else{
            let top = stack.pop();
            if(!top || hash[top] !== paren[i]){
                return false
            }
        }
    }
    return true;
}

let result = parenthesis("{[]}");
console.log(result);
