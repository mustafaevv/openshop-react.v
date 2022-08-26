import React from "react";

import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import IPhones from "../../ComponentBlocks/Iphones";
import Laptops from "../../ComponentBlocks/Laptops";
import Playstation from "../../components/Playstation";
import ProductIWatch from "../../components/ProductIWatch";
import Footer from "../../components/Footer";


const Home = () => {
  return (
    <>
      <Header />
      <Carousel/>
      <IPhones/>
      <Laptops/>
      <Playstation/>
      <ProductIWatch/>
      <Footer/>
    </>
  );
};

export default Home;
