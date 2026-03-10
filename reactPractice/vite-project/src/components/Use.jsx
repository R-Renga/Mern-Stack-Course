import { use } from "react"

const fetchData = async() => {
    const res = await fetch("url")
    return res.json();
}

const Use = () =>{
    const user = use(fetchData())
    return (
        <div>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
        </div>
    )
}

export default Use;


//<suspense></suspense>