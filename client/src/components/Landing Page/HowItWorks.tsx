import React from "react";
import { Badge } from "@/components/ui/badge";
import { FaFireFlameCurved } from "react-icons/fa6";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { howitworksdata } from "@/utils/Howitworks";

function HowItWorks() {
  return (
    <div className="mt-20 w-full flex items-center flex-col font-pop">
      <Badge
        variant="secondary"
        className="font-pop w-fit text-md rounded-full flex items-center gap-2"
      >
        {" "}
        <FaFireFlameCurved />
        How it works
      </Badge>
      <h1 className="font-pop text-3xl text-center lg:text-5xl md:text-4xl font-bold mt-2">
        With us, searching is effortless.
      </h1>
      <h2 className="mt-3 opacity-80 lg:text-lg text-sm lg:w-1/2 md:w-2/3 text-center">
        Effortless searching tailored for individuals, delivering powerful
        insights to meet diverse and evolving needs.
      </h2>

      <div className="w-full mt-10 md:flex-col md:gap-5 lg:flex-row flex flex-col items-center justify-between">
        {howitworksdata.map((items, index) => (
          <Card
            key={index}
            className="lg:w-[32%] md:w-[70%] w-full h-56 flex flex-col    items-center"
          >
            <CardHeader>
              <Badge variant="secondary" className="w-fit">
                0{index + 1}
              </Badge>
              <CardTitle className="mb-3 text-2xl">{items.title}</CardTitle>
              <CardDescription className="mt-3 text-sm">
                {items.des}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;
