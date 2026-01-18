let a = [2,3,4,[2,3],[4],[9,8,[3]]];



function flattenInplace(arr){
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            arr.splice(i,1,...flattenInplace(arr[i]));
            i--
        }
    }
    return arr
}

let result = flattenInplace(a);
console.log(result);
