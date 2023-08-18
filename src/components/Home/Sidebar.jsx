import { motion } from "framer-motion";
import {
  BsFacebook,
  BsPlus,
  BsSearch,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { AiTwotonePhone } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
// eslint-disable-next-line react/prop-types
const Sidebar = ({ setShowSidebar }) => {
  return (
    <>
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: "350px" }}
        exit={{ x: "350px" }}

        className=" w-full md:w-[400px] z-30 h-screen bg-default fixed top-0 p-5 right-0 overflow-auto"
      >
        <div className="flex w-96 items-center justify-start gap-28 gap">
          <img
            src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/logo.png"
            alt=""
            className="w-[200px]"
          />
          <button
            className="hover:rotate-90 duration-150 p-2"
            onClick={() => setShowSidebar(false)}
          >
            <GrClose className="text-3xl" />
          </button>
        </div>
        {/* search  */}
        <div className="flex my-5 border-b-[1px] border-slate-400 bg-default">
          <input
            type="text"
            className=" outline-none bg-default text-slate-600"
          />
          <button className="p-2">
            <BsSearch />
          </button>
        </div>
        {/* nav link  */}
        <div className="mt-5">
          <Link className="flex py-2 border-b-[1px] border-slate-300 items-center justify-between" to='/'>
            <span className=" hover:text-yellow-500">HOME</span>
            {/* <BsPlus className="text-xl" /> */}
          </Link>
          <Link className="flex py-2 border-b-[1px] border-slate-300 items-center justify-between" to={'/room'}>
            <span className=" hover:text-yellow-500">ROOMS</span>
            {/* <BsPlus className="text-xl" /> */}
          </Link>
          <Link className="flex py-2 border-b-[1px] border-slate-300 items-center justify-between" to='/shop'>
            <span className=" hover:text-yellow-500">SHOP</span>
            {/* <BsPlus className="text-xl" /> */}
          </Link>
          <Link className="flex py-2 border-b-[1px] border-slate-300 items-center justify-between">
            <span className=" hover:text-yellow-500">PAGES</span>
            {/* <BsPlus className="text-xl" /> */}
          </Link>
          <Link className="flex py-2 border-b-[1px] border-slate-300 items-center justify-between">
            <span className=" hover:text-yellow-500">BLOG</span>
            <BsPlus className="text-xl" />
          </Link>
          <Link to={`/contact`} className="flex py-2 items-center justify-between">
            <span className=" hover:text-yellow-500 text-lg">
              Contact
            </span>
          </Link>
        </div>
        {/* About  */}
        {/* <div className="mt-7">
          <p className="text-2xl my-3 font-normal">About Royal Hotel</p>
          <p className="font-light">
            Experience legendary service in the heart of royel. The new
            generation of luxury. A Haven of Comfort and Elegance in royel
          </p>
        </div> */}
        {/* contact info  */}

        <div className="mt-5">
          <h2 className="text-xl">Contact Info</h2>
          <div className=" mt-3 flex flex-col gap-3">
            <Link className="flex items-center justify-start gap-5">
              <button className="p-2 border-[1px] rounded-full hover:border-slate-800 border-yellow-500">
                <CiLocationOn className="text-xl text-yellow-500 hover:text-slate-800" />
              </button>
              <p className=" hover:text-yellow-500">
                12/A, Mirnada City Tower, NYC
              </p>
            </Link>
            <Link className="flex items-center justify-start gap-5">
              <button className="p-2 border-[1px] rounded-full hover:border-slate-800 border-yellow-500">
                <AiTwotonePhone className="text-xl text-yellow-500 hover:text-slate-800" />
              </button>
              <p className=" hover:text-yellow-500">088889797697</p>
            </Link>
            <Link className="flex items-center justify-start gap-5">
              <button className="p-2 border-[1px] rounded-full hover:border-slate-800 border-yellow-500">
                <HiMail className="text-xl text-yellow-500 hover:text-slate-800" />
              </button>
              <p className=" hover:text-yellow-500">support@mail.com</p>
            </Link>
          </div>
        </div>

        <hr className="my-10" />
        <div className="flex items-center justify-center gap-5">
          <Link className="">
            <button className="p-2 border-[1px]  border-slate-400 rounded-full hover:bg-yellow-600">
              <BsFacebook className="text-xl" />
            </button>
          </Link>
          <Link className="">
            <button className="p-2 border-[1px] border-slate-400 rounded-full hover:bg-yellow-600">
              <BsYoutube className="text-xl" />
            </button>
          </Link>
          <Link className="">
            <button className="p-2 border-[1px] border-slate-400 rounded-full hover:bg-yellow-600">
              <BsTwitter className="text-xl" />
            </button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
