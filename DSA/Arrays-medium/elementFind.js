function findElement(arr,x){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === x){
            return 1
        }
    }
    return -1
}


let value = findElement([2,4,6,7,5,2],3)
console.log(value)

// function TotalCount(arr){
//     let result = {}
//     for(let i=0;i<arr.length;i++){
//         result[arr[i]] = (result[arr[i]]||0)+1;
//     }
//     return result
// }

// let answer = TotalCount([2,4,6,7,5,2])
// console.log(answer)

function totalCount(arr){
  let result = {};
  for(let i=0;i<arr.length;i++){
    result[arr[i]] = (result[arr[i]] || 0)+1
  }
  return result
}

let answer = totalCount([2,4,6,7,5,2])
console.log(answer)




function str(haystack, needle) {
    let n = haystack.length;
    let m = needle.length;
  
    for (let i = 0; i <= n - m; i++) {   // ✅ should be <= not <
      let j = 0;
      for (; j < m; j++) {
        if (haystack[i + j] !== needle[j]) {
          break;
        }
      }
      if (j === m) {
        return i;   // ✅ found the first occurrence
      }
    }
    return -1;  // ✅ not found
  }
  
  let result = str("onionionsky", "onions");
  console.log(result);
  