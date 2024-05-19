import {React,useState} from 'react';
import { CiStar,CiHeart } from "react-icons/ci";
import { FaStar,FaHeart} from "react-icons/fa";

const VendorCard = ({ categories, vendorName, locationName, starCount, time, href }) => {
  const [filled, setFilled] = useState(false);

  const toggleHeart = () => {
    setFilled(!filled);
  };
  // Function to render star icons based on starCount (filled and outline stars)
  const renderStars = () => {
    const filledStarCount = Math.min(starCount, 5);
    const stars = [];
    
    // Render filled stars
    for (let i = 0; i < filledStarCount; i++) {
      stars.push(<FaStar className="w-[14px] h-[14px]" style={{ color: '#1AC84B'}}/>);
    }
    
    // Render outline stars
    for (let i = filledStarCount; i < 5; i++) {
      stars.push(<CiStar />);
    }
    
    return stars;
  };
  const imageUrl = 'Asset/Vendor/FreshChoice.svg';

  return (
    
  <div className="shrink-0 relative flex flex-col justify-center items-center w-[363px] h-[250px] rounded-xl font-[Lufga]  font-[400] " style={{backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
  <div className='absolute bottom-[-4rem] mx-auto w-[296px] h-[171px] bg-[#ffffff] rounded-xl shadow-3xl p-2 flex flex-col justify-evenly'>
  
    <div className='flex justify-between items-center '>
      <div>
        <h2 className='text-[14px] leading-[18.27px]'>{vendorName}</h2>
        <p className='text-[10px] leading-[13.05px] opacity-[50%]'>{locationName}</p>
      </div>
      
      <div onClick={toggleHeart} style={{ cursor: 'pointer' }}>
      {filled ? (
        <FaHeart className='w-[17.94 px] h-[15.37px]' style={{ color: 'red'}} />
      ) : (
        <CiHeart className='w-[17.94 px] h-[15.37px]' style={{ color: 'black' }} />
      )}
      </div>
    </div>
    
    
    <div className='flex gap-[4px] content-center mt-1'>
      {renderStars()}
    </div>
    <p className='flex gap-1'><img src="Asset/Vendor/NearByShop.svg"/>{time}</p>
    <a href={href} className='bg-lightgreen rounded-xl  w-[168px] h-[38px] mx-auto flex justify-center items-center'>Link</a>
  </div>
</div>

  );
};

// Default props
VendorCard.defaultProps = {
  categories: [],
  vendorName: 'ABZ Vendor',
  locationName: 'Texas',
  starCount: 4,
  time: '10 min',
  href: '#'
};

export default VendorCard;
