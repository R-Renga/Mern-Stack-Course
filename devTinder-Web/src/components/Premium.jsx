import axios from "axios";
import { Baseurl } from "../utils/constants";
import { useEffect } from "react";

const Premium = () => {
const [isPremium,setIsPremium] = useState(false)

useEffect(()=>{
  verifyPremiumUser()
},[])
const verifyPremiumUser = async() => {
  const res = await axios.get(Baseurl + "/payment/verify",{
    withCredentials:true
  });

  if(res.data.premium){
    setIsPremium(true)
  }
}

  const handleBuyPremium = async (type) => {
    try {
      const orders = await axios.post(
        Baseurl + "/payment/createOrder",
        { membershipType:type,
         },
        { withCredentials: true }
      );
      console.log(orders,"ordersss");
      const  options = {
        key: "rzp_test_88NHMssz3Jhlcg", // Enter the Key ID generated from Razorpay Dashboard
        amount: orders.data.amount, // Amount is in currency subunits (e.g. 50000 = ₹500)
        currency: orders.data.currency,
        name: "Renga Dev",
        description: "Product Purchase",
        order_id: orders.data.id, // From backend (Razorpay order ID)
        prefill: {
            name: orders.data.notes.firstName,
            email: orders.data.notes.emailID,
            contact: "9999999999"
        },
        handler:verifyPremiumUser,
        theme: {
            color: "#3399cc"
        }
    };
    var rzp = new window.Razorpay(options);
    rzp.open();
    } catch (error) {
      console.log(error);
    }
  };
  return isPremium ? (
    <h1>Already premium</h1>
  ) : (
    <div className="m-10">
      <div className="flex w-full">
        <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
          <h1 className="font-bold text-3xl">Silver Memberships</h1>
          <ul>
            <li>100 connection request per day</li>
          </ul>
          <button
            className="btn btn-primary"
            onClick={() => handleBuyPremium("silver")}
          >
            Buy Silver
          </button>
        </div>
        <div className="divider divider-horizontal">OR</div>
        <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
          <h1 className="font-bold text-3xl">Gold Memberships</h1>
          <ul>
            <li>1000 connection request per day</li>
          </ul>
          <button
            className="btn btn-primary"
            onClick={() => handleBuyPremium("gold")}
          >
            Buy Gold
          </button>
        </div>
      </div>
    </div>
  );
  
};

export default Premium;
