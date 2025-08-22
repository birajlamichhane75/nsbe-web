import Footer from '@/helpers/components/Footer/footer';
import NavBar from '@/helpers/components/NavBar/Navbar';
import NavBar1 from '@/helpers/components/NavBar/Navbar1';
import '@/styles/globals.css';

export const metadata = {
  title: 'NSBE-HTU',
  description: "National Society of Black Engineers",
}

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
