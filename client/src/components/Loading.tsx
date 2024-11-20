import React from "react";
import image1 from "@/assets/loader.gif";
import Image from "next/image";

function Loading() {
  return (
    <main className="loading-bg w-full h-screen relative  flex items-center justify-center">
      <Image
        src={image1}
        width={800}
        height={600}
        alt="Loading"
        className="w-full h-full object-contain"
      />
      <h1 className="absolute lg:mt-96 mt-44 md:mt-80 font-pop font-medium  text-md md:text-2xl lg:text-2xl">
        Gathering knowledge, just a moment!
      </h1>
    </main>
  );
}

export default Loading;
