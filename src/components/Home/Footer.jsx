import { BsArrowUpRight, BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" grid md:grid-cols-10 gap-10 px-5 py-5 md:py-20 bg-gray-800 h-full border-b border-slate-500">
        <div className=" flex flex-col col-span-3 gap-5 md:gap-10 ">
          <h4 className=" text-white text-lg md:text-3xl font-serif">
            About Us
          </h4>
          <p className=" text-white text-sm leading-6">
            Welcome to our Royel Hotel. We are provided luxury room for you. It
            was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages.
          </p>
          <div className=" flex gap-5 justify-start">
            <button className="bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
              <BsFacebook />
            </button>
            <button className="bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
              <BsTwitter />
            </button>
            <button className="bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
              <BsLinkedin />
            </button>
            <button className="bg-stone-300 shadow-sm px-2 py-2 rounded-full mx-2 hover:bg-black">
              <BsYoutube />
            </button>
          </div>
        </div>
        <div className=" flex flex-col col-span-2 gap-5 md:gap-10">
          <h4 className=" text-white text-lg md:text-3xl font-serif">
            Useful Link
          </h4>
          <div className=" flex flex-wrap md:flex-col gap-5 md:gap-2">
            <p className=" text-white font-serif">About Us</p>
            <Link to={"/room"}>
              <p className=" text-white font-serif">Rooms</p>
            </Link>
            <Link to={"/home"}>
              <p className=" text-white font-serif">Main Services</p>
            </Link>
            <p className=" text-white font-serif">FAQ</p>
            <p className=" text-white font-serif">Book Your Room</p>
            <p className=" text-white font-serif">Get In Touch</p>
          </div>
        </div>
        <div className=" flex flex-col col-span-2 gap-5 md:gap-10 ">
          <h4 className=" text-white text-lg md:text-3xl font-serif">
            Contact Us
          </h4>
          <div className=" flex flex-col gap-3">
            <p className=" text-white font-serif">
              Via Giovanni Augustariccio, 33 Amalfi, 84011 SA, Dubai, UAE
            </p>
            <p className=" text-white font-serif">(+91) 23650003</p>
            <p className=" text-white font-serif">info@theroyelpalace.com</p>
          </div>
        </div>
        <div className="flex flex-col col-span-3 gap-5 md:gap-10">
          <h4 className="text-white text-lg md:text-3xl font-serif">
            Newsletter
          </h4>
          <p className=" text-white font-serif">
            Subscribe us to get our hotel offer, latest update & news.
          </p>

          <div className=" input-group">
            <input
              type="email"
              className=" px-4 py-2 md:py-4 border border-slate-500 bg-transparent text-white"
              placeholder="Your Email"
            />
            <button className="px-4 md:py-4 border border-orange-200 bg-orange-200">
              <BsArrowUpRight />
            </button>
          </div>
        </div>
      </div>
      <div className=" px-5 py-4 bg-gray-800 h-full">
        <p className=" text-white text-center font-serif">
          &copy; 2023 Team-L Workshop All Rights Reserved
        </p>
      </div>
    </>
  );
}

export default Footer