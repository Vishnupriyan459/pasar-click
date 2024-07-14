import { useRef,React, useState, useEffect } from 'react';
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import Catagories from './Catagories';
import Products from "./Products";
import DailyBestSellBanner from './DailyBestSellBanner';
import { fetchProducts } from '../../ProductAPI';
import "./DailyBestSells.css";

const DailyBestSells = () => {
  const [category, setCategory] = useState("All");
  const scrollContainerRef = useRef(null);
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching the vendor data:', error);
      }
    };

    getProduct();
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: -200, // Adjust the scroll distance as needed
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: 200, // Adjust the scroll distance as needed
        behavior: 'smooth',
      });
    }
  };
  // Map categories function
 const mapCategories = (category) => {
  switch (category) {
    case "Fresh Fruits":
      return "Fruit";
    case "Milks & Dairies":
      return "Dairy";
    case "Meat":
      return "Non-vegetable";
    case "Vegetables":
      return "Vegetable";
    default:
      return category; // For "All" or other categories not mapped
  }
};

// Filter products based on selected category
const filteredProducts = category === "All"
  ? products
  : products.filter(product => mapCategories(product.categories) === mapCategories(category));

  return (
    <>
      <div className="w-[90%] my-[5rem] mx-auto flex flex-col justify-between gap-5">
        {/* header of this section */}
        <div>
          <div className='flex justify-between items-center'>
            <div className='flex gap-5 font-[400] leading-[52.21px] text-[40px]'>
              <div>Daily Best Sells</div>
              <div className='flex gap-5 items-center text-[15px] font-[200] text-[#02992C]'>
                <button onClick={scrollLeft} className='bg-lightgreen w-[41px] h-[41px] rounded-full'>
                  <FaArrowLeftLong className='mx-auto' />
                </button>
                <button onClick={scrollRight} className='bg-lightgreen w-[41px] h-[41px] rounded-full'>
                  <FaArrowRightLong className='mx-auto' />
                </button>
              </div>
            </div>
            <div>
              <Catagories setCategory={setCategory}/>
            </div>
          </div>
          <div>
            Tailored grocery suggestions just for you. Revolutionizing your shopping experience with personalized picks.
          </div>
          <div ref={scrollContainerRef} className='flex items-center gap-3 flex-shrink-0 h-full w-full px-5 py-[2rem] overflow-x-auto scroll-smooth custom-scrollbar'>
            <div className="flex-shrink-0">
              <DailyBestSellBanner />
            </div>
            {filteredProducts.map((product, index) => (
                <div className="flex-shrink-0">
                <Products
                  key={index}
                  productImg={product.productImg}
                  categories={product.categories}
                  productName={product.productName}
                  vendorName={product.vendorName}
                  vendorhref={product.vendorhref}
                  starCount={product.starCount}
                  place={"dailybestsell"}
                  off={product.off}
                  href={product.href}
                  like={product.like}
                  Total_items={product.Total_items}
                  Sold_items={product.Sold_items}
                  OriginalPrice={product.OriginalPrice}
                />
                </div>
                ))}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyBestSells;
