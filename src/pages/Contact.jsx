// import React from 'react'
import Navbar from '../components/Home/Navbar'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {FaStarOfLife,FaStar} from 'react-icons/fa'
import { BsArrowUpRight } from 'react-icons/bs'

const Contact = () => {
  // EEC78C
  return (
    <div>
      <Navbar />
      <div className=" w-screen">
        <div className=" flex flex-col justify-center items-center p-20 gap-8">
          <h1 className=' text-4xl md:text-[65px]'>Contact</h1>
            <ul>
              <li className=' text-xl flex items-center'>
                <span className=' cursor-pointer hover:text-[#EEC78C] duration-300'>Royal</span>
                  <MdKeyboardArrowRight />
                <span>Contact</span>
              </li>
            </ul>
        </div>
        <section>
          <div className=" grid grid-cols-1 mb-32 lg:grid-cols-2 gap-5 p-10 ">
            {/* form */}
            <div className=" border p-2 flex flex-col items-center justify-center">
                <h3 className=' p-5 text-xl md:text-4xl mb-5'>Contact Us Right Here</h3>
                <div className="">
                  <form className=''>
                    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="">
                          <div className="">
                            <label htmlFor="" className=' flex text-xl text-gray-600'>Name <FaStarOfLife className=' text-[#FF0000] text-[10px]' /> </label>
                            <input type="text" placeholder='Your Name' className=' md:text-xl outline-none border border-[#EEC78C] px-5 md:px-10 rounded py-5 mt-4 mb-8' />
                          </div>
                        </div>
                        <div className="">
                          <div className="">
                            <label htmlFor="" className=' flex text-xl text-gray-600'>Email <FaStarOfLife className=' text-[#FF0000] text-[10px]' /> </label>
                            <input type="email" placeholder='Your Email' className=' outline-none border border-[#EEC78C] px-5 md:px-10 md:text-xl rounded py-5 mt-4 mb-8' />
                          </div>
                        </div>
                        <div className="">
                          <div className="">
                            <label htmlFor="" className=' flex text-xl text-gray-600'>Phone <FaStarOfLife className=' text-[#FF0000] text-[10px]' /> </label>
                            <input type="text" placeholder=' Your Phone' className=' outline-none border border-[#EEC78C] px-5 md:px-10 md:text-xl rounded py-5 mt-4 mb-8' />
                          </div>
                        </div>
                        <div className="">
                          <div className="">
                            <label htmlFor="" className=' flex text-xl text-gray-600'>Subjects <FaStarOfLife className=' text-[#FF0000] text-[10px]' /> </label>
                            <input type="text" placeholder='Your Subjects' className=' outline-none border border-[#EEC78C] px-5 md:px-10 md:text-xl rounded py-5 mt-4 mb-8' />
                          </div>
                        </div>
                        <div className="">
                          <div className="">
                            <label htmlFor="" className=' flex text-xl text-gray-600'>Comments <FaStarOfLife className=' text-[#FF0000] text-[10px]' /> </label>
                            {/* <input type="text"  /> */}
                            <textarea className=' w-56 outline-none border border-[#EEC78C] px-10 md:text-xl rounded py-5 mt-4 mb-8' placeholder='Message' name="" id="" cols="50" rows="8"></textarea>
                          </div>
                        </div>
                    </div>
                    <div className=" flex items-center md:text-xl">
                          <input type="checkbox" className=' w-16 h-8  cursor-pointer accent-black' />
                          <label className=' text-sm' htmlFor="">Save Your Data for Next Comments</label>
                    </div>
                   <button className="transition duration-500 ease-in-out mt-20 mb-10 ml-10 px-8 py-5 flex items-center gap-3 text-xl border border-black hover:border-none hover:bg-[#EEC78C] hover:text-black">SEND NOW <BsArrowUpRight /> </button>
                  </form>
                </div>
            </div>
            <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.188767404719!2d96.18895454502409!3d16.86655412151727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c193bf69c3aeeb%3A0xcefeaee48731458c!2sSepak%20Takraw%20Factory!5e0!3m2!1sen!2smm!4v1679830505158!5m2!1sen!2smm"
              className="w-full h-full mt-5"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
          </div>
        </section>
        {/* Review Secton */}
        <section>
          <div className="" style={{backgroundImage:`url('https://envato.bdevs.net/royel/wp-content/uploads/2023/05/testimonial-bg.jpg')`}}>
            <div className="">
              <div className="lg:flex text-white justify-between p-10 md:pt-40 md:px-32">
                  <div className="">
                    <h1 className=' text-md md:text-xl tracking-wider'>TESTMONIALS</h1>
                    <p className=' my-10 text-lg md:text-5xl tracking-wider'>What Our Customers Are Saying</p>
                  </div>
                  <div className=" flex flex-col  text-xl font-bold gap-2 mt-10 group cursor-pointer">
                    <div className="flex items-center gap-4">
                        <span className=' text-sm md:text-md'>View All Review</span>
                        <BsArrowUpRight className=' group-hover:rotate-45 duration-500'/>
                    </div>
                    <p className="w-16 h-1 border-b-2 border-white bg-white duration-500 group-hover:w-44 w"></p>
                  </div>
              </div>
              {/* review Card */}
              <div className=" p-2 lg:p-32">
                {/* content */}
                <div className=" bg-white flex flex-col items-center">
                  <p className=' text-2xl text-gray-500 py-20 px-10'>Sweeply gives a real-time overview of the hotels, making it easy to organize the work and track progress. Information about what to do is clear</p>
                  <img className='' src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/user-1.jpg" alt="" />
                  <p className=' text-2xl font-bolder mt-10'>Elden Smith</p>
                  <span className=' text-xl text-gray-600 mt-4'>Operations Managers</span>
                  <div className=" flex gap-3 text-2xl text-[#FFC107] mb-5">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* don't know Section */}
        <section>
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 my-32">
            <div className=" bg-white -10">
              <img className=' h-[180px]' src="	https://envato.bdevs.net/royel/wp-content/uploads/2023/05/1-1.png" alt="" />
            </div>
            <div className=" bg-white -10">
              <img className=' h-[180px]' src="	https://envato.bdevs.net/royel/wp-content/uploads/2023/05/5.png" alt="" />
            </div>
            <div className=" bg-white -10">
              <img className=' h-[180px]' src="	https://envato.bdevs.net/royel/wp-content/uploads/2023/05/4.png" alt="" />
            </div>
            <div className=" bg-white -10">
              <img className=' h-[180px]' src="	https://envato.bdevs.net/royel/wp-content/uploads/2023/05/3-1.png" alt="" />
            </div>
            <div className=" bg-white -10">
              <img className=' h-[180px]' src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/1-1.png" alt="" />
            </div>
            <div className=" bg-white -10">
              <img className=' h-[180px]' src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/2-1.png" alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
