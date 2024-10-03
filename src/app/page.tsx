import CollegeMarketplace from "@/components/college-market-place";
import { BackgroundBeamsDemo } from "@/components/MainBackground";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="dark">
      <Navbar/>
      <BackgroundBeamsDemo/>

      <CollegeMarketplace/>
    </div>
  );
}
