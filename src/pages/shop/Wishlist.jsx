import { Link } from "react-router-dom";
import Navbar from "../../components/Home/Navbar";
import Welcome from "../../components/shop/Welcome";

const Wishlist = () => {
  return (
    <div>
      <Navbar />
      <Welcome pageName="Wishlist" location="wishlist" />
      <div className="p-5 flex items-center justify-center flex-col">
        <p className=" text-center "> Your Wish list is Currently Empty </p>
        <p className=" text-center ">
          Do not add anything to wishlist, I have no wishlist items Component
        </p>
        <Link className="p-3 mt-5 border-slate-500 border-[1px]" to="/shop">
          Return To Shop
        </Link>
      </div>
    </div>
  );
};

export default Wishlist;
