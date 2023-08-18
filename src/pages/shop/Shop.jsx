import Navbar from "../../components/Home/Navbar";
import ShopItems from "../../components/shop/ShopItems";
import Welcome from "../../components/shop/Welcome";

const Shop = () => {
  return (
    <div>
      <Navbar />
      <Welcome pageName="Shop" location="shop" />
      <ShopItems />
    </div>
  );
};

export default Shop;
