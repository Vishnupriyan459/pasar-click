import {React}from "react";
const DailyBestSellBanner = () => {
  
  return (
    <div className={`bg-DailySales-bg bg-cover bg-center w-[270px] Lmobile:w-[331.83px] rounded-xl bg-[#D4D4D430] ml-2 flex flex-col   h-[466px] relative`}>
      
      <div className="w-3/4  mx-3 mt-[5rem] text-[36px] font-[600] leading-[46.99px]">
        Bring nature to your home
      </div>
      <div className=" w-[340px] Lmobile:w-[396.46px] h-[263.21px] absolute bottom-0 -left-10">
        <img src="/Asset/Dailysales/dailysalesbanner.svg" className=" w-full h-full "/>
      </div>
    </div>
  )
}


export default DailyBestSellBanner;