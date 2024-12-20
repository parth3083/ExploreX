import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";
import CardElement from "@/components/Landing Page/CardElement";
import HowItWorks from "@/components/Landing Page/HowItWorks";
import Benefits from "@/components/Landing Page/Benefits";
import Searchbar from "@/components/Landing Page/Searchbar";
import React, { Suspense } from "react";

function LandingPage() {
  return (
    <main className="relative flex flex-col size-full items-center justify-center overflow-hidden rounded-lg border bg-background p-5 lg:p-20 md:shadow-xl mt-5">
      {/* Searchbar is critical, so it's rendered upfront */}
      <section aria-labelledby="searchbar-section" className="w-full">
        <Searchbar />
      </section>
      {/* CardElement component */}
      <section aria-labelledby="card-section" className="w-full">
        <CardElement />
      </section>
      {/* Lazy load non-critical sections */}
      <Suspense fallback={<div>Loading...</div>}>
        <section aria-labelledby="how-it-works-section" className="w-full">
          <HowItWorks />
        </section>
        <section aria-labelledby="benefits-section" className="w-full">
          <Benefits />
        </section>
      </Suspense>
      {/* Background GridPattern for visual flair */}
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
        aria-hidden="true" // Marked as decorative
      />
    </main>
  );
}

export default LandingPage;
