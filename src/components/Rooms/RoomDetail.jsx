import { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineShareAlt } from "react-icons/ai";
import { FaBaby, FaBed, FaRulerCombined, FaTshirt } from "react-icons/fa";
import { ImManWoman } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import { IoLocationSharp, IoPeople } from "react-icons/io5";
import { BsArrowUpRight } from "react-icons/bs";
import Navbar from "../Home/Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import AOS from "aos";

import Footer from "../Home/Footer";
// import "aos/dist/aos.css";

import "aos/dist/aos.css";


const RoomDetail = () => {
  const [openAdult, setOpenAdult] = useState(false);
  const [openChild, setOpenChild] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const [adult, setAdult] = useState("1 adult");
  const [child, setChild] = useState("1 child");
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

  const toggleDropdownAdult = () => {
    setOpenAdult(!openAdult);
  };

  const toggleDropdownChild = () => {
    setOpenChild(!openChild);
  };

  const adultHandler = (item) => {
    setAdult(item);
    setOpenAdult(false);
  };

  const childHandler = (item) => {
    setChild(item);

    setOpenChild(false);

  };

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform necessary actions with check-in/check-out dates
    console.log("Check-in date:", checkInDate);
    console.log("Check-out date:", checkOutDate);
  };

  return (
    <>
      {/* nav */}
      <Navbar />
      <div className=" bg-default h-full">
        <div className=" h-[200px] md:h-[400px] md:flex py-10 flex-col justify-center items-center">
          <h2 className=" font-semibold text-center text-2xl md:text-6xl mb-5 font-serif">
            Premiere Deluxe Room
          </h2>
          <p className=" text-sm text-center">{`Royel > Hotels > Bangkok > Premiere Deluxe Room`}</p>
        </div>
        <div className="md:grid grid-cols-3 gap-6 mx-7">
          <div className="col-span-2 w-full h-full flex flex-col gap-5 ">
            {/* Landing */}
            <div className="">
              <div data-aos="fade-up" data-aos-duration="3000" className="">
                <div className=" h-[200px] md:h-[400px] w-full overflow-hidden relative">
                  <img
                    src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/2.jpg"
                    alt=""
                    className=" left-0 bottom-0 w-full h-auto md:h-[500px] absolute "
                  />
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="3000" className="">
                <h3 className=" text-4xl tracking-wide my-5 font-serif">
                  Premiere Deluxe Room
                </h3>
                <p className=" tracking-wide my-5 leading-7">
                  No time to lose, next year is almost here. And a good plan
                  isn’t made overnight. How far are you with your targets,
                  budget, and plan of attack for next year? What REVPAR and
                  GOPPAR do you need to achieve? Is your plan for next year
                  complete, and does it describe all actions to get there?
                </p>
                <p className=" tracking-wide my-5 leading-7">
                  We begin 2023 with a jam-packed January, with stay, food, and
                  beverage offers across our hotels. We also welcome the newest
                  branch in the Lemon Tree
                  <span className="block mt-3">{` –Lemon Tree Hotel, Mukteshwar.`}</span>
                </p>
              </div>
            </div>
            {/* ul */}
            <div data-aos="fade-up" data-aos-duration="3000" className="">
              <div className="mx-5 my-5">
                <h4 className=" text-2xl font-serif my-5 font-serif">
                  Room Amenities
                </h4>
                <ul className=" list-disc md:grid grid-cols-3 gap-4">
                  <li>Work Desk</li>
                  <li>Bathtub</li>
                  <li>Balcony</li>
                </ul>
              </div>
              <hr />
              <div className="mx-5 my-5">
                <h4 className=" text-2xl font-serif my-5 font-serif">
                  Popular with Guests
                </h4>
                <ul className=" list-disc md:grid grid-cols-3 gap-4">
                  <li>Free Wi-Fi</li>
                  <li>Interconnected Room</li>
                  <li>Electric Kettle</li>
                  <li>Iron/Ironing Board</li>
                  <li>24-Hour Room Service</li>
                  <li>Daily Housekeeping</li>
                  <li>Bathroom</li>
                  <li>24-Hour In-Room Dining</li>
                  <li>Laundry Service</li>
                  <li>Air Conditioning</li>
                  <li>Mineral Water</li>
                  <li>Balcony</li>
                </ul>
              </div>
              <hr />
              <div className="mx-5 my-5">
                <h4 className=" text-2xl font-serif my-5 font-serif">
                  Room Features
                </h4>
                <ul className=" list-disc md:grid grid-cols-3 gap-4">
                  <li>Telephone</li>
                  <li>Closet</li>
                  <li>Minibar</li>
                  <li>Mirror</li>
                  <li>Clothes Rack</li>
                  <li>Blackout Curtains</li>
                </ul>
              </div>
              <hr />
              <div className="mx-5 my-5">
                <h4 className=" text-2xl font-serif my-5 font-serif">
                  Beds and Blanket
                </h4>
                <ul className=" list-disc md:grid grid-cols-3 gap-4">
                  <li>Pillows</li>
                  <li>Lectric/Woollen Blanket</li>
                </ul>
              </div>
              <hr />
              <div className="mx-5 my-5">
                <h4 className=" text-2xl font-serif my-5 font-serif">
                  Food and Drinks
                </h4>
                <ul className=" list-disc md:grid grid-cols-3 gap-4">
                  <li>Free Drinks</li>
                  <li>Free Snacks</li>
                </ul>
              </div>
              <hr />
              <div className="mx-5 my-5">
                <h4 className=" text-2xl font-serif my-5 font-serif">
                  Safety and Security
                </h4>
                <ul className=" list-disc md:grid grid-cols-3 gap-4">
                  <li>Cupboards With Locks</li>
                  <li>Electronic Safe</li>
                  <li>Safety</li>
                  <li>Smoke Alarm</li>
                  <li>24/7 Fire Services</li>
                  <li>24/7 Cc Tv Camera</li>
                </ul>
              </div>
              <hr />
              <div className="mx-5 my-5">
                <h4 className=" text-2xl font-serif my-5 font-serif">
                  Media and Entertainment
                </h4>
                <ul className=" list-disc md:grid grid-cols-3 gap-4">
                  <li>TV</li>
                  <li>In-Room DVD Player</li>
                </ul>
              </div>
              <hr />
              <div className="mx-5 my-5">
                <h4 className=" text-2xl font-serif my-5 font-serif">
                  Bathroom
                </h4>
                <ul className=" list-disc md:grid grid-cols-3 gap-4">
                  <li>Hairdryer</li>
                  <li>Slippers</li>
                  <li>Toiletries</li>
                  <li>Towels</li>
                  <li>Bathrobes</li>
                  <li>Hot & Cold Water</li>
                  <li>Shower</li>
                  <li>Weighing Scale</li>
                  <li>Emergency Cord</li>
                </ul>
              </div>
              <hr />
              <div className="mx-5 my-5">

                <h4 className=" text-2xl font-serif my-5 ">Other Facilities</h4>

                <h4 className=" text-2xl font-serif my-5 ">
                  Other Facilities
                </h4>

                <ul className=" list-disc md:grid grid-cols-3 gap-4">
                  <li>Mosquito Net</li>
                  <li>Terrace</li>
                  <li>Alarm Clock</li>
                  <li>Security</li>
                  <li>Kettle</li>
                </ul>
              </div>
              <hr />
            </div>
            <div data-aos="fade-up" data-aos-duration="3000" className="">
              <div className="mx-5 my-5">
                <h4 className=" text-2xl font-serif my-5 font-serif">
                  Available Rooms
                </h4>
                <table className="table-auto w-full">
                  <thead>
                    <tr className=" grid grid-cols-none md:grid-cols-12 bg-orange-100 py-2 text-left px-2">
                      <th className=" inline md:col-span-5 text-xl ">
                        Room Details
                      </th>
                      <th className=" hidden md:inline md:col-span-2 text-xl">
                        Pax
                      </th>
                      <th className="hidden md:inline md:col-span-2 text-xl">
                        Price
                      </th>
                      <th className="hidden md:inline md:col-span-3 text-xl">
                        Select Rooms
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="grid grid-cols-none md:grid-cols-12 gap-5">
                      <td className="col-span-5 text-xl my-3 flex flex-col gap-5 mx-3 ">
                        <p className=" text-xl">Double Bed Room</p>
                        <div className="flex gap-2 items-center">
                          <FaRulerCombined className="text-2xl bg-orange-100 p-1" />
                          <p className="mb-2">400x400sft</p>
                          <FaBed className="text-2xl bg-orange-100 p-1" />
                        </div>
                        <p>Amenities</p>
                        <FaTshirt />
                      </td>
                      <td className="col-span-2 text-xl flex flex-col justify-center items-center gap-5">
                        <div className="flex gap-3">
                          <div className=" p-2 border border-slate-400 rounded">
                            <ImManWoman />
                          </div>
                          <p>x3</p>
                        </div>
                        <div className="flex gap-3">
                          <div className=" p-2 border border-slate-400 rounded">
                            <FaBaby />
                          </div>
                          <p>x2</p>
                        </div>
                      </td>
                      <td className="col-span-2 flex flex-col gap-2 text-base justify-center items-center">
                        <p className="text-xl">$399.00</p>
                        <p> per Night</p>
                      </td>
                      <td className="col-span-3 text-xl flex justify-center items-center">
                        <button className=" px-6 py-3 bg-orange-100 rounded text-base">
                          Check Availability
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className=" col-span-1 bg-default h-full flex flex-col gap-5">
            <div data-aos="fade-up" data-aos-duration="3000" className="">
              <div className="flex justify-center items-center bg-orange-100 border shadow text-center py-5 gap-3">
                <AiOutlineShareAlt className=" text-2xl font-semibold" />
                <button className="px-8 py-4 bg-black text-white text-xl">
                  Reserve Now
                </button>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className="">
              <div className="flex flex-col justify-center items-center bg-orange-100 border shadow text-center py-5 gap-3">
                <button className=" flex gap-2 items-center px-8 py-4 bg-black text-white text-xl uppercase">
                  <IoLocationSharp />
                  <p className=" text-white">Show on my map</p>
                </button>

                <div className=" relative">
                  <button
                    className=" flex gap-2 items-center px-12 md:px-24 rounded py-4 border bg-gray-100 text-default text-sm uppercase"
                    onClick={toggleDropdownAdult}
                  >
                    <div className="flex gap-3 items-center w-36 t">
                      <p className="">{adult}</p>
                      <IoIosArrowDown className="" />
                    </div>
                  </button>
                  {openAdult && (
                    <div className="absolute z-40 flex flex-col top-1 left-16 py-2 bg-gray-100 rounded-md uppercase">
                      <button

                        

                        className=" px-4 py-2 text-gray-800 hover:bg-orange-200 hover:text-gray-500"
                        onClick={() => adultHandler("1 adult")}
                      >
                        1 adult
                      </button>
                      <button

                        className=" px-4 py-2 text-gray-800 hover:bg-orange-200 hover:text-gray-500"
                        onClick={() => adultHandler("2 adults")}
                      >
                        2 adults
                      </button>
                      <button

                        className=" px-4 py-2 text-gray-800 hover:bg-orange-200 hover:text-gray-500"
                        onClick={() => adultHandler("3 adults")}
                      >
                        3 adults
                      </button>
                    </div>
                  )}
                </div>
                <div className=" relative">
                  <button
                    className=" flex gap-2 items-center px-12 md:px-24 rounded py-4 border bg-gray-100 text-default text-sm uppercase"
                    onClick={toggleDropdownChild}
                  >
                    <div className="flex gap-3 items-center w-36">
                      <p>{child}</p>
                      <IoIosArrowDown />
                    </div>
                  </button>
                  {openChild && (
                    <div className="absolute z-30 flex flex-col top-1 left-16 py-2 bg-gray-100 rounded-md uppercase">
                      <button

                        className=" px-4 py-2 text-gray-800 hover:bg-orange-200 hover:text-gray-500"
                        onClick={() => childHandler("1 Child")}
                      >
                        1 Child
                      </button>
                      <button

                        className=" px-4 py-2 text-gray-800 hover:bg-orange-200 hover:text-gray-500"
                        onClick={() => childHandler("2 Children")}
                      >
                        2 Children
                      </button>
                      <button

                        className=" px-4 py-2 text-gray-800 hover:bg-orange-200 hover:text-gray-500"
                        onClick={() => childHandler("3 Children")}
                      >
                        3 Children
                      </button>
                    </div>
                  )}
                </div>
                <form onSubmit={handleSubmit} className=" flex flex-col gap-5">
                  <div>
                    <label htmlFor="check-in-date">Check-in Date:</label>
                    <DatePicker
                      id="check-in-date"
                      selected={checkInDate}
                      onChange={handleCheckInDateChange}
                      dateFormat="yyyy-MM-dd"
                      minDate={new Date()}
                      required
                      placeholderText="Select Date"
                      className=" px-8 py-4"
                    />
                  </div>
                  <div>
                    <label htmlFor="check-out-date">Check-out Date:</label>
                    <DatePicker
                      id="check-out-date"
                      selected={checkOutDate}
                      onChange={handleCheckOutDateChange}
                      dateFormat="yyyy-MM-dd"
                      minDate={checkInDate || new Date()}
                      required
                      placeholderText="Select Date"
                      className=" px-8 py-4"
                    />
                  </div>
                  <div className="">
                    <button
                      className=" bg-black px-8 py-4 rounded text-white hover:bg-white hover:"
                      type="submit"
                    >
                      Booking Availability
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="3000" className="">
              <div className="flex flex-col items-start ps-20 bg-orange-100 border shadow text-center py-5 gap-7">
                <h4 className=" text-2xl font-serif">Queen Deluxe...</h4>
                <div className="flex gap-5">
                  <div className="flex items-center gap-2 text-slate-500">
                    <IoPeople />
                    <p>{adult}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <h5 className=" text-3xl">$899</h5>
                    <p className="text-slate-500">/NIGHT</p>
                  </div>
                </div>
                <div className="flex items-center gap-7">
                  <p className=" text-red-500">Non-Refundable</p>
                  <p>+$49 Taxes & Fees</p>
                </div>
                <div className=" border-t border-black">
                  <div className="flex flex-col text-center py-7 gap-7">
                    <ul className=" list-disc grid grid-cols-1 gap-4 py-5 text-start">
                      <li>1 King Bed Or 2 Twin Bed(S)</li>
                      <li>538 Sq.Ft</li>
                      <li>Garden View</li>
                    </ul>
                  </div>
                  <button className=" flex gap-2 rounded px-8 py-4 bg-black text-white text-md uppercase">
                    Pre Booking
                    <BsArrowUpRight />
                  </button>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="3000" className="">
              <div className="flex flex-col items-start ps-20 bg-orange-100 border shadow py-5 gap-7">
                <h4 className=" text-2xl font-serif">Extra Services</h4>
                <ul className=" list-disc grid grid-cols-1 gap-4 text-start">
                  <li>Room Cleaning</li>
                  <li>Evening Party Manage</li>
                  <li>Iron & Laundry</li>
                  <li>Spa & Message</li>
                </ul>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="3000" className="">
              <div className="flex flex-col items-start ps-20 bg-orange-100 border shadow py-5 gap-7">
                <h4 className=" text-2xl font-serif">Guest Reviews</h4>
                <h5 className=" text-slate-500 text-xl">No Review Available</h5>
                <button className=" flex gap-2 items-center rounded px-8 py-4 bg-black text-white text-md uppercase">
                  <AiOutlinePlus />
                  Add Review
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div data-aos="fade-up" data-aos-duration="3000" className="">
            <h5 className=" text-lg ms-10 my-5">AWESOME MOMENTS</h5>
            <h1 className=" ms-10 text-xl md:text-5xl my-5 font-serif">
              Photos By Guests
            </h1>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className="">
            <div className=" my-5">
              {isDesktop ? (
                <Swiper
                  spaceBetween={10}
                  slidesPerView={4}
                  loop={true}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <img
                      src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/5.jpg"
                      alt=""
                      className="  "
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/6.jpg"
                      alt=""
                      className="  "
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/1.jpg"
                      alt=""
                      className="  "
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/2-1.jpg"
                      alt=""
                      className="  "
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/3-1.jpg"
                      alt=""
                      className="  "
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/4.jpg"
                      alt=""
                      className="  "
                    />
                  </SwiperSlide>
                </Swiper>
              ) : (
                <Swiper
                  spaceBetween={5}
                  slidesPerView={1}
                  loop={true}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <img
                      src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/5.jpg"
                      alt=""
                      className=" "
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/6.jpg"
                      alt=""
                      className="  "
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/1.jpg"
                      alt=""
                      className="  "
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/2-1.jpg"
                      alt=""
                      className="  "
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/3-1.jpg"
                      alt=""
                      className="  "
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/4.jpg"
                      alt=""
                      className="  "
                    />
                  </SwiperSlide>
                </Swiper>
              )}
            </div>
          </div>
        </div>
        <div className=" my-10 mx-2 md:mx-20">
          <div data-aos="fade-up" data-aos-duration="3000" className="">
            <h2 className=" text-3xl  my-5 font-serif">FAQs</h2>
            <div className="collapse collapse-arrow bg-default">
              <input type="radio" name="my-accordion-2" checked="checked" />
              <div className="collapse-title text-lg md:text-3xl border-b border-slate-400 py-3 font-serif  font-medium">
                What Is Your Check-In And Check-Out Time?
              </div>
              <div className="collapse-content ">
                <p className=" py-2">
                  Our check-in time is 3:00 PM and check-out time is 12:00 PM.
                  Visit us you will never forget. A simple way a hotel can
                  package an experience could be to include a welcome note from
                  the hotel, some local items, and some personalized items that
                  are related.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-default">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg md:text-3xl border-b border-slate-400 py-3 font-serif  font-medium">
                When You Book Direct, You’ll Get The Lowest Price?
              </div>
              <div className="collapse-content ">
                <p>
                  Whether you are at home or away, world-class Four Seasons
                  property protects, secures, and maintains your residence for
                  you. Visit us you will never forget. A simple way a hotel can
                  package an experience could be to include a welcome note from
                  the hotel, some local items, and some personalized items that
                  are related.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-default">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg md:text-3xl border-b border-slate-400 py-3 font-serif  font-medium">
                Do You Offer Laundry And Ironing Services For Guests?
              </div>
              <div className="collapse-content ">
                <p>
                  Yes, we offer laundry and ironing services for an additional
                  fee. Please contact us for further details. Visit us you will
                  never forget. A simple way a hotel can package an experience
                  could be to include a welcome note from the hotel, some local
                  items, and some personalized items that are related.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-default">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg md:text-3xl border-b border-slate-400 py-3 font-serif  font-medium">
                Is There Wi-Fi Access Throughout The Hotel?
              </div>
              <div className="collapse-content ">
                <p>
                  Yes, we provide free Wi-Fi access throughout the hotel and in
                  all guest rooms. Visit us you will never forget. A simple way
                  a hotel can package an experience could be to include a
                  welcome note from the hotel, some local items, and some
                  personalized items that are related.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-default">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg md:text-3xl border-b border-slate-400 py-3 font-serif  font-medium">
                Get A Free Night Starting At Just 7,500 Points.
              </div>
              <div className="collapse-content ">
                <p>
                  Whether you are at home or away, world-class Four Seasons
                  property management protects, secures and maintains your
                  residence for you. Visit us you will never forget. A simple
                  way a hotel can package an experience could be to include a
                  welcome note from the hotel, some local items, and some
                  personalized items that are related.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" className="">
          <div className="my-10 mx-5 md:mx-20">
            <h2 className=" text-3xl  my-5 font-serif">
              Hotel Terms & Conditions
            </h2>
            <ul className=" list-disc flex flex-col gap-5 ">
              <li>
                Hotel Standard Check-in time is 1400 hours IST and check-out
                time is 1200 hours.
              </li>
              <li>
                Early check-in and late check-out are available on subject to
                availability.
              </li>
              <li>
                Individual Cancellation, No-Show and Amendment Policy:
                Cancellation made 3 days prior to the arrival date shall not
                incur any cancellation charges ‘beyond 1-night retention
                charges’ will be applicable.
              </li>
              <li>
                Group Cancellation (5 rooms and above): Group cancellation made
                25 days prior to the arrival date shall incur cancellation
                charges ‘beyond 100% will be charged through length of stay.
              </li>
              <li>
                All standard policies pertaining to hotel/ hospitality industry
                are applicable, when specific reservation policy is not
                mentioned in the “Reservation Confirmation” document.
              </li>
            </ul>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" className="">
          <div className="my-10 mx-5 md:mx-20">
            <h2 className=" text-3xl  my-5 font-serif">PAYMENT TERMS POLICY</h2>
            <ul className=" list-disc flex flex-col gap-5 ">
              <li>
                A pre-authorisation will be taken on your credit card under the
                name booking is made for the total stay on your arrival. Early
                check-in and late check-out are chargeable as per the Hotel
                policy. It is mandatory for guests to present valid photo
                identification at the time of check-in. Such documents can be
                either an Indian Aadhaar Card, Indian Driver’s License, Indian
                Voter ID card or Indian or International passport.
              </li>
              <li>
                Payment can be made using the credit card, payment gateway link,
                deposit in the bank account or demand draft before the due date.
              </li>
              <li>
                Applicable Taxes – Taxes are as applicable at the time of
                reservation.
              </li>
              <li>
                An extension of stay at the Hotel is liable to be offered at
                rate/offer applicable at the time the extension request is made.
                In case, the original offer at which the reservation was booked
                has expired at that time, the hotel is not liable to offer a
                room at the original rates but at current rates on offer.
              </li>
              <li>
                Certain privileged booking rates or special offers are not
                eligible for cancellation, refund or any change. The Customer is
                therefore advised to check the room description and any such
                conditions carefully prior to making a booking. The hotel shall
                not be liable to cancel or refund any monies or alter any
                bookings if the booking is made under such privileged booking
                rates or special offers.
              </li>
              <li>
                Upon cancellation of booking, the refund of the booking amount
                will be initiated. The booking amount after deduction of
                cancellation charges and taxes, as applicable, will be credited
                into the bank account of the Customer using the same payment
                mode by which the booking was made by the Customer.
              </li>
              <li>
                In case the booking amount is paid using credit card, the refund
                will be processed on the credit card.
              </li>
            </ul>
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

export default RoomDetail;
