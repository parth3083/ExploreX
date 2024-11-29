import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GlobeDemo } from "./Globe";
import { RippleButtonDemo } from "./RippleButton";

function CardElement() {
  return (
    <Card className="lg:flex md:flex items-center overflow-hidden w-full  lg:py-10 lg:px-5 ">
      <CardHeader>
        <CardTitle className="font-pop text-4xl lg:text-6xl font-semibold  ">
          Search Smarter. Filter Better.
        </CardTitle>
        <CardDescription className="font-pop text-sm lg:text-md  ">
          A powerful search tool for individuals, businesses, and developers,
          enabling smarter Google search results with automatic filtering of
          irrelevant content for a cleaner, more efficient browsing experience.
        </CardDescription>
        <RippleButtonDemo />
      </CardHeader>
      <GlobeDemo />
    </Card>
  );
}

export default CardElement;
