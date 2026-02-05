function sub(s) {
   let i = 0;
   let j = 0;

   let map = {};
   let maxw = 0;

   for(let j = 0;j<s.length;j++){
      if(map[s[j]] !== undefined && map[s[j]] >= i){
         i = map[s[j]] + 1;
      }
      map[s[j]] = j;
      let currWS = j-i+1;
      maxw = Math.max(maxw,currWS)
   }

   return maxw;

}


const result = sub("abccwopo");
console.log(result);
