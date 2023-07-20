import './globals.css'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'

export const metadata = {
  title: "Anil's Blog",
  description: 'Created by Anil Dave',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-gray-700">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}
