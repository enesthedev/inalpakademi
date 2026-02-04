'use client'
import { ArrowRight, Clock, Video } from 'lucide-react' // Added import for Video and ArrowRight icons
import Image from 'next/image'

// Örnek veri
const weeklyCourses = [
  {
    course: 'Matematik',
    subject: 'Fonksiyonlar',
    teachers: 10,
    image: '/images/math1.png',
    workType: 'Yüz Yüze',
    place: 'Kahve Dünyası',
    date: '30.04.2025',
    duration: 3600000
  },
  {
    course: 'Matematik',
    subject: 'Limit ve Süreklilik',
    teachers: 12,
    image: '/images/math2.png',
    workType: 'Çevrimiçi',
    place: 'Online Platform',
    date: '30.04.2025',
    duration: 3600000
  },
  {
    course: 'Matematik',
    subject: 'Türev',
    teachers: 14,
    image: '/images/math3.png',
    workType: 'Çevrimiçi',
    place: 'Online Platform',
    date: '30.04.2025',
    duration: 3600000
  },
  {
    course: 'Matematik',
    subject: 'İntegral',
    teachers: 11,
    image: '/images/math4.png',
    workType: 'Çevrimiçi',
    place: 'Online Platform',
    date: '30.04.2025',
    duration: 3600000
  }
]

// Türkçe ay kısaltmaları
const monthNames = [
  'OCA', // Ocak
  'ŞUB', // Şubat
  'MAR', // Mart
  'NİS', // Nisan
  'MAY', // Mayıs
  'HAZ', // Haziran
  'TEM', // Temmuz
  'AĞU', // Ağustos
  'EYL', // Eylül
  'EKİ', // Ekim
  'KAS', // Kasım
  'ARA' // Aralık
]

export function WeeklyCourses() {
  return (
    <section className='mx-auto w-full max-w-screen-xl px-5 py-5'>
      <h2 className='mb-5 text-xl font-bold tracking-tight text-gray-900'>Haftanın Dersleri</h2>
      {/* GRID YAPISI */}
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {weeklyCourses.map((course, index) => {
          const [day, month] = course.date.split('.')
          const monthShort = monthNames[parseInt(month, 10) - 1]
          const minutes = (course.duration / 60000).toFixed(0)

          return (
            <div
              key={index}
              className='overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-950'
            >
              {/* Image with date overlay */}
              <div className='relative'>
                <Image
                  src='/images/placeholder.svg'
                  alt='Product Image'
                  width={500}
                  height={150}
                  className='h-24 w-full object-cover lg:h-36'
                  style={{ aspectRatio: '500/150', objectFit: 'cover' }}
                />
                <div className='absolute right-2 top-2 rounded bg-black bg-opacity-75 px-2 py-1 text-center'>
                  <div className='text-sm font-bold text-white'>{day}</div>
                  <div className='text-xs font-bold text-white'>{monthShort}</div>
                </div>
                <div className='absolute bottom-0 left-0 flex w-full items-center space-x-4 bg-gradient-to-t from-black/70 to-transparent px-5 py-4'>
                  <Image
                    src={'/images/placeholder.svg'}
                    width={30}
                    height={30}
                    alt='placeholder'
                    className='h-8 w-8 rounded-full object-cover'
                  />
                  <div className='flex flex-col text-white'>
                    <h2 className='text-sm font-bold'>Enes Bayraktar</h2>
                    <span className='text-xs text-white'>Türkiye 300.000'ncisi</span>
                  </div>
                </div>
              </div>

              <div className='flex flex-col space-y-2 p-4'>
                <h3 className='text-base font-semibold'>{course.subject}</h3>
                {/* Bottom info row: Duration, WorkType and Info Button */}

                <div className='mt-4 flex items-center justify-between lg:flex-col lg:items-start lg:space-y-1 xl:flex-row xl:items-center xl:space-y-0'>
                  <div className='flex items-center space-x-5'>
                    <div className='flex items-center gap-1'>
                      <Clock className='h-4 w-4 text-gray-500 dark:text-gray-400' />
                      <span className='text-sm text-gray-500 dark:text-gray-400'>
                        {minutes} dakika
                      </span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <Video className='h-4 w-4 text-gray-500 dark:text-gray-400' />
                      <span className='text-xs text-gray-500 dark:text-gray-400 lg:text-sm'>
                        {course.workType}
                      </span>
                    </div>
                  </div>
                  <button className='flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800'>
                    <ArrowRight className='h-4 w-4' />
                    <span>Bilgi Al</span>
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
