import '../styles/globals.css'
import Navbar from './Components/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
        <body>
          <Navbar />
          {children}
        </body>
    </html>
  )
};
