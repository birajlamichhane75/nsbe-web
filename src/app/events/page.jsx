import NavBar from "@/helpers/components/NavBar/Navbar";
import NavBar1 from "@/helpers/components/NavBar/Navbar1";
import HomeBanner from "@/helpers/sections/homeBanner";


export default function Home() {
  return (
      <div>
        <NavBar />
        <NavBar1 />
        <HomeBanner title="NSBE EVENTS" />
      </div>

  )
}
