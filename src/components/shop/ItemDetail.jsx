/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import { useState } from "react";
import { BsHeart } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
const ItemDetail = ({ item, setIsOpenDetail }) => {
  const [count, setCount] = useState(1);
  console.log(item);
  return (
    <div className=" fixed top-0 left-0  w-screen h-screen flex items-center justify-center backdrop-blur-sm ">
      <div className=" p-3 md:p-5 flex flex-col md:flex-row justify-center gap-10  overflow-auto relative items-center w-[70%] h-[80%] bg-slate-50 border border-slate-500">
        <img src={item.image} alt="" className="w-[400px] hover:filter-none" />
        <div className=" h-full">
          <h2 className=" text-3xl">{item.name}</h2>
          <h2 className="my-5 font-bold text-xl text-yellow-500">
            $ {item.price}
          </h2>
          <p className=" text-justify text-slate-500">
            Rich and creamy chocolate truffles, a decadent indulgence that melts
            in your mouth.Crispy and golden fried chicken, perfectly seasoned
            and served with a side of tangy barbecue sauce. Freshly baked
            cinnamon rolls, with a soft and fluffy texture, topped with a sweet
            glaze.
          </p>
          <div className="flex mt-5 items-center justify-start">
            <div className="flex items-center justify-center">
              <button
                className="px-10 py-5 bg-slate-100 text-3xl"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
              <span className="px-10 py-5 w-16 ">{count}</span>
              <button
                className="px-10 py-5 bg-slate-100 text-3xl"
                onClick={() => count > 1 && setCount(count - 1)}
              >
                -
              </button>
            </div>
            <button className="btn md:px-7 lg:px-10 py-5 hover:bg-black hover:text-white">
              Add To Cart
            </button>
          </div>
          <button className="flex px-10 py-5 mt-8 items-center justify-center gap-3 hover:text-yellow-500 rounded-lg">
            <BsHeart />
            <span>Add To Wishlist</span>
          </button>
        </div>
        <button
          className=" absolute top-3 right-3 p-3 text-lg"
          onClick={() => setIsOpenDetail(false)}
        >
          <IoMdClose />
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
