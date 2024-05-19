import React from 'react'

import { FaTelegram, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    // <div className=' bg-footer-texture w-full h-[70vh] bg-cover'>
    //     <div className='grid grid-col-1 content-center p-5 gap-[45px] '>
    //         <div className='grid grid-col-1 bg-[#E6E6DD] w-full h-[40vh] rounded '>
    //             <div className='flex gap-[20vw] justify-between m-5'>
    //                 <div>
    //                     <img src="Asset\nav\Icon.svg" alt="Pasar Click" />
    //                 </div>
    //                 <div className='flex gap-5'>
    //                     <div>
    //                         <p>CONTACT US</p>
    //                         <div className='flex flex-col'>

    //                             <a href="#">Support</a>
    //                             <a href="#">FAQ</a>
    //                             <a href="#">Partner with us</a>
    //                             <a href="#">Chat bot</a>
    //                         </div> 
    //                     </div>
    //                     <div >
    //                         <p>LEGAL</p>
    //                         <div className='flex flex-col'>
    //                             <a href="#">Terms Conditions</a>
    //                             <a href="#">Cookie Policy</a>
    //                             <a href="#">Privacy Policy</a>
    //                         </div> 

    //                     </div>
    //                 </div>
    //                 <div className='self-start bg-[#ffffff] rounded-full px-5 py-2'>
    //                     13 state 
    //                 </div>
    //             </div>
    //             <div className='flex  mx-5 '>
    //                 <div className='flex jjustify-center self-center '>
    //                     <FaTelegram style={{ fontSize: '3em' }}/>
    //                     <FaWhatsapp style={{ fontSize: '3em', color:'#ffffff',background:'#000000',borderRadius:'50%',padding:'0.5rem'}}/>

    //                 </div>
    //                 <div className='self-center '>
    //                     1901 Thornridge Cir.Shiloh,
    //                     Malaysia 81063
    //                 </div>
    //             </div>
    //         </div>
    //         <div>sdfs</div>
    //         <div>sfsdsd</div>
    //     </div>
    // </div>
//     <div className=' bg-footer-texture w-full h-[70vh] bg-cover'>
//   <div className='grid grid-col-1 content-center p-5 gap-[45px]'>
//     <div className='grid grid-col-1 bg-[#E6E6DD] w-full h-[40vh] rounded'>
//       <div className='flex gap-[20vw] justify-between m-5'>
//         <div>
//           <img src="Asset\nav\Icon.svg" alt="Pasar Click" />
//         </div>
//         <div className='flex gap-5'>
//           <div>
//             <p>CONTACT US</p>
//             <div className='flex flex-col'>
//               <a href="#">Support</a>
//               <a href="#">FAQ</a>
//               <a href="#">Partner with us</a>
//               <a href="#">Chat bot</a>
//             </div>
//           </div>
//           <div>
//             <p>LEGAL</p>
//             <div className='flex flex-col'>
//               <a href="#">Terms Conditions</a>
//               <a href="#">Cookie Policy</a>
//               <a href="#">Privacy Policy</a>
//             </div>
//           </div>
//         </div>
//         <div className='self-center bg-[#ffffff] rounded-full px-5 py-2'>
//           13 state
//         </div>
//       </div>
//       <div className='flex mx-5 justify-center items-center'> {/* Added justify-center and items-center */}
//         <div className='flex gap-2 justify-self-start'> {/* Added justify-self-start */}
//           <FaTelegram style={{ fontSize: '3em' }} />
//           <FaWhatsapp style={{ fontSize: '3em', color:'#ffffff', background:'#000000', borderRadius:'50%', padding:'0.5rem'}} />
//         </div>
//         <div>
//           1901 Thornridge Cir.Shiloh,
//           Malaysia 81063
//         </div>
//       </div>
//     </div>
//     <div>sdfs</div>
//     <div>sfsdsd</div>
//   </div>
// </div>
<div className="flex bg-footer-texture bg-cover overflow-hidden relative flex-col px-10 pt-10 pb-6 w-full min-h-[684px] max-md:px-5 max-md:max-w-full">
      
      <div className="flex relative flex-col px-10 py-8 rounded-2xl bg-stone-200 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-4 justify-between items-start w-full max-md:flex-wrap max-md:max-w-full">
          <img
            loading="brand"
            srcSet="Asset\nav\Icon.svg"
            className="shrink-0 aspect-square w-[93px]"
          />
          <div className="self-stretch max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow pb-7 text-base leading-6 text-stone-900 max-md:mt-4">
                  <div className="text-xs font-bold tracking-wide uppercase">
                    Contact us
                  </div>
                  <div className="mt-6">Support</div>
                  <div className="mt-1">FAQ</div>
                  <div className="mt-1">Partner with us</div>
                  <div className="mt-1">Ride with us</div>
                  <div className="mt-1">Chat bot</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-base leading-6 text-stone-900 max-md:mt-4">
                  <div className="text-xs font-bold tracking-wide uppercase">
                    Legal
                  </div>
                  <div className="mt-6">Terms Conditions</div>
                  <div className="mt-1">Cookie Policy</div>
                  <div className="mt-1">Privacy Policy</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center text-base text-black">
            <div className="flex flex-col justify-center px-8 py-6 w-full bg-white rounded-[304px] max-md:px-5">
              <div className="flex gap-2.5">
                <div>13 States </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/65654e8abfb1aa50f08c2f61a265de18685d8e6c4a40714fa2fbaff0a0e77262?"
                  className="shrink-0 w-6 aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-24 max-md:flex-wrap max-md:mt-10">
          <div className="flex flex-1 gap-2 pr-20">
            <div className="flex justify-center items-center px-3 w-10 h-10 bg-stone-900 rounded-[40px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1352b437ef1b2f7f82ca5788d641627dafb7c69fc205a76a1beb37404a5e27af?"
                className="aspect-[1.28] fill-white w-[18px]"
              />
            </div>
            <div className="flex justify-center items-center px-3 w-10 h-10 bg-stone-900 rounded-[40px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/164b210ee841b2337403641bf04b4279ab5d8b7a1473e95c4cba0e7d6ed9f16b?"
                className="w-4 aspect-square fill-white"
              />
            </div>
          </div>
          <div className="my-auto text-xs italic font-bold leading-4 text-stone-900 max-md:max-w-full">
            1901 Thornridge Cir. Shiloh,
            <br />
            Malaysia  81063
          </div>
        </div>
      </div>
      <div className="relative mt-12 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="relative text-4xl italic font-bold tracking-tighter leading-10 text-white max-md:mt-4 max-md:max-w-full">
              If you didn’t find the products
              <br />
              you are interested in or have questions?
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col grow py-0.5 mt-8 text-white leading-[140%] max-md:mt-10 max-md:max-w-full">
              <div className="text-sm italic font-bold max-md:max-w-full">
                Just send us your contact email and we will contact you.
              </div>
              <div className="flex gap-2.5 mt-2 max-md:flex-wrap max-md:max-w-full">
                <div className="flex gap-0.5 justify-between py-2 pr-6 pl-4 text-xs font-medium tracking-wide uppercase border border-solid border-white border-opacity-60 rounded-[47px] max-md:px-5">
                  <div className="flex gap-1 justify-center">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5798976986ba5b573dcdc205207992104ee19dceeddfaeacf7730a1e7c93c115?"
                      className="shrink-0 w-6 aspect-square"
                    />
                    <div className="my-auto">Chat bot</div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/28769ccee66c23873db47058280c317613060b054af0d189b59ee50f142b725c?"
                    className="shrink-0 my-auto border-2 border-white border-solid aspect-[1.89] stroke-[1.5px] stroke-white w-[15px]"
                  />
                </div>
                <div className="flex gap-5 justify-between items-start pt-1.5 pr-20 pb-5 pl-5 border border-solid border-white border-opacity-60 rounded-[47px] max-md:px-5">
                  <div className="flex gap-1 justify-center self-start">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4335938428c548d078606f7bb5fb127c5ab80a6d0bab05c0f80789e3a09e31b?"
                      className="shrink-0 self-start mt-2 w-6 aspect-square"
                    />
                    <div className="flex flex-col">
                      <div className="text-xs italic font-bold tracking-wide uppercase">
                        EMail
                      </div>
                      <div className="mt-1 text-xs tracking-wide capitalize">
                        Enter your mail
                      </div>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/28769ccee66c23873db47058280c317613060b054af0d189b59ee50f142b725c?"
                    className="shrink-0 my-auto border-2 border-white border-solid aspect-[1.69] stroke-[1.5px] stroke-white w-[17px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex relative gap-5 justify-between mt-12 text-xs leading-4 text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div>© 2023 — Copyright</div>
        <div className="text-right">Privacy</div>
      </div>
    </div>


    
    
        
    
    
  )
}

export default Footer