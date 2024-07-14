import { React, useEffect, useState } from "react";
import RatingStar from "./RatingStar";
import LikeComponent from "./LikeComponent";

const Products = ({
  productImg,
  categories,
  productName,
  vendorName,
  starCount,
  off,

  OriginalPrice,
  href,
  like,
  place,
  Total_items,
  Sold_items,
}) => {
  const [percentages, setpercentages] = useState();
  const [price, setprice] = useState();
  useEffect(() => {
    setpercentages(`${(Sold_items / Total_items) * 100}%`);
    setprice(OriginalPrice - OriginalPrice * (off / 100));
  }, []);

  return (
    <div
      className={`w-[237px]  rounded-xl bg-[ #D4D4D430] p-2 border-solid border-2 border-[#D4D4D480] ${
        place === "dailybestsell" ? " h-[466px]" : " h-[416px] "
      }`}
    >
      <div className="relative w-[217px]  h-[208px] ">
        <img
          src={productImg}
          className="w-full h-full object-cover mx-auto"
          alt="product"
        />
        {off !== 0 && (
          <div className="absolute top-2 -right-1 bg-[#FF943B] rounded-sm w-[82px] h-[30px] text-[#ffffff] flex justify-center items-center">
            {off}% OFF
          </div>
        )}
      </div>
      <div className=" flex flex-col gap-5 mb-4">
        <div className="flex justify-between items-center  ">
          <div>
            <p className="text-[10px] font-[400] leading-[13.05px] text-[#8F8F8F]">
              {categories}
            </p>
            <h1 className="text-[14px] font-[600] leading-[18.27px] text-[#364A15]">
              {productName}
            </h1>
          </div>
          <div className="">
            <LikeComponent like={like} />
          </div>
        </div>
        <RatingStar starCounts={starCount} />
        <p className="text-[14px] font-[400] leading-[18.27px] text-[#8F8F8F]">
          By{" "}
          <span className="text-[#000000] font-[600] underline underline-offset-4">
            {vendorName}
          </span>
        </p>
        <div
          className={`flex  ${
            place === "dailybestsell"
              ? "flex-col justify-center"
              : "justify-between items-center"
          }`}
        >
          <div className="flex gap-1 items-center">
            <div className="text-[16px] font-[500] leading-[20.88px] text-[#1AC84B]">
              RM {price}
            </div>
            <div className="text-[10px] font-[400] leading-[13.05px] text-[#20202033] line-through">
              Rm {OriginalPrice}
            </div>
          </div>
          {place === "dailybestsell" && (
            <div className="flex flex-col ">
              <div className="w-full bg-[#DEF9EC] h-[4px]">
                <div
                  className={`   h-full bg-[#02992C] rounded-full`}
                  style={{ width: percentages }}
                ></div>
              </div>
              <div>
                {Total_items - Sold_items}/{Total_items}
              </div>
            </div>
          )}
          <div
            className={`w-[76px] h-[38px] flex justify-center items-center rounded-xl bg-[#DEF9EC] cursor-pointer ${href} ${
              place === "dailybestsell" ? "w-full" : "w-[76px]"
            }`}
          >
            {place === "dailybestsell" ? "Add Cart" : "Add"}
          </div>
        </div>
      </div>
    </div>
  );
};
// Default props
Products.defaultProps = {
  categories: "Vegetable",
  // productImg:"/Asset/products/Tomato.svg",
  productName: "Tomato",
  vendorName: "Veg & Health",
  starCount: 4,
  off: 10,
  OriginalPrice: 152.99,
  href: "#",
  like: false,
  place: "",
  Total_items: "50",
  Sold_items: "50",
};

export default Products;
