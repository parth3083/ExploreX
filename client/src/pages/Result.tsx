"use client"
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

function Result() {
  const { results, loading, error } = useSelector((state: RootState) => state.search);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Search Results</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {results.map((video: any,ind) => (
          <div key={ind} className="p-4 border rounded">
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <h2 className="text-lg font-semibold">{video.snippet.title}</h2>
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Watch Video
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Result;
