import NavBar from "@/helpers/components/NavBar/Navbar";
import NavBar1 from "@/helpers/components/NavBar/Navbar1";
import ContactForm from "@/helpers/sections/contactform";
import HomeBanner from "@/helpers/sections/homeBanner";


export default function Home() {
  return (
      <div>
        <HomeBanner title="Contact Us" />
        <ContactForm />
      </div>

  )
}
