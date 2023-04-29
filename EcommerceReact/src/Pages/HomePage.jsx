import React from "react";
import { Navbar } from "../Components/Navbar";
import { Announcement } from "../Components/Announcement";
import { Slider } from "../Components/Slider";
import { Categories } from "../Components/Categories/Categories";

const HomePage = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider/>
      <Categories/>
    </>
  );
};

export default HomePage;
