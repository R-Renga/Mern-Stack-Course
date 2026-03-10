import { addItem } from "../utils/cartSlice";
import userContext from "../utils/userContext";
import {useDispatch, useSelector} from "react-redux"
const About = ()=>{
    const cart = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch();
    const addCart = (value) => {
        dispatch(addItem(value))
    }
    return (
        <div>
            <h1>{cart.length}</h1>

            <button onClick={()=>addCart("pizza")}>addItems</button>
        </div>
    )
}

export default About;