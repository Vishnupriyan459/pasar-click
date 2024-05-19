import React,{useState} from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const[showMenu, setShowMenu]=useState(false);
  return (
    <header style={
      {fontFamily:'Lufga',fontWeight:400}}>
    <nav className='flex flex-row justify-between px-2 w-full'>
      <div className='self-center'>
        <img src="Asset\nav\Icon.svg" alt="Pasar Click" className=''/>
      </div>
      <div className='md:hidden self-center '>
        
        <RxHamburgerMenu className='text-[2rem] opacity-60'  onClick={()=>{setShowMenu(!showMenu)}}/>
        
      </div>
      
      <div className='hidden md:grid grid-cols-6 content-center gap-8'>
          <div className=' rounded-full w-14 rounded-full bg-[#E5FAE6] p-5'>
            
            <img src="Asset\nav\search.svg" alt=""/>
            
          </div>
          <div className='rounded-full w-14 rounded-full bg-[#E5FAE6] p-5 relative'>
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
        {showMenu && (
          <div className='flex flex-col justify-center gap-5 bg-[#ffffff] w-full h-1/2 p-2  md:hidden '>
            <a href="#" className='flex justify-between p-1 hover:bg-[#E5FAE6] rounded-xl '>
              <p>Search</p>
              <img src="Asset\nav\search.svg" alt="" />
            </a>
            <a href="#" className='flex justify-between relative p-1 hover:bg-[#E5FAE6] rounded-xl '>
              
              <p>Cart</p>
              <img src="Asset\nav\shopping-basket.svg" alt="" />
              <div className='bg-[#364A15] text-center text-xs rounded-full absolute px-1 top-0 right-0 text-[#f8fafc]'>1</div>


              
            </a>
            <a href="#" className='flex justify-between p-1 hover:bg-[#E5FAE6] rounded-xl '>
              
              <p>Track orders</p>
              <img src="Asset\nav\delivery-tracking.svg" alt="" />

              
            </a>
            <a href="#" className='flex justify-between p-1 hover:bg-[#E5FAE6] rounded-xl '>
              
              <p>Your Orders</p>
              <img src="Asset\nav\pack.svg" alt="" />

            </a>
            <a href="#" className='flex justify-between p-1 hover:bg-[#E5FAE6] rounded-xl '>
              
              <p>Chatbot</p>
              <img src="Asset\nav\chat-bot.svg" alt="" />

            </a>
            <a href="#" className='flex justify-start p-1 hover:bg-[#E5FAE6] rounded-xl '>
              
              <p>Sign out</p>
              <img src="Asset\nav\login.svg" alt="" />

            </a>
          </div>
      ) }
    </header>
  );
};

export default Navbar;
