import { Bottombar } from '../components/Bottombar'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='h-screen bg-mauve-1 flex flex-col'>
        <main className='grow'>{children}</main>
        <Bottombar />
      </body>
    </html>
  )
}
