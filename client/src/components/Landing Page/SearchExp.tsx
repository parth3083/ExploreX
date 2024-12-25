import React from "react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Alice",
    username: "@alice",
    body: "This search platform is a game changer! The results are fast and incredibly accurate. I’m impressed!",
    img: "https://avatar.vercel.sh/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "I love how easy it is to find exactly what I’m looking for. The user interface is seamless and intuitive.",
    img: "https://avatar.vercel.sh/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "The advanced search features are amazing. I can filter results in ways I didn’t know were possible!",
    img: "https://avatar.vercel.sh/charlie",
  },
  {
    name: "Dana",
    username: "@dana",
    body: "I've tried several search engines, but this one gives me the most relevant results in a fraction of the time. Highly recommend it.",
    img: "https://avatar.vercel.sh/dana",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "Impressive speed and accuracy. This search tool has truly elevated my browsing experience.",
    img: "https://avatar.vercel.sh/eve",
  },
  {
    name: "Frank",
    username: "@frank",
    body: "I’ve been using this for a while now, and it’s my go-to search engine. Fast, reliable, and super easy to use.",
    img: "https://avatar.vercel.sh/frank",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

function SearchExp() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

export default SearchExp;
