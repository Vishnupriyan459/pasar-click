import React, { useState, useEffect } from "react";
import RankBasedProduct from './RankBasedProduct';
import { fetchProducts } from '../../ProductAPI';

const RankCategories = () => {
  const categories = ["Top Selling", "Trending Products", "Recently Added", "Top Rated"];
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);

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

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 640) { // Tablet
        setVisibleCount(5);
      } else { // Mobile
        setVisibleCount(3);
      }
    };

    updateVisibleCount();

    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const handleReadMore = () => {
    setVisibleCount(prevCount => prevCount + 5);
  };

  const sortProducts = (products, category) => {
    switch (category) {
      case "Top Selling":
        return [...products].sort((a, b) => b.Sold_items - a.Sold_items);
      case "Trending Products":
        return [...products].sort((a, b) => b.starCount - a.starCount);
      case "Recently Added":
        return [...products].sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));
      case "Top Rated":
        return [...products].sort((a, b) => b.starCount - a.starCount);
      default:
        return products;
    }
  };

  return (
    <div className='w-[90%] mx-auto flex  flex-col justify-center mb-2'>
      <div className='grid justify-between grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 Llaptop:grid-cols-4 '>
        {categories.map((category, index) => {
          const sortedProducts = sortProducts(products, category);
          return (
            <div key={index} className='p-2'>
              <div className='w-[295px] m-3'>
                <p className='text-[25px] font-[300] leading-[32.63px] text-[#364A15]'>{category}</p>
                <div className="w-full bg-[#DEF9EC] h-[4px]">
                  <div className="w-1/2 h-full bg-[#02992C] rounded-full"></div>
                </div>
              </div>
              {sortedProducts.slice(0, visibleCount).map((product, index) => (
                <RankBasedProduct
                  key={index}
                  productImg={product.productImg}
                  productName={product.productName}
                  starCount={product.starCount}
                  href={product.href}
                  Total_items={product.Total_items}
                  Sold_items={product.Sold_items}
                  OriginalPrice={product.OriginalPrice}
                />
              ))}
            </div>
          );
        })}
      </div>
      {visibleCount < products.length && (
        <button 
          className="mx-auto mt-4 p-2 bg-[#1AC84B] text-white rounded"
          onClick={handleReadMore}
        >
          Read More
        </button>
      )}
    </div>
  );
}

export default RankCategories;
