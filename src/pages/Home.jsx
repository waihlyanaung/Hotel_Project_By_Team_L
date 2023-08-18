

import { useEffect, useState } from "react"

import Footer from "../components/Home/Footer"

import Navbar from "../components/Home/Navbar"
import { motion } from "framer-motion"
import {BsArrowUpRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
import {BsArrowRight} from 'react-icons/bs'
import {FaPlay} from 'react-icons/fa'
import { Link } from "react-router-dom"
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [url, setUrl] = useState("");
  const [selectedTab, setSelectedTab] = useState("salad");
  console.log(selectedTab);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  const gallery = [
    "https://envato.bdevs.net/royel/wp-content/uploads/2023/05/main-1-1.jpg",
    "https://envato.bdevs.net/royel/wp-content/uploads/2023/05/main-2.jpg",
    "https://envato.bdevs.net/royel/wp-content/uploads/2023/05/main-4.jpg",
    "https://envato.bdevs.net/royel/wp-content/uploads/2023/05/main-5.jpg",
    "https://envato.bdevs.net/royel/wp-content/uploads/2023/05/main-6.jpg",
    "https://envato.bdevs.net/royel/wp-content/uploads/2023/05/main-9.jpg",
    "https://envato.bdevs.net/royel/wp-content/uploads/2023/05/main-10.jpg",
    "https://envato.bdevs.net/royel/wp-content/uploads/2023/05/main-15.jpg",
    "https://envato.bdevs.net/royel/wp-content/uploads/2023/05/main-19.jpg",
  ];
  const contentVariants = {
    hidden: {
      y: "30vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 2 },
    },
  };
  useEffect(() => {
    setUrl(
      "https://envato.bdevs.net/royel/wp-content/uploads/2023/05/hero-bg-2.jpg"
    );
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />

      <div className=" overflow-hidden">
        {/* heroSection */}
        <div data-aos="fade-up" data-aos-duration="3000" className="">
          <div className=" bg-black w-screen">
            <div
              className="h-[60rem] text-white transition-all duration-500"
              style={{ backgroundImage: `url(${url})` }}
            >
              {/* <div className=" mr-2`"> */}

              <motion.h1
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className=" pt-60 pl-10 text-lg sm:text-2xl tracking-wider sm:tracking-[.5rem]"
              >
                THE NEW GENERATION OF LUXURY
              </motion.h1>
              <motion.h1
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className=" pt-20 md:pt-20 pb-5 pl-10 text-3xl sm:text-[70px] "
              >
                LUXURY REDEFINED:{" "}
              </motion.h1>
              <motion.h1
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className=" pl-10 md:pt-10 text-3xl sm:text-[70px]"
              >
                WELCOME TO ROYAL
              </motion.h1>

              <button className="transition duration-500 ease-in-out mt-52 md:mt-20 ml-10 px-8 py-5 flex items-center gap-3 text-xl border border-white hover:bg-[#EEC78C] hover:text-black hover:border-black">
                CHECK AVAILABILITY <BsArrowUpRight />{" "}
              </button>
              {/* </div> */}
              <div className=" hidden md:flex justify-end text-2xl mt-32 gap-10 p-10">
                <div
                  onClick={() =>
                    setUrl(
                      "https://envato.bdevs.net/royel/wp-content/uploads/2023/05/hero-bg-2.jpg"
                    )
                  }
                  className="  border-2 p-2 rounded-full"
                >
                  <RxDotFilled />
                </div>
                <div
                  onClick={() =>
                    setUrl(
                      "https://envato.bdevs.net/royel/wp-content/uploads/2023/05/room-view-2.jpg"
                    )
                  }
                  className="  border-2 p-2 rounded-full"
                >
                  <RxDotFilled />
                </div>
                <div
                  onClick={() =>
                    setUrl(
                      "https://envato.bdevs.net/royel/wp-content/uploads/2023/05/hero-bg-3.jpg"
                    )
                  }
                  className="  border-2 p-2 rounded-full"
                >
                  <RxDotFilled />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* service Section */}
        <div data-aos="fade-up" data-aos-duration="3000" className="">
          <div className="bg-[#F8F5F0] w-[450px] md:w-full h-full md:h-[600px] cursor-pointer">
            <div className=" grid grid-cols-2 md:grid-cols-3 md:p-5 me-10 opacity-7\\\\5">
              <div className="mt-[60px] md:mt-[120px] flex-col justify-center flex gap-6 items-center hover:animate-bounce mx-auto">
                <img
                  className=" w-[40px] md:w-[80px]"
                  src="https://cdn-icons-png.flaticon.com/256/9575/9575966.png"
                  alt=""
                />
                <p className="md:text-[30px]">Pick Up & Drop</p>
              </div>
              <div className="mt-[60px] md:mt-[120px] flex-col justify-center flex gap-6 items-center hover:animate-bounce mx-auto">
                <img
                  className=" w-[40px] md:w-[80px]"
                  src="https://cdn-icons-png.flaticon.com/256/887/887258.png"
                  alt=""
                />
                <p className=" md:text-[30px]">Parking Space</p>
              </div>
              <div className="mt-[60px] md:mt-[120px] flex-col justify-center flex gap-6 items-center hover:animate-bounce mx-auto">
                <img
                  className=" w-[40px] md:w-[80px]"
                  src="https://cdn-icons-png.flaticon.com/256/985/985505.png"
                  alt=""
                />
                <p className=" md:text-[30px]">Breakfast</p>
              </div>
              <div className="mt-[60px] md:mt-[120px] flex-col justify-center flex gap-6 items-center hover:animate-bounce mx-auto">
                <img
                  className=" w-[40px] md:w-[80px]"
                  src="https://cdn-icons-png.flaticon.com/256/2784/2784593.png"
                  alt=""
                />
                <p className=" md:text-[30px]">Swimming Pool</p>
              </div>
              <div className="mt-[60px] md:mt-[120px] flex-col justify-center flex gap-6 items-center hover:animate-bounce mx-auto">
                <img
                  className="w-[40px] md:w-[80px]"
                  src="https://cdn-icons-png.flaticon.com/256/2972/2972473.png"
                  alt=""
                />
                <p className=" md:text-[30px]">Fiber Internet</p>
              </div>
              <div className="mt-[60px] md:mt-[120px] flex-col justify-center flex gap-6 items-center hover:animate-bounce mx-auto">
                <img
                  className="w-[40px] md:width-[80px]"
                  src="https://cdn-icons-png.flaticon.com/256/2564/2564349.png"
                  alt=""
                />
                <p className=" md:text-[30px]">Bar & Bbq</p>
              </div>
            </div>
          </div>
        </div>
        {/* welcome Section */}
        <div data-aos="fade-up" data-aos-duration="3000" className="">
          <section className=" bg-[#F8F5F0] w-[450px] sm:w-full">
            <div className="container pt-2 md:pt-10 mb-20">
              <div className=" grid grid-cols-1 lg:grid-cols-2">
                {/* content */}
                <div className=" bg-white rounded ml-5 md:ml-[28] h-[70rem] flex flex-col justify-center md:justify-between me-10">
                  <div className=" p-10 ">
                    <div className=" md:text-xl text-gray-500 tracking-wider">
                      <span>5 STAR HOTEL IN DUBAI, UAE</span>
                    </div>
                    <div className=" text-[20px] md:text-[60px] tracking-wider mt-2 md:mt-[10]">
                      <span>Welcome To The Hotel Royel Palace</span>
                    </div>
                    <p className=" md:text-xl text-gray-500 mt-2 md:mt-[10]">
                      The Gage Hotel Offers Unforgettable Food And Drink
                      Options. Enjoy Dinner At The Award-Winning
                    </p>
                  </div>
                  <div className=" p-10">
                    <img
                      decoding="async"
                      src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/welcome.jpg"
                      alt="welcome thumb"
                    />
                  </div>
                </div>
                <div
                  className=" relative flex items-end"
                  style={{
                    backgroundImage: `url('https://envato.bdevs.net/royel/wp-content/uploads/2023/05/welcome-bg.jpg')`,
                  }}
                >
                  {/* video */}
                  <a href="https://www.youtube.com/watch?v=4K6Sh1tsAW4">
                    <div className=" text-white text-3xl absolute top-20 md:top-64 left-20 md:left-48 hover:bg-[#EEC78C] transition duration-150 ease-in-out border p-12 rounded-full">
                      <FaPlay className="" />
                    </div>
                  </a>
                  {/* content */}
                  <div className=" md:p-20 mt-60 sm:mt-[2]">
                    <div className=" bg-white p-10">
                      <span className=" block text-7xl mr-32">+76</span>
                      <span className=" text-3xl">Big Suites</span>
                    </div>
                    <div className="bg-[#EEC78C] p-10">
                      <span className=" block text-xl">Reservation</span>
                      <Link className=" text-2xl hover:text-white transition duration-200 ease-in-out">
                        (91) 2365 0003
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Rooms Section */}
        <div data-aos="fade-up" data-aos-duration="3000" className="">
          <section className="w-[450px] sm:w-full bg-black">
            <div
              className=""
              style={{
                backgroundImage: `url("https://envato.bdevs.net/royel/wp-content/uploads/2023/05/bd-room.jpg")`,
              }}
            >
              <div className=" text-white text-center p-32">
                <p className=" md:text-xl mb-7">ROOMS</p>
                <h1 className=" text-xl md:text-5xl">Our Rooms & Suites</h1>
              </div>
              <div className="">
                <div className=" grid grid-cols-1 lg:grid-cols-2">
                  {/* card 1*/}
                  <div className=" bg-white mr-20 lg:mr-1 ml-2 md:ml-10 mb-10 relative">
                    <div className="m-10 group">
                      <h4 className=" text-xl md:text-4xl mb-8 font-normal hover:text-[#EEC78C] duration-200 cursor-pointer">
                        Premiere Deluxe Room
                      </h4>
                      <p className=" text-3xl mb-8">
                        $899
                        <span className=" text-xl text-gray-500 font-normal">
                          /NIGHT
                        </span>{" "}
                      </p>
                      {/* img and hover */}
                      <div className="">
                        <img
                          decoding="async"
                          className=" h-[300px] md:h-[450px]"
                          src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/2.jpg"
                          alt="image"
                        />

                        <div className=" absolute bottom-[-150px] group-hover:bottom-[70px] duration-1000 opacity-0 group-hover:opacity-100 border border-gray-500 w-[350px] md:w-[670px] h-[450px] bg-gray-50">
                          <p className=" text-gray-500 text-lg p-7 border border-gray-500">
                            The Gage Hotel Offers Unforgettable Food And Drink
                            Options. A Memorable Stay With Delicious Breakfast
                            Join Us.
                          </p>
                          <div className=" grid grid-cols-2">
                            <div className=" grid grid-row-2">
                              <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                                <img
                                  className=" w-[30px] md:w-[40px]"
                                  src="https://cdn-icons-png.flaticon.com/256/9575/9575966.png"
                                  alt=""
                                />
                                <p className=" text-[15px]">Pick Up & Drop</p>
                              </div>
                              <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                                <img
                                  className=" w-[30px] md:w-[40px]"
                                  src="https://cdn-icons-png.flaticon.com/256/887/887258.png"
                                  alt=""
                                />
                                <p className=" text-[15px]">Parking Space</p>
                              </div>
                            </div>
                            <div className=" grid grid-rows-2">
                              <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                                <img
                                  className=" w-[30px] md:w-[40px]"
                                  src="https://cdn-icons-png.flaticon.com/256/985/985505.png"
                                  alt=""
                                />
                                <p className=" text-[15px]">Breakfast</p>
                              </div>
                              <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                                <img
                                  className=" w-[30px] md:w-[40px]"
                                  src="https://cdn-icons-png.flaticon.com/256/2784/2784593.png"
                                  alt=""
                                />
                                <p className=" text-[15px]">Swimming Pool</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" mt-7 flex items-center gap-5 relative">
                        <Link className="absolute left-[-150px] opacity-0 group-hover:opacity-100 group-hover:left-0 group-hover:flex duration-1000 ease-in-out">
                          <span className=" text-2xl hover:text-[#EEC78C] transition duration-200">
                            Room Detail
                          </span>
                        </Link>
                        <i className=" text-4xl absolute group-hover:left-[150px]">
                          <BsArrowRight className=" duration-1000" />
                        </i>
                      </div>
                    </div>
                  </div>
                  {/* card 2 */}
                  <div className=" bg-white mr-20 lg:mr-1 ml-2 md:ml-10 mb-10 relative">
                    <div className="m-10 group">
                      <h4 className=" text-xl lg:text-4xl mb-8 font-normal hover:text-[#EEC78C] duration-200 cursor-pointer">
                        Superior Site Room
                      </h4>
                      <p className=" text-3xl mb-8">
                        $899
                        <span className=" text-xl text-gray-500 font-normal">
                          /NIGHT
                        </span>{" "}
                      </p>
                      {/* img and hover */}
                      <div className="">
                        <img
                          decoding="async"
                          className=" h-[300px] lg:h-[450px] "
                          src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/5-2.jpg"
                          alt="image"
                        />

                        <div className=" absolute bottom-[-150px] group-hover:bottom-[70px] duration-1000 opacity-0 group-hover:opacity-100  border border-gray-500 w-[350px] md:w-[670px] h-[450px] bg-gray-50">
                          <p className=" text-gray-500 text-lg p-7 border border-gray-500">
                            The Gage Hotel Offers Unforgettable Food And Drink
                            Options. A Memorable Stay With Delicious Breakfast
                            Join Us.
                          </p>
                          <div className=" grid grid-cols-2">
                            <div className=" grid grid-row-2">
                              <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                                <img
                                  className=" w-[30px] md:w-[40px]"
                                  src="https://cdn-icons-png.flaticon.com/256/9575/9575966.png"
                                  alt=""
                                />
                                <p className=" text-[15px]">Pick Up & Drop</p>
                              </div>
                              <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                                <img
                                  className=" w-[30px] md:w-[40px]"
                                  src="https://cdn-icons-png.flaticon.com/256/887/887258.png"
                                  alt=""
                                />
                                <p className=" text-[15px]">Parking Space</p>
                              </div>
                            </div>
                            <div className=" grid grid-rows-2">
                              <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                                <img
                                  className=" w-[30px] md:w-[40px]"
                                  src="https://cdn-icons-png.flaticon.com/256/985/985505.png"
                                  alt=""
                                />
                                <p className=" text-[15px]">Breakfast</p>
                              </div>
                              <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                                <img
                                  className=" w-[30px] md:w-[40px]"
                                  src="https://cdn-icons-png.flaticon.com/256/2784/2784593.png"
                                  alt=""
                                />
                                <p className=" text-[15px]">Swimming Pool</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" mt-7 flex items-center gap-5 relative">
                        <Link className="absolute left-[-150px] opacity-0 group-hover:opacity-100 group-hover:left-0 group-hover:flex duration-1000 ease-in-out">
                          <span className=" text-2xl hover:text-[#EEC78C] transition duration-200">
                            Room Detail
                          </span>
                        </Link>
                        <i className=" text-4xl absolute group-hover:left-[150px]">
                          <BsArrowRight className=" duration-1000" />
                        </i>
                      </div>
                    </div>
                  </div>
                  {/* card 3 */}
                  <div className=" bg-white  mr-20 lg:mr-1 ml-2 md:ml-10 mb-10 relative">
                    <div className="m-10 group">
                      <h4 className=" text-xl lg:text-4xl mb-8 font-normal hover:text-[#EEC78C] duration-200 cursor-pointer">
                        Master Suite Room
                      </h4>
                      <p className=" text-3xl mb-8">
                        $899
                        <span className=" text-xl text-gray-500 font-normal">
                          /NIGHT
                        </span>{" "}
                      </p>
                      {/* img and hover */}
                      <div className="">
                        <img
                          decoding="async"
                          className=" h-[300px] md:h-[450px]"
                          src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/4-2.jpg"
                          alt="image"
                        />

                        <div className=" absolute bottom-[-150px] group-hover:bottom-[70px] duration-1000 opacity-0 group-hover:opacity-100  border border-gray-500 w-[350px] md:w-[670px] h-[450px] bg-gray-50">
                          <p className=" text-gray-500 text-lg p-7 border border-gray-500">
                            The Gage Hotel Offers Unforgettable Food And Drink
                            Options. A Memorable Stay With Delicious Breakfast
                            Join Us.
                          </p>
                          <div className=" grid grid-cols-2">
                            <div className=" grid grid-row-2">
                              <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                                <img
                                  className=" w-[30px] md:w-[40px]"
                                  src="https://cdn-icons-png.flaticon.com/256/9575/9575966.png"
                                  alt=""
                                />
                                <p className=" text-[15px]">Pick Up & Drop</p>
                              </div>
                              <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                                <img
                                  className=" w-[30px] md:w-[40px]"
                                  src="https://cdn-icons-png.flaticon.com/256/887/887258.png"
                                  alt=""
                                />
                                <p className=" text-[15px]">Parking Space</p>
                              </div>
                            </div>
                            <div className=" grid grid-rows-2">
                              <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                                <img
                                  className=" w-[30px] md:w-[40px]"
                                  src="https://cdn-icons-png.flaticon.com/256/985/985505.png"
                                  alt=""
                                />
                                <p className=" text-[15px]">Breakfast</p>
                              </div>
                              <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                                <img
                                  className=" w-[30px] md:w-[40px]"
                                  src="https://cdn-icons-png.flaticon.com/256/2784/2784593.png"
                                  alt=""
                                />
                                <p className=" text-[15px]">Swimming Pool</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" mt-7 flex items-center gap-5 relative">
                        <a className="absolute left-[-150px] opacity-0 group-hover:opacity-100 group-hover:left-0 group-hover:flex duration-1000 ease-in-out">
                          <span className=" text-2xl hover:text-[#EEC78C] transition duration-200">
                            Room Detail
                          </span>
                        </a>
                        <i className=" text-4xl absolute group-hover:left-[150px]">
                          <BsArrowRight className=" duration-1000" />
                        </i>
                      </div>
                    </div>
                  </div>
                  {/* card 4 */}
                  <div className=" bg-white  mr-20 lg:mr-1 ml-2 md:ml-10 mb-10 relative">
                    <div className="m-10 group">
                      <h4 className=" text-xl lg:text-4xl mb-8 font-normal hover:text-[#EEC78C] duration-200 cursor-pointer">
                        Junior Suite Rooms
                      </h4>
                      <p className=" text-3xl mb-8">
                        $899
                        <span className=" text-xl text-gray-500 font-normal">
                          /NIGHT
                        </span>{" "}
                      </p>
                      {/* img and hover */}
                      <div className="">
                        <img
                          decoding="async"
                          className=" h-[300px] md:h-[450px]"
                          src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/3.jpg"
                          alt="image"
                        />

                        <div className=" absolute bottom-[-150px] group-hover:bottom-[70px] duration-1000 opacity-0 group-hover:opacity-100  border border-gray-500 w-[350px] md:w-[670px] h-[450px] bg-gray-50">
                          <p className=" text-gray-500 text-lg p-7 border border-gray-500">
                            The Gage Hotel Offers Unforgettable Food And Drink
                            Options. A Memorable Stay With Delicious Breakfast
                            Join Us.
                          </p>
                          <div className=" grid grid-cols-2">
                            <div className=" grid grid-row-2">
                              <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                                <img
                                  className=" w-[30px] md:w-[40px]"
                                  src="https://cdn-icons-png.flaticon.com/256/9575/9575966.png"
                                  alt=""
                                />
                                <p className=" text-[15px]">Pick Up & Drop</p>
                              </div>
                              <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                                <img
                                  className=" w-[30px] md:w-[40px]"
                                  src="https://cdn-icons-png.flaticon.com/256/887/887258.png"
                                  alt=""
                                />
                                <p className=" text-[15px]">Parking Space</p>
                              </div>
                            </div>
                            <div className=" grid grid-rows-2">
                              <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                                <img
                                  className=" w-[30px] md:w-[40px]"
                                  src="https://cdn-icons-png.flaticon.com/256/985/985505.png"
                                  alt=""
                                />
                                <p className=" text-[15px]">Breakfast</p>
                              </div>
                              <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                                <img
                                  className=" w-[30px] md:w-[40px]"
                                  src="https://cdn-icons-png.flaticon.com/256/2784/2784593.png"
                                  alt=""
                                />
                                <p className=" text-[15px]">Swimming Pool</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" mt-7 flex items-center gap-5 relative">
                        <Link className="absolute left-[-150px] opacity-0 group-hover:opacity-100 group-hover:left-0 group-hover:flex duration-1000 ease-in-out">
                          <span className=" text-2xl hover:text-[#EEC78C] transition duration-200">
                            Room Detail
                          </span>
                        </Link>
                        <i className=" text-4xl absolute group-hover:left-[150px]">
                          <BsArrowRight className=" duration-1000" />
                        </i>
                      </div>
                    </div>
                  </div>
                  {/* card 5 */}
                  <div className=" bg-white  mr-20 lg:mr-1 ml-2 md:ml-10 mb-10 relative">
                    <div className="m-10 group">
                      <h4 className=" text-xl lg:text-4xl mb-8 font-normal hover:text-[#EEC78C] duration-200 cursor-pointer">
                        Couple Sea View Room
                      </h4>
                      <p className=" text-3xl mb-8">
                        $899
                        <span className=" text-xl text-gray-500 font-normal">
                          /NIGHT
                        </span>{" "}
                      </p>
                      {/* img and hover */}
                      <div className="">
                        <img
                          decoding="async"
                          className=" h-[300px] md:h-[450px]"
                          src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/2.jpg"
                          alt="image"
                        />

                        <div className=" absolute bottom-[-150px] group-hover:bottom-[70px] duration-1000 opacity-0 group-hover:opacity-100  border border-gray-500 w-[350px] md:w-[670px] h-[450px] bg-gray-50">
                          <p className=" text-gray-500 text-lg p-7 border border-gray-500">
                            The Gage Hotel Offers Unforgettable Food And Drink
                            Options. A Memorable Stay With Delicious Breakfast
                            Join Us.
                          </p>
                          <div className=" grid grid-cols-2">
                            <div className=" grid grid-row-2">
                              <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                                <img
                                  className=" w-[30px] md:w-[40px]"
                                  src="https://cdn-icons-png.flaticon.com/256/9575/9575966.png"
                                  alt=""
                                />
                                <p className=" text-[15px]">Pick Up & Drop</p>
                              </div>
                              <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                                <img
                                  className=" w-[30px] md:w-[40px]"
                                  src="https://cdn-icons-png.flaticon.com/256/887/887258.png"
                                  alt=""
                                />
                                <p className=" text-[15px]">Parking Space</p>
                              </div>
                            </div>
                            <div className=" grid grid-rows-2">
                              <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                                <img
                                  className=" w-[30px] md:w-[40px]"
                                  src="https://cdn-icons-png.flaticon.com/256/985/985505.png"
                                  alt=""
                                />
                                <p className=" text-[15px]">Breakfast</p>
                              </div>
                              <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                                <img
                                  className=" w-[30px] md:w-[40px]"
                                  src="https://cdn-icons-png.flaticon.com/256/2784/2784593.png"
                                  alt=""
                                />
                                <p className=" text-[15px]">Swimming Pool</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" mt-7 flex items-center gap-5 relative">
                        <Link className="absolute left-[-150px] opacity-0 group-hover:opacity-100 group-hover:left-0 group-hover:flex duration-1000 ease-in-out">
                          <span className=" text-2xl hover:text-[#EEC78C] transition duration-200">
                            Room Detail
                          </span>
                        </Link>
                        <i className=" text-4xl absolute group-hover:left-[150px]">
                          <BsArrowRight className=" duration-1000" />
                        </i>
                      </div>
                    </div>
                  </div>
                  {/* card 6 */}
                  <div className=" bg-white  mr-20 lg:mr-1 ml-2 md:ml-10 mb-10 relative">
                    <div className="m-10 group">
                      <h4 className=" text-xl lg:text-4xl mb-8 font-normal hover:text-[#EEC78C] duration-200 cursor-pointer">
                        Queen Deluxe Rooms
                      </h4>
                      <p className=" text-3xl mb-8">
                        $899
                        <span className=" text-xl text-gray-500 font-normal">
                          /NIGHT
                        </span>{" "}
                      </p>
                      {/* img and hover */}
                      <div className="">
                        <img
                          decoding="async"
                          className=" h-[300px] md:h-[450px]"
                          src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/1-3.jpg"
                          alt="image"
                        />

                        <div className=" absolute bottom-[-150px] group-hover:bottom-[70px] duration-1000 opacity-0 group-hover:opacity-100  border border-gray-500 w-[350px] md:w-[670px] h-[450px] bg-gray-50">
                          <p className=" text-gray-500 text-lg p-7 border border-gray-500">
                            The Gage Hotel Offers Unforgettable Food And Drink
                            Options. A Memorable Stay With Delicious Breakfast
                            Join Us.
                          </p>
                          <div className=" grid grid-cols-2">
                            <div className=" grid grid-row-2">
                              <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                                <img
                                  className=" w-[30px] md:w-[40px]"
                                  src="https://cdn-icons-png.flaticon.com/256/9575/9575966.png"
                                  alt=""
                                />
                                <p className=" text-[15px]">Pick Up & Drop</p>
                              </div>
                              <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                                <img
                                  className=" w-[30px] md:w-[40px]"
                                  src="https://cdn-icons-png.flaticon.com/256/887/887258.png"
                                  alt=""
                                />
                                <p className=" text-[15px]">Parking Space</p>
                              </div>
                            </div>
                            <div className=" grid grid-rows-2">
                              <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                                <img
                                  className=" w-[30px] md:w-[40px]"
                                  src="https://cdn-icons-png.flaticon.com/256/985/985505.png"
                                  alt=""
                                />
                                <p className=" text-[15px]">Breakfast</p>
                              </div>
                              <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                                <img
                                  className=" w-[30px] md:w-[40px]"
                                  src="https://cdn-icons-png.flaticon.com/256/2784/2784593.png"
                                  alt=""
                                />
                                <p className=" text-[15px]">Swimming Pool</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" mt-7 flex items-center gap-5 relative">
                        <Link className="absolute left-[-150px] opacity-0 group-hover:opacity-100 group-hover:left-0 group-hover:flex duration-1000 ease-in-out">
                          <span className=" text-2xl hover:text-[#EEC78C] transition duration-200">
                            Room Detail
                          </span>
                        </Link>
                        <i className=" text-4xl absolute group-hover:left-[150px]">
                          <BsArrowRight className=" duration-1000" />
                        </i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Book Now Section */}
        <div data-aos="fade-up" data-aos-duration="3000" className="">
          <section className="md:mb-[200px]">
            <div className="">
              <div className=" text-start lg:text-center mx-5 mt-32">
                <span className=" text-xl">BOOK NOW</span>
                <div className=" mt-10 text-2xl w-[800px] mx-auto mb-20 tracking-wider ">
                  <h2 className=" me-10 text-xl">
                    Welcome To Royel Palace Hotel{" "}
                  </h2>
                  <h1 className="me-10 text-xl md:mt-5">
                    Book Your Stay Today.
                  </h1>
                </div>
              </div>
              <div className="">
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div className=" relative group overflow-hidden">
                    <img
                      decoding="async"
                      className="h-[350px] md:h-[600px] group-hover:scale-125 duration-300"
                      src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/pool.jpg"
                      alt="image not found"
                    />
                    {/* hover */}
                    <div className=" absolute group-hover:bottom-[50px] duration-1000 opacity-0 group-hover:opacity-100 bottom-[0px] bg-white m-10 rounded-md p-3 md:p-10">
                      <h4 className=" text-lg md:text-3xl mb-1 md:my-5">
                        Swimming Pool
                      </h4>
                      <p className=" text-sm md:text-xl tracking-widest text-gray-600 mb-3 md:mb-8">
                        These pools help hotels and resorts provide outstanding
                        entertainment experiences, which translates into
                        customer satisfaction,loyalty to the hotel and emphasize
                        the resort brand image
                      </p>
                      <div className=" md:text-xl md:mb-10 group">
                        <Link className=" flex items-center gap-3">
                          <span className="">Get the Service</span>
                          <div className=" group-hover:rotate-45 duration-200">
                            <BsArrowUpRight />{" "}
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className=" overflow-hidden relative group hidden lg:block">
                    <img
                      decoding="async"
                      className="h-[600px] group-hover:scale-125 duration-300"
                      src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/gym.jpg"
                      alt="image not found"
                    />
                    <div className=" absolute group-hover:bottom-[50px] duration-1000 opacity-0 group-hover:opacity-100 bottom-[0px] bg-white m-10 rounded-md p-10">
                      <h4 className=" text-3xl my-5">Swimming Pool</h4>
                      <p className=" text-xl tracking-widest text-gray-600 mb-8">
                        These pools help hotels and resorts provide outstanding
                        entertainment experiences, which translates into
                        customer satisfaction,loyalty to the hotel and emphasize
                        the resort brand image
                      </p>
                      <div className=" text-xl mb-10 group">
                        <Link className=" flex items-center gap-3">
                          <span className="">Get the Servie</span>
                          <div className=" group-hover:rotate-45 duration-200">
                            <BsArrowUpRight />{" "}
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Food Menu Section */}
        <div data-aos="fade-up" data-aos-duration="3000" className="">
          <div className=" relative flex flex-col gap-5 justify-center items-center h-auto my-20 overflow-hidden">
            <div className=" flex flex-col gap-2 my-3 justify-center items-center z-50">
              <p className="md:text-white font-serif">FOOD MENU</p>
              <h2 className="text-3xl md:text-5xl md:text-white font-serif my-3">
                Delicious Food Forever
              </h2>
              <div className="">
                <div className="flex gap-5 items-center justify-center">
                  <button
                    onClick={() => handleTabClick("salad")}
                    className="text-xl font-serif text-orange-300 hover:border-b-2 border-orange-300"
                  >
                    Salads
                  </button>
                  <button
                    onClick={() => handleTabClick("dessert")}
                    className="text-xl font-serif text-orange-300 hover:border-b-2 border-orange-300"
                  >
                    Dessert
                  </button>
                  <button
                    onClick={() => handleTabClick("starter")}
                    className="text-xl font-serif text-orange-300 hover:border-b-2 border-orange-300"
                  >
                    Starter
                  </button>
                  <button
                    onClick={() => handleTabClick("mainDish")}
                    className="text-xl font-serif text-orange-300 hover:border-b-2 border-orange-300"
                  >
                    Main Dish
                  </button>
                </div>
                <div className="">
                  {selectedTab === "salad" && (
                    <div
                      className=" grid grid-cols-1 md:grid-cols-4 mx-4 gap-5"
                      id="salad"
                    >
                      <div className=" border border-slate-500 flex flex-col gap-2 w-full mx-3 my-5 p-6 bg-black">
                        <img
                          src="https://envato.bdevs.net/royel/wp-content/uploads/2023/06/pasta-plate.png"
                          alt=""
                          className=" w-full h-auto"
                        />
                        <h4 className=" text-2xl w-auto text-center font-serif text-white">
                          Pasta Plate
                        </h4>
                        <p className=" text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Possimus, esse!
                        </p>
                        <p className=" text-orange-200 text-center mt-2">
                          $50.00
                        </p>
                      </div>
                      <div className=" border border-slate-500 flex flex-col gap-2 w-full mx-3 my-5 p-6 bg-black">
                        <img
                          src="https://envato.bdevs.net/royel/wp-content/uploads/2023/06/Sicilian-Pizza.png"
                          alt=""
                          className=" w-full h-auto"
                        />
                        <h4 className=" text-2xl w-auto text-center font-serif text-white">
                          Sicilian Pizza
                        </h4>
                        <p className=" text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Possimus, esse!
                        </p>
                        <p className=" text-orange-200 text-center mt-2">
                          $78.00
                        </p>
                      </div>
                      <div className=" border border-slate-500 flex flex-col gap-2 w-full mx-3 my-5 p-6 bg-black">
                        <img
                          src="https://envato.bdevs.net/royel/wp-content/uploads/2023/06/full-grill-cheicken-1.png"
                          alt=""
                          className=" w-full h-auto"
                        />
                        <h4 className=" text-2xl w-auto text-center font-serif text-white">
                          Full Grilled Chicken
                        </h4>
                        <p className=" text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Possimus, esse!
                        </p>
                        <p className=" text-orange-200 text-center mt-2">
                          $100.00
                        </p>
                      </div>
                      <div className=" border border-slate-500 flex flex-col gap-2 w-full mx-3 my-5 p-6 bg-black">
                        <img
                          src="https://envato.bdevs.net/royel/wp-content/uploads/2023/06/pineapple-wedges.png"
                          alt=""
                          className=" w-full h-auto"
                        />
                        <h4 className=" text-2xl w-auto text-center font-serif text-white">
                          Pineapple Wedges
                        </h4>
                        <p className=" text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Possimus, esse!
                        </p>
                        <p className=" text-orange-200 text-center mt-2">
                          <span className=" line-through text-orange-200">
                            $70.00
                          </span>
                          $65.00
                        </p>
                      </div>
                    </div>
                  )}
                  {selectedTab === "dessert" && (
                    <div
                      className=" grid grid-cols-1 md:grid-cols-4 mx-4 gap-5"
                      id="salad"
                    >
                      <div className=" border border-slate-500 flex flex-col gap-2 w-full mx-3 my-5 p-6 bg-black">
                        <img
                          src="https://envato.bdevs.net/royel/wp-content/uploads/2023/06/rice-bowl.png"
                          alt=""
                          className=" w-full h-auto"
                        />
                        <h4 className=" text-2xl w-auto text-center font-serif text-white">
                          Rice Bowl
                        </h4>
                        <p className=" text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Possimus, esse!
                        </p>
                        <p className=" text-orange-200 text-center mt-2">
                          $50.00
                        </p>
                      </div>

                      <div className=" border border-slate-500 flex flex-col gap-2 w-full mx-3 my-5 p-6 bg-black">
                        <img
                          src="https://envato.bdevs.net/royel/wp-content/uploads/2023/06/warm-waffles.png"
                          alt=""
                          className=" w-full h-auto"
                        />
                        <h4 className=" text-2xl w-auto text-center font-serif text-white">
                          Warm Waffle
                        </h4>
                        <p className=" text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Possimus, esse!
                        </p>
                        <p className=" text-orange-200 text-center mt-2">
                          $40.00
                        </p>
                      </div>
                      <div className=" border border-slate-500 flex flex-col gap-2 w-full mx-3 my-5 p-6 bg-black">
                        <img
                          src="https://envato.bdevs.net/royel/wp-content/uploads/2023/06/pineapple-wedges.png"
                          alt=""
                          className=" w-full h-auto"
                        />
                        <h4 className=" text-2xl w-auto text-center font-serif text-white">
                          Pineapple Wedges
                        </h4>
                        <p className=" text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Possimus, esse!
                        </p>
                        <p className=" text-orange-200 text-center mt-2">
                          <span className=" line-through text-orange-200">
                            $70.00
                          </span>
                          $65.00
                        </p>
                      </div>
                      <div className=" border border-slate-500 flex flex-col gap-2 w-full mx-3 my-5 p-6 bg-black">
                        <img
                          src="https://envato.bdevs.net/royel/wp-content/uploads/2023/06/Sicilian-Pizza.png"
                          alt=""
                          className=" w-full h-auto"
                        />
                        <h4 className=" text-2xl w-auto text-center font-serif text-white">
                          Sicilian Pizza
                        </h4>
                        <p className=" text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Possimus, esse!
                        </p>
                        <p className=" text-orange-200 text-center mt-2">
                          $78.00
                        </p>
                      </div>
                    </div>
                  )}
                  {selectedTab === "starter" && (
                    <div
                      className=" grid grid-cols-1 md:grid-cols-4 mx-4 gap-5"
                      id="salad"
                    >
                      <div className=" border border-slate-500 flex flex-col gap-2 w-full mx-3 my-5 p-6 bg-black">
                        <img
                          src="https://envato.bdevs.net/royel/wp-content/uploads/2023/06/Sicilian-Pizza.png"
                          alt=""
                          className=" w-full h-auto"
                        />
                        <h4 className=" text-2xl w-auto text-center font-serif text-white">
                          Sicilian Pizza
                        </h4>
                        <p className=" text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Possimus, esse!
                        </p>
                        <p className=" text-orange-200 text-center mt-2">
                          $78.00
                        </p>
                      </div>
                      <div className=" border border-slate-500 flex flex-col gap-2 w-full mx-3 my-5 p-6 bg-black">
                        <img
                          src="https://envato.bdevs.net/royel/wp-content/uploads/2023/06/pineapple-wedges.png"
                          alt=""
                          className=" w-full h-auto"
                        />
                        <h4 className=" text-2xl w-auto text-center font-serif text-white">
                          Pineapple Wedges
                        </h4>
                        <p className=" text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Possimus, esse!
                        </p>
                        <p className=" text-orange-200 text-center mt-2">
                          <span className=" line-through text-orange-200">
                            $70.00
                          </span>
                          $65.00
                        </p>
                      </div>
                      <div className=" border border-slate-500 flex flex-col gap-2 w-full mx-3 my-5 p-6 bg-black">
                        <img
                          src="https://envato.bdevs.net/royel/wp-content/uploads/2023/06/rice-bowl.png"
                          alt=""
                          className=" w-full h-auto"
                        />
                        <h4 className=" text-2xl w-auto text-center font-serif text-white">
                          Rice Bowl
                        </h4>
                        <p className=" text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Possimus, esse!
                        </p>
                        <p className=" text-orange-200 text-center mt-2">
                          $50.00
                        </p>
                      </div>

                      <div className=" border border-slate-500 flex flex-col gap-2 w-full mx-3 my-5 p-6 bg-black">
                        <img
                          src="https://envato.bdevs.net/royel/wp-content/uploads/2023/06/warm-waffles.png"
                          alt=""
                          className=" w-full h-auto"
                        />
                        <h4 className=" text-2xl w-auto text-center font-serif text-white">
                          Warm Waffle
                        </h4>
                        <p className=" text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Possimus, esse!
                        </p>
                        <p className=" text-orange-200 text-center mt-2">
                          $40.00
                        </p>
                      </div>
                    </div>
                  )}
                  {selectedTab === "mainDish" && (
                    <div
                      className=" grid grid-cols-1 md:grid-cols-4 mx-4 gap-5"
                      id="salad"
                    >
                      <div className=" border border-slate-500 flex flex-col gap-2 w-full mx-3 my-5 p-6 bg-black">
                        <img
                          src="https://envato.bdevs.net/royel/wp-content/uploads/2023/06/full-grill-cheicken-1.png"
                          alt=""
                          className=" w-full h-auto"
                        />
                        <h4 className=" text-2xl w-auto text-center font-serif text-white">
                          Full Grilled Chicken
                        </h4>
                        <p className=" text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Possimus, esse!
                        </p>
                        <p className=" text-orange-200 text-center mt-2">
                          $100.00
                        </p>
                      </div>
                      <div className=" border border-slate-500 flex flex-col gap-2 w-full mx-3 my-5 p-6 bg-black">
                        <img
                          src="https://envato.bdevs.net/royel/wp-content/uploads/2023/06/rice-bowl.png"
                          alt=""
                          className=" w-full h-auto"
                        />
                        <h4 className=" text-2xl w-auto text-center font-serif text-white">
                          Rice Bowl
                        </h4>
                        <p className=" text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Possimus, esse!
                        </p>
                        <p className=" text-orange-200 text-center mt-2">
                          $50.00
                        </p>
                      </div>
                      <div className=" border border-slate-500 flex flex-col gap-2 w-full mx-3 my-5 p-6 bg-black">
                        <img
                          src="https://envato.bdevs.net/royel/wp-content/uploads/2023/06/warm-waffles.png"
                          alt=""
                          className=" w-full h-auto"
                        />
                        <h4 className=" text-2xl w-auto text-center font-serif text-white">
                          Warm Waffle
                        </h4>
                        <p className=" text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Possimus, esse!
                        </p>
                        <p className=" text-orange-200 text-center mt-2">
                          $40.00
                        </p>
                      </div>
                      <div className=" border border-slate-500 flex flex-col gap-2 w-full mx-3 my-5 p-6 bg-black">
                        <img
                          src="https://envato.bdevs.net/royel/wp-content/uploads/2023/06/pineapple-wedges.png"
                          alt=""
                          className=" w-full h-auto"
                        />
                        <h4 className=" text-2xl w-auto text-center font-serif text-white">
                          Pineapple Wedges
                        </h4>
                        <p className=" text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Possimus, esse!
                        </p>
                        <p className=" text-orange-200 text-center mt-2">
                          <span className=" line-through text-orange-200">
                            $70.00
                          </span>
                          $65.00
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <img
              src="https://st4.depositphotos.com/4590583/25626/i/600/depositphotos_256268138-stock-photo-veal-steak-wooden-background-top.jpg"
              alt=""
              className=" hidden md:block absolute top-0 left-0 w-screen h-auto opacity-100"
            />
          </div>
        </div>
        {/* gallery Section */}
        <div data-aos="fade-up" data-aos-duration="3000" className="">
          <section className=" bg-white">
            <div className=" md:mt-10 md:mb-40">
              <div className=" p-5 md:p-20 flex items-center flex-col justify-center">
                <h1 className=" md:text-xl tracking-widest mb-5">GALLERY</h1>
                <h3 className=" text-3xl md:text-6xl md:mb-5">Our Gallery</h3>
              </div>
              <div className=" p-5">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                  <div className=" bg-black lg:col-span-2">
                    <img
                      src={gallery[0]}
                      className=" w-full hover:opacity-50 duration-200"
                      alt=""
                    />
                  </div>
                  <div className=" bg-black">
                    <img
                      src={gallery[1]}
                      className=" w-full hover:opacity-50 duration-200"
                      alt=""
                    />
                  </div>
                  <div className=" bg-black">
                    <img
                      src={gallery[2]}
                      className=" w-full hover:opacity-50 duration-200"
                      alt=""
                    />
                  </div>

                  <div className=" bg-black">
                    <img
                      src={gallery[3]}
                      className=" w-full hover:opacity-50 duration-200"
                      alt=""
                    />
                  </div>
                  <div className=" bg-black">
                    <img
                      src={gallery[4]}
                      className=" w-full hover:opacity-50 duration-200"
                      alt=""
                    />
                  </div>
                  <div className=" bg-black lg:col-span-2 ">
                    <img
                      src={gallery[5]}
                      className=" w-full hover:opacity-50 duration-200"
                      alt=""
                    />
                  </div>

                  <div className=" bg-black lg:col-span-2">
                    <img
                      src={gallery[6]}
                      className=" w-full hover:opacity-50 duration-200"
                      alt=""
                    />
                  </div>
                  <div className=" bg-black">
                    <img
                      src={gallery[7]}
                      className=" w-full hover:opacity-50 duration-200"
                      alt=""
                    />
                  </div>
                  <div className=" bg-black">
                    <img
                      src={gallery[8]}
                      className=" w-full hover:opacity-50 duration-200"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
