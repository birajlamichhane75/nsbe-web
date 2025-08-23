import AboutNsbe from "@/helpers/sections/aboutnsbe";
import Aboutpdf from "@/helpers/sections/aboutpdf";
import HomeBanner from "@/helpers/sections/homeBanner";
 


export default function Home() {
  return (
      <div>
        <HomeBanner title="ABOUT US" />
        <AboutNsbe />
      </div>

  )
}
