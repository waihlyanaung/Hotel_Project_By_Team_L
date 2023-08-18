import { AiFillTag } from "react-icons/ai";
import Footer from "../Home/Footer";
import {
  BsArrowUpRight,
  BsFacebook,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import Navbar from "../Home/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Chef = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <div className=" bg-default h-full">
        <div data-aos="fade-up" data-aos-duration="3000" className="">
          <div className=" h-[150px] md:h-[400px] flex flex-col justify-center items-center">
            <h2 className=" font-semibold text-3xl md:text-6xl mb-5 font-serif">
              Our Chef
            </h2>
            <p>{`Royel > Our Chef`}</p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" className="">
          <div className=" md:my-20">
            <div className="flex justify-between items-center py-10 mx-10">
              <h2 className=" text-3xl md:text-5xl font-serif">
                Meet Our Chef
              </h2>
            </div>
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
              <div className=" bg-orange-100 p-5 border rounded">
                <img
                  src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/chef-05.png"
                  alt=""
                  className=" shadow bg-orange-50"
                />
                <div className=" flex flex-col gap-3 my-2">
                  <h4 className=" text-center text-2xl font-semibold font-serif">
                    Karen Blevins
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
                  src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/chef-06.png"
                  alt=""
                  className=" shadow bg-orange-50"
                />
                <div className=" flex flex-col gap-3 my-2">
                  <h4 className=" text-center text-2xl font-semibold font-serif">
                    Jacquelyn
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
                  src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/chef-07.png"
                  alt=""
                  className=" shadow bg-orange-50"
                />
                <div className=" flex flex-col gap-3 my-2">
                  <h4 className=" text-center text-2xl font-semibold font-serif">
                    Iris Scales
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
                  src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/chef-08.png"
                  alt=""
                  className=" shadow bg-orange-50"
                />
                <div className=" flex flex-col gap-3 my-2">
                  <h4 className=" text-center text-2xl font-semibold font-serif">
                    Wilbur Jayne
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
          <div className=" relative flex flex-col gap-5 justify-center items-center h-[300px] md:h-[600px]  overflow-hidden">
            <div className=" z-50 flex flex-col md:gap-5 justify-center items-center">
              <h2 className=" text-3xl md:text-5xl text-white font-serif">
                Welcome To Luxury
                <span className=" block text-center text-white font-serif">
                  Restaurant
                </span>
              </h2>
              <p className=" w-[50%] text-sm md:text-base text-center text-white">
                The Gage Hotel offers unforgettable food and drink options. A
                memorable stay with delicious breakfast Join us in celebrating
                the new year with a little special surprise from our end.
              </p>
              <button className=" px-3 md:px-6 py-2 uppercase border flex gap-3 items-center  border-white">
                <span className="text-white"> Reserve Now </span>
                <div className="text-white">
                  <BsArrowUpRight />
                </div>
              </button>
            </div>
            <img
              src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/hero-bg-2.jpg"
              alt=""
              className=" absolute top-0 left-0 w-screen h-[300px] md:h-[600px]"
            />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" className="">
          <div className=" flex flex-col gap-5 justify-center items-center md:h-[600px] my-10">
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

                    <Link className="">
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

                    <Link className="">
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
      </div>
    </>
  );
}

export default Chef


