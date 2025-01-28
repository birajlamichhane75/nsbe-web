import '@/styles/globals.css';

export const metadata = {
  title: 'NSBE-HTU',
  description:"National Society of Black Engineers",
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
