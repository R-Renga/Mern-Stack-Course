function firstocc(arr,target){
    let left = 0;
    let right = arr.length - 1;
    let first = -1

    while(left <= right){
        let middle = Math.floor((left+right)/2);
        if(middle === target){
            right = middle - 1;
            first = middle;
        }else if(middle < target){
            left = middle + 1
        }else{
            right = middle - 1
        }
    }
    return first;
}


function lastocc(){
    let left = 0;
    let right = arr.length - 1;
    let last = -1

    while(left <= right){
        let middle = Math.floor((left+right)/2);
        if(middle === target){
            last = middle +  1;
            first = middle;
        }else if(middle < target){
            left = middle + 1
        }else{
            right = middle - 1
        }
    }
    return last;
}

function result(arr,target){
    return [
        firstocc(arr,target),
        lastocc(arr,target)
    ]
};

let final = result([1,2,3,3,3,4,5],3)
console.log(final);
