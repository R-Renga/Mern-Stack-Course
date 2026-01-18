let arr = [2,3,4,5,6]

const mapvalues = arr.map((data)=>{
    return data * 2
})

console.log(mapvalues);

const filtereddata = arr.filter(data=> data % 2 === 0)


//reduce

const single = arr.reduce((acc,curr)=> acc+curr,0)

const max = arr.reduce((acc,curr)=>{
    if(curr>0){
        acc = curr
    }
},0)

//find

const find = arr.find(data=> data%2===0);
console.log(find,"find");

//foreach

arr.forEach((data,index)=>{
   arr[index]  = data * 2
})

console.log(arr);



console.log(arr.map((data)=>{
    return data * 4
}))