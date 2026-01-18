import { useState } from "react"

const useCounter = (initialValue) => {
console.log(initialValue,"ini");

const [count,setCount] = useState(initialValue);
console.log(count,"count");

const increment = () => setCount(count + 1) 
const decrement = () => setCount(count - 1) 

return {count,increment,decrement}
}

export default useCounter;