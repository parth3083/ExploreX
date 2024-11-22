import React from "react";
import Searchbar from "./Searchbar";
import CarouselSection from "./CarouselSection";

function HeroSection() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-10 pt-5 md:pt-10 lg:pt-10">
      <Searchbar />
      <CarouselSection />
    </div>
  );
}

export default HeroSection;
