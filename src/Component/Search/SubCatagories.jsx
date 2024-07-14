import {React,useState} from 'react'

const SubCatagories = () => {
  const [Activebtn,setActivebtn]=useState(null);
   const handlebtn=(btn)=>{
    setActivebtn(btn);
   }
  return (
    <div className='flex flex-wrap items-center gap-2 tablet:gap-4 text-[15px] leading-[26px]'>
      <div className='bg-[#E6E6DD] w-[38px] h-[38px] rounded-full flex justify-center items-center hover:bg-[#E5FAE6]'>
        <img src="/Asset/Search/filter.svg" alt="" />
      </div>
      <div className='flex justify-between px-3 bg-[#E6E6DD] w-[75px] h-[30px] text-[7.5px] tablet:w-[140px] tablet:h-[48px] tablet:text-[15px] rounded-full items-center hover:bg-[#E5FAE6]'>
        <div>Sort By</div>
        <img src="/Asset/Search/downvec.svg" alt="" className='w-[7px] h-[4px] tablet:w-[14px] h-[8px]'/>
      </div>
      <div className="flex self-center mx-2 hidden tablet:block">
        <div className="border-l border-solid border-black h-10 tablet:h-[2.5rem] Ldesktop:h-[5rem]"></div>
      </div>
      <div className={`flex justify-center w-[75px] h-[30px] text-[7.5px] tablet:w-[140px] tablet:h-[48px] tablet:text-[15px] px-auto ${Activebtn === "Fast" ? "bg-[#E5FAE6]" : "bg-[#E6E6DD]"} rounded-full items-center flex-shrink-0 hover:bg-[#E5FAE6]`} onClick={() => handlebtn("Fast")}>Fast Delivery</div>
      <div className={`flex justify-center w-[75px] h-[30px] text-[7.5px] tablet:w-[140px] tablet:h-[48px] tablet:text-[15px] px-auto ${Activebtn === "New" ? "bg-[#E5FAE6]" : "bg-[#E6E6DD]"} rounded-full items-center flex-shrink-0 hover:bg-[#E5FAE6]`} onClick={() => handlebtn("New")}>New on pasar</div>
      <div className={`flex justify-center w-[75px] h-[30px] text-[7.5px] tablet:w-[140px] tablet:h-[48px] tablet:text-[15px] px-auto ${Activebtn === "Fresh" ? "bg-[#E5FAE6]" : "bg-[#E6E6DD]"} rounded-full items-center flex-shrink-0 hover:bg-[#E5FAE6]`} onClick={() => handlebtn("Fresh")}>Fresh Fruits</div>
      <div className={`flex justify-center w-[75px] h-[30px] text-[7.5px] tablet:w-[140px] tablet:h-[48px] tablet:text-[15px] px-auto ${Activebtn === "Meats" ? "bg-[#E5FAE6]" : "bg-[#E6E6DD]"} rounded-full items-center flex-shrink-0 hover:bg-[#E5FAE6]`} onClick={() => handlebtn("Meats")}>Meats</div>
      <div className={`flex justify-center w-[75px] h-[30px] text-[7.5px] tablet:w-[140px] tablet:h-[48px] tablet:text-[15px] px-auto ${Activebtn === "Veg" ? "bg-[#E5FAE6]" : "bg-[#E6E6DD]"} rounded-full items-center flex-shrink-0 hover:bg-[#E5FAE6]`} onClick={() => handlebtn("Veg")}>Vegetables</div>
      <div className={`flex justify-center w-[75px] h-[30px] text-[7.5px] tablet:w-[140px] tablet:h-[48px] tablet:text-[15px] px-auto ${Activebtn === "Off" ? "bg-[#E5FAE6]" : "bg-[#E6E6DD]"} rounded-full items-center flex-shrink-0 hover:bg-[#E5FAE6]`} onClick={() => handlebtn("Off")}>Offers</div>
    </div>
  )
}

export default SubCatagories