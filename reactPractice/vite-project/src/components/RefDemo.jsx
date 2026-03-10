import { useRef } from "react";

const RefDemo = () => {
    const firstName = useRef(null)
    const handleClick = () =>{
        firstName.current.focus
    }
    return (
        <div>
            <input ref={firstName}/>
            <button onClick={handleClick}>click</button>
        </div>
    )
}

export default RefDemo; 