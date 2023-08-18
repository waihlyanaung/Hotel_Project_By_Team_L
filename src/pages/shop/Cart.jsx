import { Link } from "react-router-dom";
import Navbar from "../../components/Home/Navbar";
import Welcome from "../../components/shop/Welcome";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <Welcome pageName="Cart" location="cart" />
      <div className="p-5 flex items-center justify-center flex-col">
        <p className=" text-center "> Your Cart is Currently Empty </p>
        <p className=" text-center ">
          Do Not order anything , I have no Cart Items Component
        </p>
        <Link className="p-3 mt-5 border-slate-500 border-[1px]" to="/shop">
          Return To Shop
        </Link>
      </div>
    </div>
  );
};

export default Cart;
