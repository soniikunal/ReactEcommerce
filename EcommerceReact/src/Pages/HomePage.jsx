import React from "react";
import { Navbar } from "../Components/Navbar";
import { Announcement } from "../Components/Announcement";
import { Slider } from "../Components/Slider";
import { Categories } from "../Components/Categories/Categories";
import { Products } from "../Components/Products/Products";
import { NewsLetter } from "../Components/NewsLetter";

const HomePage = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
    </>
  );
};

export default HomePage;
