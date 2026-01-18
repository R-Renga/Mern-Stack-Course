import { useSelector } from "react-redux";

const Navbar = () => {
    console.log("render");
    const cartItems = useSelector((store)=>store.cart.items)
    return (
        <div>
            <h1>nav bar</h1>
            <span>cart - {cartItems.length} Items</span>
        </div>
    )
}

export default Navbar;