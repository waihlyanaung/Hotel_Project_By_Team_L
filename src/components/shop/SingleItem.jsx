/* eslint-disable react/prop-types */

import { BsCart, BsEye, BsFillStarFill, BsHeart } from "react-icons/bs";
import ItemDetail from "./ItemDetail";
import { useState } from "react";
import { Link } from "react-router-dom";

const SingleItem = ({ recipe }) => {
  const [isOpenDetail, setIsOpenDetail] = useState(false);
//   window.addEventListener("scroll", setIsOpenDetail(false));
  return (
    <div
      // data-aos="fade-up"

      className=" p-3 w-full md:w-[300px] group border-slate-100 border-[1px]  rounded"
      key={recipe.id}
    >
      <div className="relative ">
        <img src={recipe.image} alt="" className="h-auto md:h-[265px]" />
        <div className=" group-hover:flex hidden duration-1000 items-center justify-center gap-2 absolute top-1/2 left-1/2 -translate-x-1/2">
          <button
            
            className="p-2 duration-300 border-slate-300 border-[1px] hover:bg-yellow-500 hover:text-white text-yellow-500 bg-white"
            onClick={() => setIsOpenDetail(true)}
          >
            <BsEye />
          </button>
          <Link className="p-2 duration-300 border-slate-300 border-[1px] hover:bg-yellow-500 hover:text-white text-yellow-500 bg-white" to='/cart'>
            <BsCart />
          </Link>
          <Link className="p-2 duration-300 border-slate-300 border-[1px] hover:bg-yellow-500 hover:text-white text-yellow-500 bg-white" to='/wishlist'>
            <BsHeart />
          </Link>
        </div>
      </div>
      <p className="flex items-center justify-center cursor-pointer gap-2">
        <BsFillStarFill className=" text-yellow-500" />
        <BsFillStarFill className=" text-yellow-500" />
        <BsFillStarFill className=" text-yellow-500" />
        <BsFillStarFill className=" text-yellow-500" />
        <BsFillStarFill className=" text-yellow-500" />
      </p>
      <p className="text-center text-lg my-5">{recipe.name}</p>
      <p className="text-center font-light">$ {recipe.price}</p>
      {isOpenDetail && (
        <ItemDetail item={recipe} setIsOpenDetail={setIsOpenDetail} />
      )}
    </div>
  );
};

export default SingleItem;
