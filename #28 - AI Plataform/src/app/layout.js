import './globals.css'
import { IBM_Plex_Sans } from 'next/font/google'

const ibm = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400','600'] })

export const metadata = {
  title: 'IA Platform',
  description: 'Project of IA platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ibm.className}>{children}</body>
    </html>
  )
}
