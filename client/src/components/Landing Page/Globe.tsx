import Globe from "@/components/ui/globe";

export function GlobeDemo() {
  return (
    <div className="hidden relative lg:flex md:flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl ">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl lg:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        ExploreX
      </span>
      <Globe className="lg:top-28 md:top-16 " />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}
