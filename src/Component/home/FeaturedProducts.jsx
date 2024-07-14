import React, { useState, useEffect } from "react";
import "./FeaturedProducts.css";
import Categories from "./Catagories";
import { fetchProducts } from '../../ProductAPI';
import Products from "./Products";

const FeaturedProducts = () => {
  const [category, setCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching the product data:', error);
      }
    };

    getProduct();
  }, []);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1124) { // Laptop and above
        setVisibleCount(10);
      } else if (window.innerWidth >= 640) { // Tablet
        setVisibleCount(8);
      } else { // Mobile
        setVisibleCount(4);
      }
    };

    updateVisibleCount();

    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const handleReadMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
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
    <div className="w-[90%] my-[5rem] mx-auto flex flex-col justify-between gap-5">
      <div className="flex justify-between items-center">
        <div className="flex flex-col w-full">
          <h1 className="font-[400] leading-[52.21px] text-[40px]">
            Featured Products
          </h1>
          <p className="font-[400] leading-[15.66px] text-[12px]">
            Tailored grocery suggestions just for you. Revolutionizing your
            shopping experience with personalized picks.
          </p>
        </div>
        <Categories setCategory={setCategory} />
      </div>
      <div className="grid justify-items-center grid-cols-1 tablet:grid-cols-3 laptop:grid-cols-4 Llaptop:grid-cols-5 gap-12 p-2">
        {filteredProducts.slice(0, visibleCount).map((product, index) => (
          <Products
            key={index}
            productImg={product.productImg}
            categories={product.categories}
            productName={product.productName}
            vendorName={product.vendorName}
            vendorhref={product.vendorhref}
            starCount={product.starCount}
            off={product.off}
            href={product.href}
            like={product.like}
            Total_items={product.Total_items}
            Sold_items={product.Sold_items}
            OriginalPrice={product.OriginalPrice}
            className="min-w-0"
          />
        ))}
      </div>
      {visibleCount < filteredProducts.length && (
        <button 
          className="mx-auto mt-4 p-2 bg-[#1AC84B] text-white rounded"
          onClick={handleReadMore}
        >
          Read More
        </button>
      )}
    </div>
  );
};

export default FeaturedProducts;
