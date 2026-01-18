let arr = [2,4,8,1,9]

function mergeSort(arr){
    if(arr.length <= 1) return arr
    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0,middle);
    let right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left,right){
    let res = [];
    let i =0;
    let j=0;

    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            res.push(left[i]);
            i++;
        }else{
            res.push(right[j]);
            j++;
        }
    }

    return [...res,...left.slice(i),...right.slice(j)]
}

let result = mergeSort(arr)
console.log(result);


//nlog2n