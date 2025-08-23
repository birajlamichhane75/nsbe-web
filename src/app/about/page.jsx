import AboutNsbe from "@/helpers/sections/aboutnsbe";
import Aboutpdf from "@/helpers/sections/aboutpdf";
import HomeBanner from "@/helpers/sections/homeBanner";
import Image from "next/image";



export default function Home() {
  return (
    <div>
      {/* <HomeBanner title="ABOUT US" /> */}
      <div className="relative h-[60vh] md:h-[70vh] w-full">
        <Image
          src="/images/nsbepic11.jpg"
          alt="About Us"
          fill
          className="object-cover"
          priority
        />
      </div>

      <AboutNsbe />
    </div>

  )
}
