import { useCallback } from "react"

const Child = React.memo(({onClick}) => {

    return (
        <div>
            <button onClick={onClick}>click</button>
        </div>
    )
})

const Callback = () => {
    const [count,setCount] = useState(0)
    const handleClick = useCallback(() => {
        console.log("handle clicked");
    })
    return (
        <div>
            <h1>Callback</h1>
            <h2>{count}</h2>
            <button onClick={()=>setCount((prev)=> prev + 1)}></button>
            <Child onClick={handleClick}/>
        </div>
    )
}

export default Callback;