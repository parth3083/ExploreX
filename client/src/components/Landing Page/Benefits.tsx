import React from "react";
import { Badge } from "@/components/ui/badge";
import { MdShoppingBag } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { benefitsData } from "@/utils/Benefits";
import ListAnimation from "./ListAnimation";
import Accuracy from "./Accuracy";
import SearchExp from "./SearchExp";
import Customizable from "./Customizable";
function Benefits() {
  return (
    <div className="mt-20 w-full flex items-center flex-col font-pop">
      <Badge
        variant="secondary"
        className="font-pop w-fit text-md rounded-full flex items-center gap-2"
      >
        {" "}
        <MdShoppingBag />
        Benefits
      </Badge>
      <h1 className="font-pop text-3xl text-center lg:text-5xl md:text-4xl font-bold mt-2">
        Your all-in-one solution for fast and accurate search results.
      </h1>
      <h2 className="mt-3 opacity-80 lg:text-lg text-sm lg:w-1/2 md:w-2/3 text-center">
        Explore a wide range of advanced features, available unlimited and free
        for individuals.
      </h2>

    
        <Badge
          variant="secondary"
          className="font-pop w-fit text-md   rounded-full mt-10 flex items-center"
        >
          {" "}
          Let&apos;s go
          <IoIosArrowForward />
        </Badge>
      

      <div className="w-full items-center mx-auto  md:flex-col lg:flex-row flex-col md:items-center  flex flex-wrap gap-5 mt-5">
        {benefitsData.map((items, index) => (
          <Card
            key={index}
            className="lg:w-[49%]  md:w-[70%] w-full h-96 flex flex-col   overflow-hidden  items-center"
          >
            <CardHeader>
              <CardTitle className="mb-3 text-2xl">{items.title}</CardTitle>
              <CardDescription className="mt-3 text-sm">
                {" "}
                {items.des}.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {index === 0 ? (
                <SearchExp />
              ) : index === 1 ? (
                <ListAnimation />
              ) : index === 2 ? (
                <Accuracy />
              ) : (
                <Customizable />
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <h1 className="font-pop text-3xl text-center lg:text-5xl md:text-4xl font-bold mt-10">
        ...and so much more!
      </h1>
    </div>
  );
}

export default Benefits;
