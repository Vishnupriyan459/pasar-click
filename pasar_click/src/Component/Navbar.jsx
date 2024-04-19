import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex  flex-col   p-7 md:flex-row justify-between content-center'>
      <div>
        <img src="Asset\nav\Icon.svg" alt="Pasar Click" />
      </div>
      
      {/* Conditionally change flex direction to column on small screens */}
      <div className='grid grid-cols-6 content-center gap-8'>
        <div className='m-auto rounded-full w-14 rounded-full bg-[#E5FAE6] p-5'>
          <img src="Asset\nav\search.svg" alt=""/>
        </div>
        <div className='m-auto rounded-full w-14 rounded-full bg-[#E5FAE6] p-5 relative'>
          <img src="Asset\nav\shopping-basket.svg" alt="" />
          <div className='bg-[#364A15] text-center rounded-full absolute px-2 top-0 right-0 text-[#f8fafc]'>1</div>
        </div>
        <div className='m-auto rounded-full w-14 rounded-full bg-[#E5FAE6] p-5'>
          <img src="Asset\nav\delivery-tracking.svg" alt="" />
        </div>
        <div className='m-auto rounded-full w-14 rounded-full bg-[#E5FAE6] p-5'>
          <img src="Asset\nav\pack.svg" alt="" />
        </div>
        <div className='m-auto rounded-full w-14 rounded-full bg-[#E5FAE6] p-5'>
          <img src="Asset\nav\chat-bot.svg" alt="" />
        </div>
        <div className='m-auto rounded-full w-14 rounded-full bg-[#E5FAE6] p-5'>
          <img src="Asset\nav\login.svg" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
