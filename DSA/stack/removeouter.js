function removeouter(str){
    let ans = "";
    let stack = [];

    for(let i=0;i<str.length;i++){
        if(str[i] === "("){
            stack.push("(");
            let len = stack.length;
            if(len > 1){
                ans += ans + str[i]
            }
        }else{
            let len = stack.length;
            if(len > 1){
                ans += ans + str[i];
                stack.pop()
            }
        }
    }
    return ans;

}


let result = removeouter("(()())(())(()(()))");
console.log(result);


