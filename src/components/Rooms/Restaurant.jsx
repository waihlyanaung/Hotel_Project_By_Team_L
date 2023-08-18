import { useEffect, useState } from "react";
import { AiFillTag } from "react-icons/ai";
import {
  BsArrowUpRight,
  BsFacebook,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import Navbar from "../Home/Navbar";
import AOS from "aos";

import Footer from "../Home/Footer";
// import "aos/dist/aos.css";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";


const Restaurant = () => {
    const [selectedTab, setSelectedTab] = useState("salad");
    console.log(selectedTab);

    useEffect(() => {
      AOS.init();
    }, []);

    const handleTabClick = (tab) => {
      setSelectedTab(tab);
    };

  return (
    <>
      <Navbar />
      <div className=" bg-default h-full">
        <div data-aos="fade-up" data-aos-duration="3000" className="">
          <div className=" relative flex flex-col gap-5 justify-center items-center h-[200px] md:h-[600px]  overflow-hidden">
            <div className=" z-50 flex flex-col gap-5 md:justify-center md:items-center">
              <h2 className=" text-xl md:text-5xl text-white font-serif">
                Welcome To Luxury
                <span className=" block text-center text-white font-serif">
                  Restaurant
                </span>
              </h2>
              <p className=" hidden md:inline text-base w-[50%] text-center text-white">
                The Gage Hotel offers unforgettable food and drink options. A
                memorable stay with delicious breakfast Join us in celebrating
                the new year with a little special surprise from our end.
              </p>
              <button className=" px-3 md:px-6 py-1 md:py-2 uppercase border flex gap-3 items-center border-white">
                <span className="text-white"> Reserve Now </span>
                <div className="text-white">
                  <BsArrowUpRight />
                </div>
              </button>
            </div>
            <img
              src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/hero-bg-2.jpg"
              alt=""
              className=" absolute top-0 left-0 w-screen h-auto  md:h-[600px]"
            />
          </div>
        </div>
        <div className=" md:my-20">
          <div data-aos="fade-up" data-aos-duration="3000" className="">
            <div className="block md:flex justify-between items-center py-10 mx-10">
              <h2 className=" text-2xl md:text-5xl font-serif">
                Meet Our Chef
              </h2>
              <button className=" btn-sm md:btn-md px-5 py-3 uppercase bg-orange-200 rounded  flex gap-3 items-center">
                <span className=""> See all Chef </span>
                <div className="">
                  <BsArrowUpRight />
                </div>
              </button>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className="">
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-5 mx-5">
              <div className=" bg-orange-100 p-5 border rounded">
                <img
                  src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/chef-01.png"
                  alt=""
                  className=" shadow bg-orange-50"
                />
                <div className=" flex flex-col gap-3 my-2">
                  <h4 className=" text-center text-2xl font-semibold font-serif">
                    Jhon Piterson
                  </h4>
                  <p className=" text-center">Chief Chef</p>
                  <div className=" flex gap-3 mx-auto">
                    <button className=" w-10 h-10 border border-black  rounded-full">
                      <BsFacebook className=" mx-auto text-slate-200" />
                    </button>
                    <button className=" w-10 h-10 border border-black  rounded-full">
                      <BsTwitter className=" mx-auto text-slate-200" />
                    </button>
                    <button className=" w-10 h-10 border border-black  rounded-full">
                      <BsLinkedin className=" mx-auto text-slate-200" />
                    </button>
                  </div>
                </div>
              </div>
              <div className=" bg-orange-100 p-5 border rounded">
                <img
                  src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/chef-02.png"
                  alt=""
                  className=" shadow bg-orange-50"
                />
                <div className=" flex flex-col gap-3 my-2">
                  <h4 className=" text-center text-2xl font-semibold font-serif">
                    Katherine Hazard
                  </h4>
                  <p className=" text-center">Receptionist</p>
                  <div className=" flex gap-3 mx-auto">
                    <button className=" w-10 h-10 border border-black  rounded-full">
                      <BsFacebook className=" mx-auto text-slate-200" />
                    </button>
                    <button className=" w-10 h-10 border border-black  rounded-full">
                      <BsTwitter className=" mx-auto text-slate-200" />
                    </button>
                    <button className=" w-10 h-10 border border-black  rounded-full">
                      <BsLinkedin className=" mx-auto text-slate-200" />
                    </button>
                  </div>
                </div>
              </div>
              <div className=" bg-orange-100 p-5 border rounded">
                <img
                  src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/chef-04.png"
                  alt=""
                  className=" shadow bg-orange-50"
                />
                <div className=" flex flex-col gap-3 my-2">
                  <h4 className=" text-center text-2xl font-semibold font-serif">
                    Daniela Jhonson
                  </h4>
                  <p className=" text-center">Head Chef</p>
                  <div className=" flex gap-3 mx-auto">
                    <button className=" w-10 h-10 border border-black  rounded-full">
                      <BsFacebook className=" mx-auto text-slate-200" />
                    </button>
                    <button className=" w-10 h-10 border border-black  rounded-full">
                      <BsTwitter className=" mx-auto text-slate-200" />
                    </button>
                    <button className=" w-10 h-10 border border-black  rounded-full">
                      <BsLinkedin className=" mx-auto text-slate-200" />
                    </button>
                  </div>
                </div>
              </div>
              <div className=" bg-orange-100 p-5 border rounded">
                <img
                  src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/chef-03.png"
                  alt=""
                  className=" shadow bg-orange-50"
                />
                <div className=" flex flex-col gap-3 my-2">
                  <h4 className=" text-center text-2xl font-semibold font-serif">
                    Eliza Jennifer
                  </h4>
                  <p className=" text-center">Deputy Chef</p>
                  <div className=" flex gap-3 mx-auto">
                    <button className=" w-10 h-10 border border-black  rounded-full">
                      <BsFacebook className=" mx-auto text-slate-200" />
                    </button>
                    <button className=" w-10 h-10 border border-black  rounded-full">
                      <BsTwitter className=" mx-auto text-slate-200" />
                    </button>
                    <button className=" w-10 h-10 border border-black  rounded-full">
                      <BsLinkedin className=" mx-auto text-slate-200" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" className="">
          <div className=" my-20">
            <div className="flex flex-col gap-5 justify-between items-center py-10 mx-10">
              <p>GALLERY</p>
              <h2 className=" text-2xl md:text-5xl font-serif">
                Restaurant Photo Gallery
              </h2>
            </div>
            <div className=" grid grid-cols-2 md:grid-cols-4 mx-4 gap-5">
              <img
                src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/main-1-1.jpg"
                alt=""
                className=" w-full h-auto md:h-[450px] col-span-2 my-2"
              />
              <img
                src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/main-2.jpg"
                alt=""
                className=" w-full h-auto md:h-[450px] my-2"
              />
              <img
                src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/main-4.jpg"
                alt=""
                className=" w-full h-auto md:h-[450px] my-2"
              />
              <img
                src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/main-15.jpg"
                alt=""
                className=" w-full h-auto md:h-[450px] my-2"
              />
              <img
                src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/main-2.jpg"
                alt=""
                className=" w-full h-auto md:h-[450px] my-2"
              />
              <img
                src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/main-1-1.jpg"
                alt=""
                className=" w-full h-auto md:h-[450px] col-span-2 my-2"
              />
              <img
                src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/main-10.jpg"
                alt=""
                className=" w-full h-auto md:h-[450px] col-span-2 my-2"
              />
              <img
                src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/main-15.jpg"
                alt=""
                className=" w-full h-auto md:h-[450px] my-2"
              />
              <img
                src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/main-19.jpg"
                alt=""
                className=" w-full h-auto md:h-[450px] my-2"
              />
            </div>
          </div>
        </div>
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
        <br />
        <div data-aos="fade-up" data-aos-duration="3000" className="">
          <div className=" flex flex-col gap-5 justify-center items-center h-[600px] my-10">
            <h2 className="text-3xl md:text-6xl font-serif">
              Royel Latest News
            </h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className=" relative">
                <img
                  src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/main-1-1.jpg"
                  alt=""
                  className=" h-[400px]"
                />
                <div className="flex gap-5">
                  <div className=" flex flex-col gap-7 bg-white bg-opacity-70 absolute bottom-5 left-10 z-10 px-5 py-3">
                    <div className="flex gap-2 items-center">
                      <AiFillTag />
                      <p>Event</p>
                    </div>

                    <a href="#" className=" ">
                      We’re Changing The Future Of Travel, <br /> Watch The Step
                    </a>

                    <Link>
                      We’re Changing The Future Of Travel, <br /> Watch The Step
                    </Link>

                  </div>
                  <div className="absolute bottom-20 md:bottom-14 right-10 z-10">
                    <p className=" text-white text-sm md:text-2xl bg-orange-300 px-4 py-3 rounded">
                      31 <br className="hidden md:block" /> May
                    </p>
                  </div>
                </div>
              </div>
              <div className=" relative">
                <img
                  src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/2.jpg"
                  alt=""
                  className=" h-[400px]"
                />
                <div className="flex gap-5">
                  <div className=" flex flex-col gap-7 bg-white bg-opacity-70 absolute bottom-5 left-10 z-10 px-5 py-3">
                    <div className="flex gap-2 items-center">
                      <AiFillTag />
                      <p>Hotel</p>
                    </div>

                    <a href="#" className=" ">
                      Best Places To Visit In Turkey In November, <br /> Safe
                      Hotel & Resort
                    </a>

                    <Link>
                      Best Places To Visit In Turkey In November, <br /> Safe
                      Hotel & Resort
                    </Link>

                  </div>
                  <div className="absolute bottom-28 md:bottom-14 right-10 z-10">
                    <p className=" text-white text-sm md:text-2xl bg-orange-300 px-4 py-3 rounded">
                      25 <br className="hidden md:block" /> March
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />

        <br />
        <br />
        <br />

      </div>
    </>
  );
};

export default Restaurant;
