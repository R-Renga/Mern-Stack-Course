const arr = [
    {
        value : 1,
        Children : [{
            value : 2,
            Children : [{
                value : 3,
                Children : [] 
            },{
                value : 4
            }]
        },{
            value : 3,
            Children : []
        }]
    }
];



function recursive(arr){
   let count = 0;
  
  for(let nodes of arr){
   if(!nodes.Children || nodes.Children.length === 0){
      count++
   }else{
      count += recursive(nodes.Children)
   }
  }
   return count
}

const result = recursive(arr);
console.log(result);
