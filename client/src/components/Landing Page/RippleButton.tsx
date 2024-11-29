import RippleButton from "@/components/ui/ripple-button";
import Link from "next/link";

export function RippleButtonDemo() {
  return (
    <Link href={"/home"} className="w-full">
      <RippleButton
        rippleColor="#ADD8E6"
        className="w-full bg-white hover:bg-[#252525] text-balck transition-all ease-in-out duration-500 mt-5 hover:text-white font-pop"
      >
        Get Started
      </RippleButton>
    </Link>
  );
}
