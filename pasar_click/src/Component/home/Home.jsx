import React, { useState } from 'react';
import { BsFilterCircle } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import { LiaFireAltSolid } from "react-icons/lia";
import NearbyShop from './NearbyShop';
import FeaturedProducts from './FeaturedProducts'
import './Home.css';
const Home = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (button) => {
    setActiveButton(button);
  };
  

  return (
    <>
      <div className="flex flex-row justify-center">
        <div className="flex flex-row justify-center items-center w-[18rem] h-[3.7rem] rounded-full m-1 bg-[lightgreen] ">
          <BsFilterCircle />
          <p className="ml-2">Browse All Categories</p>
          <FaAngleDown className="ml-2" />
        </div>

        <div className="flex self-center">
          <div className="border-l border-solid border-black h-10"></div>
        </div>

        <div className="flex flex-row justify-around gap-1">
          <div
            className={`flex flex-row justify-center items-center w-[12rem] h-[3.7rem] rounded-full m-1 ${
              activeButton === "Hot Deals" ? "bg-[#F2EBD9]" : "bg-[lightgreen]"
            } cursor-pointer`}
            onClick={() => handleClick("Hot Deals")}
          >
            <LiaFireAltSolid />
            <p>Hot Deals</p>
          </div>
          <div
            className={`flex flex-row justify-center items-center w-[12rem] h-[3.7rem] rounded-full m-1 ${
              activeButton === "Home" ? "bg-[#F2EBD9]" : "bg-[lightgreen]"
            } cursor-pointer`}
            onClick={() => handleClick("Home")}
          >
            <p>Home</p>
          </div>
          <div
            className={`flex flex-row justify-center items-center w-[12rem] h-[3.7rem] rounded-full m-1 ${
              activeButton === "Shop" ? "bg-[#F2EBD9]" : "bg-[lightgreen]"
            } cursor-pointer`}
            onClick={() => handleClick("Shop")}
          >
            <p>Shop</p>
          </div>
          <div
            className={`flex flex-row justify-center items-center w-[12rem] h-[3.7rem] rounded-full m-1 ${
              activeButton === "Vender" ? "bg-[#F2EBD9]" : "bg-[lightgreen]"
            } cursor-pointer`}
            onClick={() => handleClick("Vender")}
          >
            <p>Vender</p>
          </div>
        </div>
      </div>
      {/* home banner */}

      <div className=" flex justify-center p-10">
        <div className="overflow-hidden flex flex-row gap-4  w-[90%] h-[450px]  relative ">
          <div className="w-[70%] bg-[#D8EBE5] rounded-lg relative">
            <div className="z-[2]  absolute top-0 right-10">
              <img
                src="Asset/home/pngwing-1.svg"
                className=" z-[2] object-cover w-full h-full"
              />
            </div>
            <div className="z-[2] absolute top-0 right-0 ">
              <img
                src="Asset/home/pngwing.svg"
                className="z-[2] object-cover w-full h-full"
              />
            </div>

            <div className="  flex flex-col m-9 relative" style={{ zIndex: 3 }}>
              <div className="flex flex-col ">
                <h1 className="text-[#364A15] text-[60px] font-[700] font-[Lufga] leading-[78.31px]">
                  Fresh Vegetables <br />
                  Big discount
                </h1>
                <p className="text-[#364A15] text-[20px] font-[500] font-[Lufga] leading-[26.1px]">
                  Search for your product
                </p>
              </div>
              <div>
                <form className="z-3 flex justify-between p-2 bg-[#FFFFFF] content-center w-3/4 rounded-full mt-8">
                  <input
                    type="text"
                    placeholder="Enter your delivery location"
                    className="ps-5 flex-grow"
                    style={{
                      border: "none",
                      outline: "none",
                    }}
                  />

                  <button className="rounded-full p-2 bg-[#3BB77E] text-white hover:bg-[#079755]">
                    Order Now !
                  </button>
                </form>

                <div className="font-poppins  text-[16px]">
                  <p className="text-[18px] font-semibold">
                    Popular states in Malaysia
                  </p>
                  <div className="flex  justify-evenly w-1/2 mt-5 ">
                    <p>Selangor</p>
                    <p>Johor</p>
                    <p>Penang</p>
                    <p>Sarawak</p>
                    <p>Sabah</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="z-1 absolute bottom-5 flex gap-2 justify-center opacity-50 mx-auto w-full">
              <div className="w-3 border-2 border-zinc-950 rounded-full h-2 bg-[#000000]"></div>
              <div className="w-3 border-2 border-gray-800 rounded-full h-2 bg-[#ffffff]"></div>
              <div className="w-3 border-2 border-gray-800 rounded-full h-2 bg-[#ffffff]"></div>
            </div>
          </div>
          <div className="w-[30%] bg-[#F2EBD9] relative rounded-lg font-[Lufga] px-4 py-6">
            <img
              src="Asset/home/pngwing-3.svg"
              className="z-0 absolute bottom-[-5.5rem] right-[-1] w-full h-full"
            />
            <div className="text-[#364A15] text-[40px] font-[600] leading-[52px] relative z-[2]">
              Delivery to your{" "}
              <span className="text-[#364A1580] opacity-80">HOME</span>
            </div>
            <button className="mt-8 border-[0.72px] border-black rounded-full w-[7.93rem] h-[3.06rem] relative z-[2]">
              shop now
            </button>
          </div>
        </div>
      </div>
      {/* three catgories */}
      <div className=" flex justify-around  w-[90%] mx-auto my-[3rem]">
        <div className="bg-[#D8EBE5] rounded-xl relative px-4 py-6 w-[420px] h-[250px] ">
          <div className="z-2">
            <h1 className="text-[#364A15] text-[24px] font-[600] leading-[31px] w-[15vw]">Make your Breakfast Healthy and Easy</h1>
            <button className="mt-6 border-[0.72px] border-black rounded-full w-[6.93rem] h-[2.06rem] relative z-[2]">Shop now</button>
          </div>
          <img src="Asset/home/veg.svg"  className="z-[1] absolute bottom-0 right-0"/>
        </div>
        <div className="bg-[#F2EBD9] rounded-xl relative px-4 py-6 w-[420px] h-[250px] ">
          <div className="z-1">
            <h1 className="text-[#364A15] text-[24px] font-[600] leading-[31px] w-[15vw]">Everyday Fresh & Clean with Our Product</h1>
            <button className="mt-6 border-[0.72px] border-black rounded-full w-[6.93rem] h-[2.06rem] relative z-[2]">Shop now</button>
          </div>
          <img src="Asset/home/meat.svg" className="z-[2] absolute bottom-[0] right-[-10vh]"/>
        </div>
        <div className="bg-[#D8EBE5] rounded-xl relative px-4 py-6 w-[420px] h-[250px] ">
          <div className="z-2">
            <h1 className="text-[#364A15] text-[24px] font-[600] leading-[31px] w-[15vw]">The best Organic Product Online</h1>
            <button className="mt-6 border-[0.72px] border-black rounded-full w-[6.93rem] h-[2.06rem] relative z-[2]">Shop now</button>
          </div>
          <img src="Asset/home/organic.svg" className="z-[1] absolute bottom-[0] right-[-10vh]"/>
        </div>
      </div>
      {/* near by shop */}
      
      <NearbyShop />
      {/* FeaturedProducts */}
      <FeaturedProducts />
    

    </>
  );
};

export default Home;
