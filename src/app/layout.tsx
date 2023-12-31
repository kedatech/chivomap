import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Nav, LayerModal} from '@/shared/components'
// map components
import { MapView } from '@/app/(map)/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chivo Map | El Salvador',
  description: 'Mapa Nacional de El Salvador',
}

console.log("LAYOUT GENERAL")
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* map */}
        {/* <h1 className="text-3xl font-bold underline fixed z-30 mx-[50px] my-4">ChivoMap</h1> */}
        <MapView />

        <section className='bg-transparent w-full max-w-2xl mx-auto text-gray-200 z-50 fixed left-1/2 transform -translate-x-1/2 top-[20px]'>
          
          <article className='bg-primary w-11/12 rounded mx-auto'>  
            {children}
          </article>
        </section>

        {/* nav component */}
        <div className="fixed bottom-2 w-full flex items-center justify-center z-50 out-bottom">
          <Nav />
        </div>

        <LayerModal />
      </body>
    </html>
  )
}
