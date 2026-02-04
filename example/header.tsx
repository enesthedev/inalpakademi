import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '../components'

export default function Header() {
  return (
    <header className='w-full'>
      <div className='hidden max-h-[70px] w-full items-center justify-center bg-white font-medium md:flex'>
        <div className='flex w-full max-w-screen-2xl items-center justify-between px-8 py-4'>
          <h3 className='text-xs lg:text-sm xl:text-base'>
            Başarılı tıp fakültesi öğrencilerinden birebir ders – Şimdi ücretsiz deneme şansı!
          </h3>
          <div className='flex items-center justify-center space-x-5'>
            <div className='flex items-center justify-center space-x-3'>
              <MoveRight className='h-3 w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5' />
              <Link
                href='tel:+905554440000'
                className='text-xs font-semibold text-blue-800 lg:text-sm xl:text-base'
              >
                +90 555 444 00 00
              </Link>
            </div>
            {
              // TODO: Need revision for next time release
              /*<span>ya da</span>
            <Button variant='outline' className='rounded-full text-sm [&_svg]:size-4'>
              <Phone />
              <Link href='/contact'>Sizi Arayalım</Link>
            </Button>*/
            }
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  )
}
