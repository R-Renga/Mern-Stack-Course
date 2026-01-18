function maxCons(nums){
  let currCount = 0;
  let maxCount = 0;

  for(let i=0;i<nums.length;i++){
    if(nums[i] !== " "){
        currCount++; 
    }else{
        maxCount = Math.max(currCount,maxCount);
        currCount = 0;
    }
  }
  return Math.max(currCount,maxCount);
}

let results = maxCons("hello worl rengarajar");

console.log(results);