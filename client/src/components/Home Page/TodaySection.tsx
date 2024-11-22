import React from 'react'
import NewsCard from './NewsCard'

function TodaySection() {
  return (
      <div className='w-full h-80 px-5'>
          <h1 className="font-pop text-3xl font-medium">Trending Today {">"}</h1>
          <div className='w-full  overflow-x-auto h-60 mt-5 flex items-center gap-7'>
              <NewsCard/>
              <NewsCard/>
              <NewsCard/>
              <NewsCard/>
              <NewsCard/>
          </div>

    </div>
  )
}

export default TodaySection