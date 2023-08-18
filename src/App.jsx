import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Room from "./components/Rooms/Room"
import RoomDetail from "./components/Rooms/RoomDetail";
import Restaurant from "./components/Rooms/Restaurant";
import Chef from "./components/Rooms/Chef";


import Shop from "./pages/shop/Shop";
import Cart from "./pages/shop/Cart";
import Wishlist from "./pages/shop/Wishlist";


import Contact from "./pages/Contact"





const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/room" element={<Room />} />
        <Route path="/roomDetail" element={<RoomDetail />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/chef" element={<Chef />} />

        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />


      </Routes>
    </>
  );
};

export default App;
