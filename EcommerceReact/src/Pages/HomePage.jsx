import React from "react";
import { Navbar } from "../Components/Navbar";
import { Announcement } from "../Components/Announcement";
import { Slider } from "../Components/Slider";

const HomePage = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider/>
    </>
  );
};

export default HomePage;
