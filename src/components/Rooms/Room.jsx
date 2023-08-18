import Navbar from "../Home/Navbar";
import { BiTaxi, BiRestaurant } from "react-icons/bi";
import { FaSwimmingPool } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "../Home/Footer";
import { Link } from "react-router-dom";
// import "aos/dist/aos.css";
// import '../../../node_modules/aos/dist/aos'





const Room = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const handleScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleScreenSize();

    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);
  return (
    <>
      {/* nav */}
      <Navbar />
      <div className=" bg-default h-full">
        {/* Landing */}
        <div className=" h-[400px] flex flex-col justify-center items-center">
          <h2 className=" font-semibold text-6xl mb-5 font-serif">Rooms 03</h2>
          <p>{`Royel > Room 03`}</p>
        </div>

        {/* Rooms */}
        <div data-aos="fade-up" data-aos-duration="3000" className="">
          {isDesktop ? (
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              loop={true}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <div className=" h-auto bg-default flex mx-5 ">
                <SwiperSlide>
                  <div className=" w-full border shadow-lg ">
                    <div className="overflow-hidden">
                      <img
                        src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/4-2.jpg"
                        alt="Master Suite"
                        className=" h-[300px] object-cover transition duration-700 ease-in-out delay-300 hover:-translate-y-1 hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col gap-5 mt-3 px-3 py-3">
                      <h2 className=" text-3xl font-medium text-left hover:text-orange-400 font-serif">
                        Master Suite Room
                      </h2>
                      <p className=" tracking-wide text-slate-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio aperiam in eligendi omnis non perspiciatis
                        architecto ex debitis sunt ut
                      </p>
                    </div>

                    <div className="flex gap-5 mx-10 my-5">
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <BiTaxi className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <GiHomeGarage className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <BiRestaurant className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <FaSwimmingPool className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                    </div>
                    <hr />
                    <div className="flex justify-between mx-5 my-5">
                      <button className="flex justify-center items-center font-semibold cursor-pointer">
                        <span>Book Now</span>
                        <BsArrowBarRight />
                      </button>
                      <Link to={"/roomDetail"}>
                        <button className="flex px-3 rounded bg-orange-200 text-white justify-center items-center font-semibold cursor-pointer">
                          Detail
                        </button>
                      </Link>
                      <p>
                        <span className=" font-semibold">$799</span>/Night
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" w-full border shadow-lg">
                    <div className="overflow-hidden">
                      <img
                        src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/2.jpg"
                        alt="Master Suite"
                        className=" h-[300px] object-cover transition duration-700 ease-in-out delay-300 hover:-translate-y-1 hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col gap-5 mt-3 px-3 py-3">
                      <h2 className=" text-3xl font-medium text-left hover:text-orange-400 font-serif">
                        Premiere Deluxe Room
                      </h2>
                      <p className=" tracking-wide text-slate-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio aperiam in eligendi omnis non perspiciatis
                        architecto ex debitis sunt ut
                      </p>
                    </div>
                    <div className="flex gap-5 mx-10 my-5">
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <BiTaxi className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <GiHomeGarage className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <BiRestaurant className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <FaSwimmingPool className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                    </div>
                    <hr />
                    <div className="flex justify-between mx-5 my-5">
                      <button className="flex justify-center items-center font-semibold cursor-pointer">
                        <span>Book Now</span>
                        <BsArrowBarRight />
                      </button>
                      <Link to={"/roomDetail"}>
                        <button className="flex px-3 rounded bg-orange-200 text-white justify-center items-center font-semibold cursor-pointer">
                          Detail
                        </button>
                      </Link>
                      <p>
                        <span className=" font-semibold">$899</span>/Night
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" w-full border shadow-lg">
                    <div className="overflow-hidden">
                      <img
                        src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/5-2.jpg"
                        alt="Master Suite"
                        className=" h-[300px] object-cover transition duration-700 ease-in-out delay-300 hover:-translate-y-1 hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col gap-5 mt-3 px-3 py-3">
                      <h2 className=" text-3xl font-medium text-left hover:text-orange-400 font-serif">
                        Superior Site Room
                      </h2>
                      <p className=" tracking-wide text-slate-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio aperiam in eligendi omnis non perspiciatis
                        architecto ex debitis sunt ut
                      </p>
                    </div>
                    <div className="flex gap-5 mx-10 my-5">
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <BiTaxi className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <GiHomeGarage className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <BiRestaurant className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <FaSwimmingPool className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                    </div>
                    <hr />
                    <div className="flex justify-between mx-5 my-5">
                      <button className="flex justify-center items-center font-semibold cursor-pointer">
                        <span>Book Now</span>
                        <BsArrowBarRight />
                      </button>
                      <Link to={"/roomDetail"}>
                        <button className="flex px-3 rounded bg-orange-200 text-white justify-center items-center font-semibold cursor-pointer">
                          Detail
                        </button>
                      </Link>
                      <p>
                        <span className=" font-semibold">$699</span>/Night
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" w-full border shadow-lg">
                    <div className="overflow-hidden">
                      <img
                        src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/4-2.jpg"
                        alt="Master Suite"
                        className=" h-[300px] object-cover transition duration-700 ease-in-out delay-300 hover:-translate-y-1 hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col gap-5 mt-3 px-3 py-3">
                      <h2 className=" text-3xl font-medium text-left hover:text-orange-400 font-serif">
                        Master Suite Room
                      </h2>
                      <p className=" tracking-wide text-slate-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio aperiam in eligendi omnis non perspiciatis
                        architecto ex debitis sunt ut
                      </p>
                    </div>
                    <div className="flex gap-5 mx-10 my-5">
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <BiTaxi className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <GiHomeGarage className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <BiRestaurant className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <FaSwimmingPool className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                    </div>
                    <hr />
                    <div className="flex justify-between mx-5 my-5">
                      <button className="flex justify-center items-center font-semibold cursor-pointer">
                        <span>Book Now</span>
                        <BsArrowBarRight />
                      </button>
                      <Link to={"/roomDetail"}>
                        <button className="flex px-3 rounded bg-orange-200 text-white justify-center items-center font-semibold cursor-pointer">
                          Detail
                        </button>
                      </Link>
                      <p>
                        <span className=" font-semibold">$799</span>/Night
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" w-full border shadow-lg">
                    <div className="overflow-hidden">
                      <img
                        src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/2.jpg"
                        alt="Master Suite"
                        className=" h-[300px] object-cover transition duration-700 ease-in-out delay-300 hover:-translate-y-1 hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col gap-5 mt-3 px-3 py-3">
                      <h2 className=" text-3xl font-medium text-left hover:text-orange-400 font-serif">
                        Premiere Deluxe Room
                      </h2>
                      <p className=" tracking-wide text-slate-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio aperiam in eligendi omnis non perspiciatis
                        architecto ex debitis sunt ut
                      </p>
                    </div>
                    <div className="flex gap-5 mx-10 my-5">
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <BiTaxi className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <GiHomeGarage className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <BiRestaurant className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <FaSwimmingPool className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                    </div>
                    <hr />
                    <div className="flex justify-between mx-5 my-5">
                      <button className="flex justify-center items-center font-semibold cursor-pointer">
                        <span>Book Now</span>
                        <BsArrowBarRight />
                      </button>
                      <Link to={"/roomDetail"}>
                        <button className="flex px-3 rounded bg-orange-200 text-white justify-center items-center font-semibold cursor-pointer">
                          Detail
                        </button>
                      </Link>
                      <p>
                        <span className=" font-semibold">$899</span>/Night
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" w-full border shadow-lg">
                    <div className="overflow-hidden">
                      <img
                        src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/5-2.jpg"
                        alt="Master Suite"
                        className=" h-[300px] object-cover transition duration-700 ease-in-out delay-300 hover:-translate-y-1 hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col gap-5 mt-3 px-3 py-3">
                      <h2 className=" text-3xl font-medium text-left hover:text-orange-400 font-serif">
                        Superior Site Room
                      </h2>
                      <p className=" tracking-wide text-slate-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio aperiam in eligendi omnis non perspiciatis
                        architecto ex debitis sunt ut
                      </p>
                    </div>
                    <div className="flex gap-5 mx-10 my-5">
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <BiTaxi className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <GiHomeGarage className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <BiRestaurant className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <FaSwimmingPool className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                    </div>
                    <hr />
                    <div className="flex justify-between mx-5 my-5">
                      <button className="flex justify-center items-center font-semibold cursor-pointer">
                        <span>Book Now</span>
                        <BsArrowBarRight />
                      </button>
                      <Link to={"/roomDetail"}>
                        <button className="flex px-3 rounded bg-orange-200 text-white justify-center items-center font-semibold cursor-pointer">
                          Detail
                        </button>
                      </Link>
                      <p>
                        <span className=" font-semibold">$699</span>/Night
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          ) : (
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <div className=" h-auto bg-default block mx-5 gap-5 ">
                <SwiperSlide>
                  <div className=" w-full border shadow-lg ">
                    <div className="overflow-hidden">
                      <img
                        src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/4-2.jpg"
                        alt="Master Suite"
                        className=" h-[300px] object-cover transition duration-700 ease-in-out delay-300 hover:-translate-y-1 hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col gap-5 mt-3 px-3 py-3">
                      <h2 className=" text-3xl font-medium text-left hover:text-orange-400 font-serif">
                        Master Suite Room
                      </h2>
                      <p className=" tracking-wide text-slate-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio aperiam in eligendi omnis non perspiciatis
                        architecto ex debitis sunt ut
                      </p>
                    </div>
                    <div className="flex gap-5 mx-10 my-5">
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <BiTaxi className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <GiHomeGarage className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <BiRestaurant className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <FaSwimmingPool className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                    </div>
                    <hr />
                    <div className="flex justify-between mx-5 my-5">
                      <button className="flex justify-center items-center font-semibold cursor-pointer">
                        <span>Book Now</span>
                        <BsArrowBarRight />
                      </button>
                      <Link to={"/roomDetail"}>
                        <button className="flex px-3 rounded bg-orange-200 text-white justify-center items-center font-semibold cursor-pointer">
                          Detail
                        </button>
                      </Link>
                      <p>
                        <span className=" font-semibold">$799</span>/Night
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" w-full border shadow-lg">
                    <div className="overflow-hidden">
                      <img
                        src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/2.jpg"
                        alt="Master Suite"
                        className=" h-[300px] object-cover transition duration-700 ease-in-out delay-300 hover:-translate-y-1 hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col gap-5 mt-3 px-3 py-3">
                      <h2 className=" text-3xl font-medium text-left hover:text-orange-400 font-serif">
                        Premiere Deluxe Room
                      </h2>
                      <p className=" tracking-wide text-slate-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio aperiam in eligendi omnis non perspiciatis
                        architecto ex debitis sunt ut
                      </p>
                    </div>
                    <div className="flex gap-5 mx-10 my-5">
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <BiTaxi className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <GiHomeGarage className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <BiRestaurant className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <FaSwimmingPool className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                    </div>
                    <hr />
                    <div className="flex justify-between mx-5 my-5">
                      <button className="flex justify-center items-center font-semibold cursor-pointer">
                        <span>Book Now</span>
                        <BsArrowBarRight />
                      </button>
                      <Link to={"/roomDetail"}>
                        <button className="flex px-3 rounded bg-orange-200 text-white justify-center items-center font-semibold cursor-pointer">
                          Detail
                        </button>
                      </Link>
                      <p>
                        <span className=" font-semibold">$899</span>/Night
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" w-full border shadow-lg">
                    <div className="overflow-hidden">
                      <img
                        src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/5-2.jpg"
                        alt="Master Suite"
                        className=" h-[300px] object-cover transition duration-700 ease-in-out delay-300 hover:-translate-y-1 hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col gap-5 mt-3 px-3 py-3">
                      <h2 className=" text-3xl font-medium text-left hover:text-orange-400 font-serif">
                        Superior Site Room
                      </h2>
                      <p className=" tracking-wide text-slate-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio aperiam in eligendi omnis non perspiciatis
                        architecto ex debitis sunt ut
                      </p>
                    </div>
                    <div className="flex gap-5 mx-10 my-5">
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <BiTaxi className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <GiHomeGarage className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <BiRestaurant className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <FaSwimmingPool className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                    </div>
                    <hr />
                    <div className="flex justify-between mx-5 my-5">
                      <button className="flex justify-center items-center font-semibold cursor-pointer">
                        <span>Book Now</span>
                        <BsArrowBarRight />
                      </button>
                      <Link to={"/roomDetail"}>
                        <button className="flex px-3 rounded bg-orange-200 text-white justify-center items-center font-semibold cursor-pointer">
                          Detail
                        </button>
                      </Link>
                      <p>
                        <span className=" font-semibold">$699</span>/Night
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" w-full border shadow-lg">
                    <div className="overflow-hidden">
                      <img
                        src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/4-2.jpg"
                        alt="Master Suite"
                        className=" h-[300px] object-cover transition duration-700 ease-in-out delay-300 hover:-translate-y-1 hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col gap-5 mt-3 px-3 py-3">
                      <h2 className=" text-3xl font-medium text-left hover:text-orange-400 font-serif">
                        Master Suite Room
                      </h2>
                      <p className=" tracking-wide text-slate-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio aperiam in eligendi omnis non perspiciatis
                        architecto ex debitis sunt ut
                      </p>
                    </div>
                    <div className="flex gap-5 mx-10 my-5">
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <BiTaxi className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <GiHomeGarage className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <BiRestaurant className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <FaSwimmingPool className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                    </div>
                    <hr />
                    <div className="flex justify-between mx-5 my-5">
                      <button className="flex justify-center items-center font-semibold cursor-pointer">
                        <span>Book Now</span>
                        <BsArrowBarRight />
                      </button>
                      <Link to={"/roomDetail"}>
                        <button className="flex px-3 rounded bg-orange-200 text-white justify-center items-center font-semibold cursor-pointer">
                          Detail
                        </button>
                      </Link>
                      <p>
                        <span className=" font-semibold">$799</span>/Night
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" w-full border shadow-lg">
                    <div className="overflow-hidden">
                      <img
                        src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/2.jpg"
                        alt="Master Suite"
                        className=" h-[300px] object-cover transition duration-700 ease-in-out delay-300 hover:-translate-y-1 hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col gap-5 mt-3 px-3 py-3">
                      <h2 className=" text-3xl font-medium text-left hover:text-orange-400 font-serif">
                        Premiere Deluxe Room
                      </h2>
                      <p className=" tracking-wide text-slate-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio aperiam in eligendi omnis non perspiciatis
                        architecto ex debitis sunt ut
                      </p>
                    </div>
                    <div className="flex gap-5 mx-10 my-5">
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <BiTaxi className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <GiHomeGarage className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <BiRestaurant className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <FaSwimmingPool className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                    </div>
                    <hr />
                    <div className="flex justify-between mx-5 my-5">
                      <button className="flex justify-center items-center font-semibold cursor-pointer">
                        <span>Book Now</span>
                        <BsArrowBarRight />
                      </button>
                      <Link to={"/roomDetail"}>
                        <button className="flex px-3 rounded bg-orange-200 text-white justify-center items-center font-semibold cursor-pointer">
                          Detail
                        </button>
                      </Link>
                      <p>
                        <span className=" font-semibold">$899</span>/Night
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" w-full border shadow-lg">
                    <div className="overflow-hidden">
                      <img
                        src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/5-2.jpg"
                        alt="Master Suite"
                        className=" h-[300px] object-cover transition duration-700 ease-in-out delay-300 hover:-translate-y-1 hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col gap-5 mt-3 px-3 py-3">
                      <h2 className=" text-3xl font-medium text-left hover:text-orange-400 font-serif">
                        Superior Site Room
                      </h2>
                      <p className=" tracking-wide text-slate-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio aperiam in eligendi omnis non perspiciatis
                        architecto ex debitis sunt ut
                      </p>
                    </div>
                    <div className="flex gap-5 mx-10 my-5">
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <BiTaxi className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <GiHomeGarage className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <BiRestaurant className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                      <button className=" bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
                        <FaSwimmingPool className=" text-3xl text-slate-500 hover:text-white" />
                      </button>
                    </div>
                    <hr />
                    <div className="flex justify-between mx-5 my-5">
                      <button className="flex justify-center items-center font-semibold cursor-pointer">
                        <span>Book Now</span>
                        <BsArrowBarRight />
                      </button>
                      <Link to={"/roomDetail"}>
                        <button className="flex px-3 rounded bg-orange-200 text-white justify-center items-center font-semibold cursor-pointer">
                          Detail
                        </button>
                      </Link>
                      <p>
                        <span className=" font-semibold">$699</span>/Night
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          )}
        </div>
        {/* Discount Area */}
        <div data-aos="fade-up" data-aos-duration="3000" className="">
          <div className="h-auto bg-default block  md:flex mx-5 mt-10 gap-5 justify-between ">
            <div className="flex flex-col my-5">
              <p className=" uppercase tracking-wider my-5">Offers</p>
              <h2 className=" font-medium text-5xl mb-5 font-serif">
                The Royel Limited Period Offer
              </h2>
            </div>
            <div className="flex gap-3 justify-center items-center mb-5">
              <button className="border px-6 py-4 border-black transition hover:bg-orange-200 hover:translate-y-2 rounded text-3xl">
                <BsArrowBarLeft />
              </button>
              <button className="border px-6 py-4 border-black transition rounded hover:bg-orange-200 hover:translate-y-2 text-3xl">
                <BsArrowBarRight />
              </button>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" className="">
          {isDesktop ? (
            <Swiper
              spaceBetween={50}
              slidesPerView={4}
              loop={true}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <div className=" h-auto bg-default block  md:flex mx-5 gap-7">
                <SwiperSlide>
                  <div className=" w-full border shadow-xl mx-2 rounded h-auto flex flex-col items-center overflow-hidden bg-orange-100 relative group">
                    <img
                      src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/2.jpg"
                      alt="Premiere"
                      className="object-none left-0 top-0 w-full h-[400px] transition duration-1000
                    ease-in-out delay-300 hover:-translate-y-1 hover:scale-110"
                    />

                    <h5 className="absolute top-5 left-5 px-3 py-1 bg-black rounded-3xl tracking-wider text-lg shadow text-yellow-500">
                      25% 0ff
                    </h5>
                    <h4 className=" font-semibold font-serif  text-2xl my-4">
                      Premier Deluxe Room
                    </h4>
                    <div className=" absolute bottom-[-300px] group-hover:bottom-0 duration-1000 px-2 bg-orange-100 ">
                      <p className=" font-semibold font-serif  text-2xl my-4 text-center">
                        Premier Deluxe Room
                      </p>

                      <p className="tracking-wide text-slate-500 p-4 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime praesentium deserunt obcaecati voluptatem, at
                        cupiditate nisi veritatis aperiam
                      </p>
                      <hr />
                      <button className="w-full gap-2 flex justify-center items-center text-black text-2xl py-4 shadow rounded bg-orange-100 duration-1000 hover:bg-orange-400 hover:text-white">
                        <span>Book Now</span>
                        <AiOutlineArrowRight />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" w-full border shadow-xl mx-2 rounded h-auto flex flex-col items-center overflow-hidden bg-orange-100 relative group">
                    <img
                      src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/5-2.jpg"
                      alt="Premiere"
                      className="object-none left-0 top-0 w-full h-[400px] transition duration-1000
                    ease-in-out delay-300 hover:-translate-y-1 hover:scale-110"
                    />
                    <h5 className="absolute top-5 left-5 px-3 py-1 bg-black rounded-3xl tracking-wider text-lg shadow text-yellow-500">
                      25% 0ff
                    </h5>
                    <h4 className=" font-semibold font-serif  text-2xl my-4">
                      Superior Site Room
                    </h4>
                    <div className=" absolute bottom-[-300px] group-hover:bottom-0 duration-1000 px-2 bg-orange-100 ">
                      <p className=" font-semibold font-serif  text-2xl my-4 text-center">
                        Superior Site Room
                      </p>

                      <p className="tracking-wide text-slate-500 p-4 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime praesentium deserunt obcaecati voluptatem, at
                        cupiditate nisi veritatis aperiam
                      </p>
                      <hr />
                      <button className="w-full gap-2 flex justify-center items-center text-black text-2xl py-4 shadow rounded bg-orange-100 duration-1000 hover:bg-orange-400 hover:text-white">
                        <span>Book Now</span>
                        <AiOutlineArrowRight />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" w-full border shadow-xl mx-2 rounded h-auto flex flex-col items-center overflow-hidden bg-orange-100 relative group">
                    <img
                      src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/4-2.jpg"
                      alt="Premiere"
                      className="object-none left-0 top-0 w-full h-[400px] transition duration-1000
                    ease-in-out delay-300 hover:-translate-y-1 hover:scale-110"
                    />
                    <h5 className="absolute top-5 left-5 px-3 py-1 bg-black rounded-3xl tracking-wider text-lg shadow text-yellow-500">
                      25% 0ff
                    </h5>
                    <h4 className=" font-semibold font-serif  text-2xl my-4">
                      Master Suite Room
                    </h4>
                    <div className=" absolute bottom-[-300px] group-hover:bottom-0 duration-1000 px-2 bg-orange-100 ">
                      <p className=" font-semibold font-serif  text-2xl my-4 text-center">
                        Master Suite Room
                      </p>

                      <p className="tracking-wide text-slate-500 p-4 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime praesentium deserunt obcaecati voluptatem, at
                        cupiditate nisi veritatis aperiam
                      </p>
                      <hr />
                      <button className="w-full gap-2 flex justify-center items-center text-black text-2xl py-4 shadow rounded bg-orange-100 duration-1000 hover:bg-orange-400 hover:text-white">
                        <span>Book Now</span>
                        <AiOutlineArrowRight />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" w-full border shadow-xl mx-2 rounded h-auto flex flex-col items-center overflow-hidden bg-orange-100 relative group">
                    <img
                      src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/3.jpg"
                      alt="Premiere"
                      className="object-none left-0 top-0 w-full h-[400px] transition duration-1000
                    ease-in-out delay-300 hover:-translate-y-1 hover:scale-110"
                    />
                    <h5 className="absolute top-5 left-5 px-3 py-1 bg-black rounded-3xl tracking-wider text-lg shadow text-yellow-500">
                      25% 0ff
                    </h5>
                    <h4 className=" font-semibold font-serif  text-2xl my-4">
                      Junior Suites Room
                    </h4>
                    <div className=" absolute bottom-[-300px] group-hover:bottom-0 duration-1000 px-2 bg-orange-100 ">
                      <p className=" font-semibold font-serif  text-2xl my-4 text-center">
                        Junior Suites Room
                      </p>

                      <p className="tracking-wide text-slate-500 p-4 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime praesentium deserunt obcaecati voluptatem, at
                        cupiditate nisi veritatis aperiam
                      </p>
                      <hr />
                      <button className="w-full gap-2 flex justify-center items-center text-black text-2xl py-4 shadow rounded bg-orange-100 duration-1000 hover:bg-orange-400 hover:text-white">
                        <span>Book Now</span>
                        <AiOutlineArrowRight />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" w-full border shadow-xl mx-2 rounded h-auto flex flex-col items-center overflow-hidden bg-orange-100 relative group">
                    <img
                      src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/2.jpg"
                      alt="Premiere"
                      className="object-none left-0 top-0 w-full h-[400px] transition duration-1000
                    ease-in-out delay-300 hover:-translate-y-1 hover:scale-110"
                    />
                    <h5 className="absolute top-5 left-5 px-3 py-1 bg-black rounded-3xl tracking-wider text-lg shadow text-yellow-500">
                      25% 0ff
                    </h5>
                    <h4 className=" font-semibold font-serif  text-2xl my-4">
                      Couple Sea View Room
                    </h4>
                    <div className=" absolute bottom-[-300px] group-hover:bottom-0 duration-1000 px-2 bg-orange-100 ">
                      <p className=" font-semibold font-serif  text-2xl my-4 text-center">
                        Couple Sea View Room
                      </p>

                      <p className="tracking-wide text-slate-500 p-4 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime praesentium deserunt obcaecati voluptatem, at
                        cupiditate nisi veritatis aperiam
                      </p>
                      <hr />
                      <button className="w-full gap-2 flex justify-center items-center text-black text-2xl py-4 shadow rounded bg-orange-100 duration-1000 hover:bg-orange-400 hover:text-white">
                        <span>Book Now</span>
                        <AiOutlineArrowRight />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" w-full border shadow-xl mx-2 rounded h-auto flex flex-col items-center overflow-hidden bg-orange-100 relative group">
                    <img
                      src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/1-3.jpg"
                      alt="Premiere"
                      className="object-none left-0 top-0 w-full h-[400px] transition duration-1000
                    ease-in-out delay-300 hover:-translate-y-1 hover:scale-110"
                    />
                    <h5 className="absolute top-5 left-5 px-3 py-1 bg-black rounded-3xl tracking-wider text-lg shadow text-yellow-500">
                      25% 0ff
                    </h5>
                    <h4 className=" font-semibold font-serif  text-2xl my-4">
                      Queen Deluxe Room
                    </h4>
                    <div className=" absolute bottom-[-300px] group-hover:bottom-0 duration-1000 px-2 bg-orange-100 ">
                      <p className=" font-semibold font-serif  text-2xl my-4 text-center">
                        Queen Deluxe Room
                      </p>

                      <p className="tracking-wide text-slate-500 p-4 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime praesentium deserunt obcaecati voluptatem, at
                        cupiditate nisi veritatis aperiam
                      </p>
                      <hr />
                      <button className="w-full gap-2 flex justify-center items-center text-black text-2xl py-4 shadow rounded bg-orange-100 duration-1000 hover:bg-orange-400 hover:text-white">
                        <span>Book Now</span>
                        <AiOutlineArrowRight />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          ) : (
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <div className=" h-auto bg-default block  md:flex mx-5 gap-7">
                <SwiperSlide>
                  <div className=" w-full border shadow-xl mx-2 rounded h-auto flex flex-col items-center overflow-hidden bg-orange-100 relative group">
                    <img
                      src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/2.jpg"
                      alt="Premiere"
                      className="object-none left-0 top-0 w-full h-[400px] transition duration-1000
                    ease-in-out delay-300 hover:-translate-y-1 hover:scale-110"
                    />
                    <h5 className="absolute top-5 left-5 px-3 py-1 bg-black rounded-3xl tracking-wider text-lg shadow text-yellow-500">
                      25% 0ff
                    </h5>
                    <h4 className=" font-semibold font-serif  text-2xl my-4">
                      Premier Deluxe Room
                    </h4>
                    <div className=" absolute bottom-[-300px] group-hover:bottom-0 duration-1000 px-2 bg-orange-100 ">
                      <p className=" font-semibold font-serif  text-2xl my-4 text-center">
                        Premier Deluxe Room
                      </p>

                      <p className="tracking-wide text-slate-500 p-4 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime praesentium deserunt obcaecati voluptatem, at
                        cupiditate nisi veritatis aperiam
                      </p>
                      <hr />
                      <button className="w-full gap-2 flex justify-center items-center text-black text-2xl py-4 shadow rounded bg-orange-100 duration-1000 hover:bg-orange-400 hover:text-white">
                        <span>Book Now</span>
                        <AiOutlineArrowRight />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" w-full border shadow-xl mx-2 rounded h-auto flex flex-col items-center overflow-hidden bg-orange-100 relative group">
                    <img
                      src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/5-2.jpg"
                      alt="Premiere"
                      className="object-none left-0 top-0 w-full h-[400px] transition duration-1000
                    ease-in-out delay-300 hover:-translate-y-1 hover:scale-110"
                    />
                    <h5 className="absolute top-5 left-5 px-3 py-1 bg-black rounded-3xl tracking-wider text-lg shadow text-yellow-500">
                      25% 0ff
                    </h5>
                    <h4 className=" font-semibold font-serif  text-2xl my-4">
                      Superior Site Room
                    </h4>
                    <div className=" absolute bottom-[-300px] group-hover:bottom-0 duration-1000 px-2 bg-orange-100 ">
                      <p className=" font-semibold font-serif  text-2xl my-4 text-center">
                        Superior Site Room
                      </p>

                      <p className="tracking-wide text-slate-500 p-4 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime praesentium deserunt obcaecati voluptatem, at
                        cupiditate nisi veritatis aperiam
                      </p>
                      <hr />
                      <button className="w-full gap-2 flex justify-center items-center text-black text-2xl py-4 shadow rounded bg-orange-100 duration-1000 hover:bg-orange-400 hover:text-white">
                        <span>Book Now</span>
                        <AiOutlineArrowRight />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" w-full border shadow-xl mx-2 rounded h-auto flex flex-col items-center overflow-hidden bg-orange-100 relative group">
                    <img
                      src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/4-2.jpg"
                      alt="Premiere"
                      className="object-none left-0 top-0 w-full h-[400px] transition duration-1000
                    ease-in-out delay-300 hover:-translate-y-1 hover:scale-110"
                    />
                    <h5 className="absolute top-5 left-5 px-3 py-1 bg-black rounded-3xl tracking-wider text-lg shadow text-yellow-500">
                      25% 0ff
                    </h5>
                    <h4 className=" font-semibold font-serif  text-2xl my-4">
                      Master Suite Room
                    </h4>
                    <div className=" absolute bottom-[-300px] group-hover:bottom-0 duration-1000 px-2 bg-orange-100 ">
                      <p className=" font-semibold font-serif  text-2xl my-4 text-center">
                        Master Suite Room
                      </p>

                      <p className="tracking-wide text-slate-500 p-4 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime praesentium deserunt obcaecati voluptatem, at
                        cupiditate nisi veritatis aperiam
                      </p>
                      <hr />
                      <button className="w-full gap-2 flex justify-center items-center text-black text-2xl py-4 shadow rounded bg-orange-100 duration-1000 hover:bg-orange-400 hover:text-white">
                        <span>Book Now</span>
                        <AiOutlineArrowRight />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" w-full border shadow-xl mx-2 rounded h-auto flex flex-col items-center overflow-hidden bg-orange-100 relative group">
                    <img
                      src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/3.jpg"
                      alt="Premiere"
                      className="object-none left-0 top-0 w-full h-[400px] transition duration-1000
                    ease-in-out delay-300 hover:-translate-y-1 hover:scale-110"
                    />
                    <h5 className="absolute top-5 left-5 px-3 py-1 bg-black rounded-3xl tracking-wider text-lg shadow text-yellow-500">
                      25% 0ff
                    </h5>
                    <h4 className=" font-semibold font-serif  text-2xl my-4">
                      Junior Suites Room
                    </h4>
                    <div className=" absolute bottom-[-300px] group-hover:bottom-0 duration-1000 px-2 bg-orange-100 ">
                      <p className=" font-semibold font-serif  text-2xl my-4 text-center">
                        Junior Suites Room
                      </p>

                      <p className="tracking-wide text-slate-500 p-4 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime praesentium deserunt obcaecati voluptatem, at
                        cupiditate nisi veritatis aperiam
                      </p>
                      <hr />
                      <button className="w-full gap-2 flex justify-center items-center text-black text-2xl py-4 shadow rounded bg-orange-100 duration-1000 hover:bg-orange-400 hover:text-white">
                        <span>Book Now</span>
                        <AiOutlineArrowRight />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" w-full border shadow-xl mx-2 rounded h-auto flex flex-col items-center overflow-hidden bg-orange-100 relative group">
                    <img
                      src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/2.jpg"
                      alt="Premiere"
                      className="object-none left-0 top-0 w-full h-[400px] transition duration-1000
                    ease-in-out delay-300 hover:-translate-y-1 hover:scale-110"
                    />
                    <h5 className="absolute top-5 left-5 px-3 py-1 bg-black rounded-3xl tracking-wider text-lg shadow text-yellow-500">
                      25% 0ff
                    </h5>
                    <h4 className=" font-semibold font-serif  text-2xl my-4">
                      Couple Sea View Room
                    </h4>
                    <div className=" absolute bottom-[-300px] group-hover:bottom-0 duration-1000 px-2 bg-orange-100 ">
                      <p className=" font-semibold font-serif  text-2xl my-4 text-center">
                        Couple Sea View Room
                      </p>

                      <p className="tracking-wide text-slate-500 p-4 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime praesentium deserunt obcaecati voluptatem, at
                        cupiditate nisi veritatis aperiam
                      </p>
                      <hr />
                      <button className="w-full gap-2 flex justify-center items-center text-black text-2xl py-4 shadow rounded bg-orange-100 duration-1000 hover:bg-orange-400 hover:text-white">
                        <span>Book Now</span>
                        <AiOutlineArrowRight />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" w-full border shadow-xl mx-2 rounded h-auto flex flex-col items-center overflow-hidden bg-orange-100 relative group">
                    <img
                      src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/1-3.jpg"
                      alt="Premiere"
                      className="object-none left-0 top-0 w-full h-[400px] transition duration-1000
                    ease-in-out delay-300 hover:-translate-y-1 hover:scale-110"
                    />
                    <h5 className="absolute top-5 left-5 px-3 py-1 bg-black rounded-3xl tracking-wider text-lg shadow text-yellow-500">
                      25% 0ff
                    </h5>
                    <h4 className=" font-semibold font-serif  text-2xl my-4">
                      Queen Deluxe Room
                    </h4>
                    <div className=" absolute bottom-[-300px] group-hover:bottom-0 duration-1000 px-2 bg-orange-100 ">
                      <p className=" font-semibold font-serif  text-2xl my-4 text-center">
                        Queen Deluxe Room
                      </p>

                      <p className="tracking-wide text-slate-500 p-4 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime praesentium deserunt obcaecati voluptatem, at
                        cupiditate nisi veritatis aperiam
                      </p>
                      <hr />
                      <button className="w-full gap-2 flex justify-center items-center text-black text-2xl py-4 shadow rounded bg-orange-100 duration-1000 hover:bg-orange-400 hover:text-white">
                        <span>Book Now</span>
                        <AiOutlineArrowRight />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          )}
        </div>

        <br />
        <br />
      </div>

      <Footer />
    </>
  );
};

export default Room;
