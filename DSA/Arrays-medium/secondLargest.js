// function second(arr){
//     let largest = -Infinity
//     let second = -Infinity

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>largest){
//             second = largest;
//             largest = arr[i]
//         }
//     }
//     return second
// }

// let result = second([3,5,1,6,8])
// console.log(result);


// //loop way

// function secondLargest(arr){
//     let second;
//     for(let i=0;i<arr.length;i++){
//         for(let j =0;j<arr.length;j++){
//             if(arr[j]>arr[i]){
//                 second = arr[i]
//                 arr[i] = arr[j]
//             }else if(arr[j]>second && arr[j] !== arr[i]){
//                 second = arr[j]
//             }
//         }
//         return second;
//     }
// }

// let final = secondLargest([7,3,4,5,7])
// console.log(final)


function second(arr){
    if(arr.length < 1) return false
    let second = -Infinity;
    let largest = -Infinity;

    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            second = largest;
            largest = arr[i];
        }else if(arr[i]>second && arr[i]!== largest){
            second = arr[i]
        }
    }
    return second;
}

let result = second([2,3,4,5,5,8,6]);
console.log(result);


function third(arr){
    if(arr.length < 1) return false
    let second = -Infinity;
    let largest = -Infinity;
    let third = -Infinity;

    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            third = second;
            second = largest;
            largest = arr[i];
        }else if(arr[i]>second && arr[i]!== largest){
            third  = second
            second = arr[i]
        }else if(arr[i] > third && arr[i] !== largest && arr[i] !== second)
            third = arr[i]
    }
    return third;
}

let final = third([2,3,4,5,5,8,6]);
console.log(final);


