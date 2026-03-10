import { useMemo, useState } from "react";

const Memo = () => {
const [text,setText] = useState(null)
const [theme,setTheme] = useState(true)

const nth = useMemo(()=>FINDPRIME(text),[text])
    return (
        <div style={{
            height:"96px",
            width:"96px",
            margin:"10px",
            border:"1px solid black",
            backgroundColor:theme ? "black":"white"
        }}>
            <button onClick={()=>setTheme(()=>!prev)}>toggle</button>
            <h1>Memo</h1>
            <input type="number" onChange={(e)=>setText(e.target.value)}/>
            <span>{nth}</span>
        </div>
    )
}

export default Memo;