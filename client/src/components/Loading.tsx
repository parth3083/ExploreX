import React from "react";
import Meteors from "./ui/meteors";
import Meteors_Loading from "./Meteors_Loading";

function Loading() {
  return (
    <main className="bg-white w-full h-screen relative transition-all ease-in-out duration-300 flex items-center justify-center">
      <Meteors_Loading/>

    </main>
  );
}

export default Loading;
