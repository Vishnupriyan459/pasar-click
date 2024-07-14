import React from "react";
import { Routes, Route } from 'react-router-dom';
import HomeNav from "./HomeNav";
import NearbyShop from "./NearbyShop";
import FeaturedProducts from "./FeaturedProducts";
import Banar from "./Banar";
import DailyBestSells from "./DailyBestSells";
import RankCatagories from "./RankCatagories";
import ThreeCatgories from "./ThreeCatgories";
import Shop from "../Shop/Shop";
import Vendor from "../Vendor/Vendor"
import ShopProduct from "../Shop/ShopProduct";
import VendorDetails from "../Vendor/VendorDetails"
import "./Home.css";
import Breadcrumbs from "../Breadcrumbs";
import Cart from '../Cart/Cart';
const Home = () => {
  return (
    <>
      <HomeNav />
      <Breadcrumbs />
      <Routes>
        <Route path="/" element={
          <>
            <Banar />
            <ThreeCatgories />
            <NearbyShop />
            <FeaturedProducts />
            <DailyBestSells />
            <RankCatagories />
          </>
        } />
        <Route path="shop/*" element={<Shop />}>
          <Route path=":productId" element={<ShopProduct />} />
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route path="vendor/*" element={<Vendor />}>
          <Route path=":vendorId" element={<VendorDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default Home;
