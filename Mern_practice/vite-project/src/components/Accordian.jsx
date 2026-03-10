import { useState } from "react"

const Accordian = ({props,name}) =>{
const [openIndex,setOpenIndex] = useState(null)

const expandAccordian = (index) => {
    setOpenIndex(openIndex === index ? null :index)
}
    return (
        <div>
            {props.map((t,index)=>(
                <div key={index}>
                    <button onClick={()=>expandAccordian(index)}>{t.title}</button>
                    {openIndex === index && <div>{t.content}</div>}
                </div>
            ))}
        </div>
    )
}

export default Accordian;