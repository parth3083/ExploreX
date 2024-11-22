import React from "react";
import Searchbar from "./Searchbar";
import CarouselSection from "./CarouselSection";
import TodaySection from "./TodaySection";
import ThisWeek from "./ThisWeek";
import ThisMonth from "./ThisMonth";

function HeroSection() {
  return (
    <div className="w-full min-h-screen mb-10 flex flex-col items-center gap-10 pt-5 md:pt-10 lg:pt-10">
      <Searchbar />
      <CarouselSection />
      <TodaySection />
      <ThisWeek />
      <ThisMonth/>
    </div>
  );
}

export default HeroSection;
