'use client'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '1',
    title: 'Eğitmenini Bul',
    description:
      'Seni motive edecek, sana meydan okuyacak ve ilham verecek bir eğitmenle seni eşleştireceğiz.'
  },
  {
    number: '2',
    title: 'Derse Başla',
    description:
      'Eğitmenin ilk dersinde sana rehberlik edecek ve bir sonraki adımlarını planlamana yardımcı olacak.'
  },
  {
    number: '3',
    title: 'Konuş. Oku. Yaz. Tekrar Et.',
    description: 'Haftada kaç ders almak istediğini seç ve hedeflerine daha hızlı ulaş!'
  }
]

export function HowItWorks() {
  return (
    <section className='mx-auto flex w-full max-w-screen-xl flex-col space-y-5 px-5 py-10 lg:space-y-1'>
      <h1 className='text-xl font-extrabold leading-none tracking-tight text-gray-900'>
        Nasıl
        <span className='ml-1 underline decoration-blue-600 decoration-2 underline-offset-2'>
          Başlarım?
        </span>
      </h1>
      {/* Tek bir container: Kartları ve okları içerir */}
      <div className='flex flex-col space-y-6 rounded-md py-5 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0'>
        {steps.map((step, index) => (
          <div key={step.number} className='flex items-center space-x-4'>
            {/* Sol taraftaki daire (adım numarası) */}
            <div>
              <span className='flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600'>
                {step.number}
              </span>
            </div>

            {/* Başlık ve açıklama metni */}
            <div className='flex w-full flex-col space-y-1'>
              <h3 className='font-semibold'>{step.title}</h3>
              <p className='text-sm text-gray-600'>{step.description}</p>
            </div>

            {/* Sondaki adım değilse ok ikonu göster */}
            {index < steps.length - 1 && (
              <ArrowRight className='ml-4 hidden h-6 w-6 text-gray-400 lg:block' />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
