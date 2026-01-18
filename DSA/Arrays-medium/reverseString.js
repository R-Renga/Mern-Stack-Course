//Problem Statement:
// Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1)extra memory.

// Examples:
// Example 1:
// Input:s = [“h”,”e”,”l”,”l”,”o”]

// Output:[“o”,”l”,”l”,”e”,”h”]

// Example 2:
// Input:s = [“H”,”a”,”n”,”n”,”a”,”h”]

// Output:[“h”,”a”,”n”,”n”,”a”,”H”]

// Approach: Two Pointer Technique


let a = "raja";

console.log(a.split("").reverse().join(""));


let arr = ["r","a","j","a"];

function reverseString(arr){
  let n = arr.length;
  let halflength = Math.floor(n/2);

  for(let i=0;i<halflength;i++){
    let temp = arr[i];
    arr[i] = arr[n-1-i];
    arr[n-1-i] = temp
  }
  return arr;
}

let result = reverseString(arr);

console.log(result);


