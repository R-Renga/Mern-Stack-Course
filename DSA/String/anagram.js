function isanagaram(s,t){
   if(s.length !== t.length) return false;
   
   let hash = {};

   for(let value of s){
      hash[value] = (hash[value] || 0) + 1;
   }

   for(let key of t){
      if(!hash[key] || hash[key] < 0){
         return false
      }else{
         hash[key]--;
      }
   }

   return true
   
}

const result = isanagaram("nagara","ganara");
console.log(result);
