import React from 'react'
import Meteors from "@/components/ui/meteors";
function Meteors_Loading() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden  bg-background md:shadow-xl">
    <Meteors number={30} />
    <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
      Exploring
    </span>
  </div>
  )
}

export default Meteors_Loading