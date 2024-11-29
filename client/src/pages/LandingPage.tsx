import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";
import CardElement from "@/components/Landing Page/CardElement";

function LandingPage() {
  return (
    <div className="relative flex flex-col size-full items-center justify-center overflow-hidden rounded-lg border bg-background p-5 lg:p-20 md:shadow-xl mt-5">
    {/* <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
      Grid Pattern
    </p> */}
          <CardElement/>
    <GridPattern
      width={30}
      height={30}
      x={-1}
      y={-1}
      strokeDasharray={"4 2"}
      className={cn(
        "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
      )}
    />
  </div>
  )
}

export default LandingPage