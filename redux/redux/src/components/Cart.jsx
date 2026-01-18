import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  function addcart(item) {
    dispatch(addItem(item));
  }
  return (
    <div>
      <button onClick={() => addcart("coke")}>add coke</button>
      <button onClick={() => addcart("icecream")}>add icecream</button>
    </div>
  );
};

export default Cart;
