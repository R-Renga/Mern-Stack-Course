// function largest(arr){
//     let largest = -Infinity
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>largest){
//             largest = arr[i]
//         }
//     }
//     return largest
// }


// const value = largest([2,4,5,3,8,4])

// console.log(value)

// //largest with double loop

// function doubleloop(arr){
//     for(let i =0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[j]>arr[i]){
//                 arr[i] = arr[j]
//             }
//         }
//         return arr[i]
//     }
// }

// const result = doubleloop([2,4,5,6,2,1,9,2]);

// console.log(result)


function largest (arr){
    let largest = Infinity;

    for(let i=0;i<arr.length;i++){
        if(arr[i]< largest){
            largest = arr[i];
        }
    }
    return largest
}

let result = largest([2,5,9,65,3,3])
console.log(result);






