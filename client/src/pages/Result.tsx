"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Result() {
  const { results, loading, error } = useSelector(
    (state: RootState) => state.search
  );

  const output = useSelector((state: RootState) => state.googleSearch.output);

  const filteredResults = Array.isArray(output?.filteredResults)
    ? output.filteredResults
    : [];

  const blogs = useSelector((state: RootState) => state.blogSearch.blogs);
  const blogResults = Array.isArray(blogs?.blogResults)
    ? blogs.blogResults
    : [];

  console.log("This is the output of the results.tsx ", blogResults);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-full min-h-screen  p-5 font-pop">
      <Tabs defaultValue="Videos" className="w-full ">
        <TabsList>
          <TabsTrigger value="Videos">Videos</TabsTrigger>
          <TabsTrigger value="blogs">Blogs</TabsTrigger>
          <TabsTrigger value="websites">Websites</TabsTrigger>
        </TabsList>
        <TabsContent value="Videos">
          {" "}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-6">
              {results.map((video: any, ind) => (
                <div
                  key={ind}
                  className="p-2 border border-zinc-300 transition-all ease-in-out duration-300 hover:shadow-lg hover:shadow-zinc-600 rounded-md"
                >
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                  />
                  <h2 className="text-lg font-semibold">
                    {video.snippet.title}
                  </h2>
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
        </TabsContent>
        <TabsContent value="blogs">
          <div className="p-6">
            {blogResults.length > 0 ? (
              <div className="space-y-4">
                {blogResults.map((result: any, index) => (
                  <div
                    key={index}
                    className="border rounded-md  hover:text-blue-600 hover:shadow-gray-600 hover:shadow-md transition-all ease-in-out duration-300 p-4"
                  >
                    <a
                      href={result.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold  hover:underline"
                    >
                      {result.title}
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <h1>No websites found.</h1>
            )}
          </div>
        </TabsContent>
        <TabsContent value="websites">
          <div className="p-6">
            {Array.isArray(filteredResults) && filteredResults.length > 0 ? (
              <div className="space-y-4">
                {filteredResults.map((result, index) => (
                  <div
                    key={index}
                    className="border rounded-md  hover:text-blue-600 hover:shadow-gray-600 hover:shadow-md transition-all ease-in-out duration-300 p-4"
                  >
                    <a
                      href={result.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold  hover:underline"
                    >
                      {result.title}
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <h1>No websites found.</h1>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Result;
