import { useState } from "react";

const Ref = () => {
    const [count,setCount] = useState(0);
    let x = useRef(5);
    return (
        <div>
            <button onClick={()=>{
                x.current = x.current + 1
            }}>useRefIncrement</button>
            <button onClick={()=>setCount(count + 1)}></button>
        </div>
    )
}

export default Ref;