import React from "react";
import "../Home/home.scss";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import Categories from "../../components/categories/Categories";
import ProductList from "../../components/productList/ProductList";
import NewsLetter from "../../components/newsLetter/NewsLetter";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <Categories />
      <ProductList />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default Home;
