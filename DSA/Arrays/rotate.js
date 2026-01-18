function rotate(arr,k){
    if(arr.length === 0) return arr;

    k = k % arr.length;

    function reverse(start,end){
        let left = start;
        let right = end;

        while(left < right){
            [arr[left],arr[right]] = [arr[right],arr[left]]
            left++;
            right--;
        }
    }

    reverse(0,arr.length-1);
    reverse(0,k-1);
    reverse(k,arr.length-1)
    return arr;
}

let result = rotate([1,2,3,4,5],2);
console.log(result);



function rotate(arr, k) {
  let n = arr.length;
  k = k % n;

  for (let i = 0; i < k; i++) {
    let last = arr.pop();
    arr.unshift(last);
  }
  return arr;
}

console.log(rotate([1,2,3,4,5], 2));