import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [showSidebar, setShowSiderbar] = useState(false);

  const handleSidebar = () => {
    setShowSiderbar(!showSidebar);
  };

  return (
    <div>
      {/* navbar  */}
      <div className="px-5 py-3 flex items-center z-30 justify-between bg-slate-50 fixed w-[450px] sm:w-screen">
        <div className="flex items-center justify-between lg:justify-start gap-5">
          <Link to="/">
            <img
              src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/logo.png"
              alt=""
              className=" w-[100px] md:w-[200px]"
            />
          </Link>
        </div>

        {/* nav link  */}

        <div className="hidden md:flex items-center justify-center gap-7">
          <Link
            className="flex items-center justify-center px-3 gap-2  group"
            to="/"
          >
            <span className="hover:text-yellow-500">HOME</span>
            {/* <IoIosArrowDown /> */}
          </Link>

          {/* <Link
            to={"/room"}
            className="flex items-center justify-center gap-2 hover:text-yellow-500"
          >
            <span>ROOMS</span>
            <IoIosArrowDown />
          </Link> */}

          <Link
            to={"/room"}
            className="flex items-center justify-center px-3 py-2 gap-2 group 0"
          >
            <span className="hover:text-yellow-500">ROOMS</span>
            <IoIosArrowDown className="group-hover:text-yellow-500" />
            <ul className=" bg-slate-50 ml-7 z-20 hidden group-hover:block animate__fadeInUp animate__animated p-3 pt-10 duration-500 w-[200px] top-[50px] absolute ">
              <Link to="/room">
                <li className="px-3 py-1 hover:ml-5 transition-all hover:text-yellow-500">
                  ROOMS
                </li>
              </Link>
              <Link to="/room-detail">
                <li className=" px-3 py-1 hover:ml-5 transition-all hover:text-yellow-500">
                  ROOMS DETAILS
                </li>
              </Link>
              <Link to="/restaurant">
                <li className=" px-3 py-1 hover:ml-5 transition-all hover:text-yellow-500">
                  RESTAURENT
                </li>
              </Link>
              <Link to="/chef">
                <li className=" px-3 py-1 hover:ml-5 transition-all hover:text-yellow-500">
                  OUR CHEF
                </li>
              </Link>
            </ul>
          </Link>
          <Link className="flex items-center justify-center px-3 group py-2 gap-2 ">
            <span className="hover:text-yellow-500">SHOP</span>
            <IoIosArrowDown className="group-hover:text-yellow-500" />
            <ul className="hidden bg-slate-50 ml-7 group-hover:block z-30 animate__fadeInUp animate__animated transition-all p-3 pt-7 duration-500 w-[200px] top-[50px] absolute  ">
              <Link to="/shop">
                <li className=" px-3 py-1 hover:ml-5 transition-all hover:text-yellow-500">
                  SHOP
                </li>
              </Link>
              <Link to="/cart">
                <li className=" px-3 py-1 hover:ml-5 transition-all hover:text-yellow-500">
                  CART
                </li>
              </Link>
              <Link to="/wishlist">
                <li className=" px-3 py-1 hover:ml-5 transition-all hover:text-yellow-500">
                  WISHLIST
                </li>
              </Link>
            </ul>
          </Link>
          <Link to={'/contact'} className="flex items-center justify-center px-3 py-2 gap-2 hover:text-yellow-500">
            <span>CONTACT</span>
          </Link>
        </div>

        {/* nav link end  */}
        <div className="flex items-center justify-center gap-5">
          <button className="items-center hover:bg-black transition-all duration-300 hover:text-yellow-100 hidden lg:flex justify-center uppercase w-[250px] gap-3 btn py-3 px-5">
            <span className="text-xl">Book Now</span>
            <BsArrowUpRight />
          </button>

          <button className="group pe-10" onClick={(e) => handleSidebar(e)}>
            <p className="w-14 h-1 border-b-[1px] border-slate-500 group-hover:border-yellow-500 bg-slate-500"></p>
            <p className="w-10 h-1 border-b-[1px] my-2 border-slate-500 group-hover:border-yellow-500 bg-slate-500 group-hover:w-16 duration-300"></p>
            <p className="w-14 h-1 border-b-[1px] border-slate-500 group-hover:border-yellow-500 bg-slate-500"></p>
          </button>
        </div>
      </div>
      {showSidebar && (
        <div className=" w-screen h-screen z-50 fixed top-0 ">
          <div
            className="  w-full h-full blur-md"
            onClick={() => setShowSiderbar(false)}
          ></div>
          {/* hidden sidebar  */}

          <Sidebar setShowSidebar={setShowSiderbar} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
