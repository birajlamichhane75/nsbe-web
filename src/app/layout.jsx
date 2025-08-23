import Footer from '@/helpers/components/Footer/footer';
import NavBar from '@/helpers/components/NavBar/Navbar';
import NavBar1 from '@/helpers/components/NavBar/Navbar1';
import '@/styles/globals.css';

// app/layout.js (Next.js 13+ App Router)
export const metadata = {
  title: "HTU NSBE | Huston-Tillotson University NSBE Chapter",
  description: "Official Huston-Tillotson University NSBE Chapter – empowering Black engineers, fostering community, and advancing STEM leadership.",
  keywords: [
  "NSBE",
  "HTU NSBE",
  "Huston-Tillotson University",
  "National Society of Black Engineers",
  "Engineering",
  "STEM",
  "Black Engineers",
  "Black Engineering Students",
  "Engineering Leadership",
  "STEM Careers",
  "Engineering Scholarships",
  "College Engineering Organizations",
  "Student Engineering Chapter",
  "Diversity in STEM",
  "African American Engineers",
  "Engineering Networking",
  "STEM Events",
  "Engineering Conferences",
  "Engineering Mentorship",
  "Engineering Community Huston-Tillotson"
],
 
  icons: {
    icon: "/logo1.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&family=Roboto:wght@400;500&family=Fira+Mono&display=swap" rel="stylesheet"></link>
      </head>
      <body className='bg-yellow-400 flex flex-col min-h-screen'>
        <NavBar />
        <NavBar1 />
        <main className="flex-grow">{children}</main>
        <Footer />

      </body>
    </html>
  )
}
