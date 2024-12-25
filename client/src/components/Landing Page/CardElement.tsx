import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GlobeDemo } from "./Globe";
import { Badge } from "../ui/badge";
import { IoIosArrowForward } from "react-icons/io";


function CardElement() {
  return (
    <Card className="lg:flex md:flex items-center overflow-hidden w-full  lg:py-10 lg:px-5 ">
      <CardHeader>
      <Badge
          variant="secondary"
          className="font-pop w-fit text-md mb-5  rounded-full  flex items-center"
        >
         ExploreX v1.0
         <IoIosArrowForward />
        </Badge>
        <CardTitle className="font-pop text-4xl lg:text-6xl font-semibold  ">
          Search Smarter. Filter Better.
        </CardTitle>
        <CardDescription className="font-pop text-sm lg:text-base leading-8 pt-5 ">
          A powerful search tool for individuals, businesses, and developers,
          enabling smarter Google search results with automatic filtering of
          irrelevant content for a cleaner, more efficient browsing experience.
        </CardDescription>
        
      </CardHeader>
      <GlobeDemo />
    </Card>
  );
}

export default CardElement;
