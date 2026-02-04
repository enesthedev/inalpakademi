import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Avatar,
  AvatarFallback,
  AvatarStack,
  Button
} from '../components/ui'
import Header from './header'

export default function Page() {
  return (
    <>
      <Header />
      <main className='flex flex-col items-center'>
        <section className='flex h-[90vh] w-full flex-col items-center justify-center space-y-10 bg-[#2F4B9A]'>
          <h1 className='max-w-3xl text-center text-6xl font-semibold leading-[70px] text-white'>
            <span className='bg-[#1E2A5A]'>Sınavdan</span> Korkuyor Musun?
          </h1>
          <p className='max-w-xl text-center text-2xl font-light leading-normal tracking-wide text-white'>
            Senden önce sınavı geçmiş ve derece yapmış öğrencilerle birlikte sınav sürecini daha
            kolay ve eğlenceli hale getiriyoruz
          </p>
          <div className='flex flex-col items-center justify-center space-y-3 pt-5'>
            <Button
              variant={'default'}
              className='h-14 border-none bg-[#1E2A5A] px-10 text-xl text-white shadow-none'
            >
              Hemen Başla
            </Button>
          </div>
          <div className='flex flex-wrap items-center gap-4 pt-5'>
            {/* Avatarlar */}
            <div className='flex items-center space-x-2'>
              <AvatarStack>
                {/* Örnek 4 */}
                <Avatar className='bg-[#BBF7D0]'>
                  <AvatarFallback>K4</AvatarFallback>
                </Avatar>

                {/* Örnek 5 */}
                <Avatar className='bg-[#A5F3FC]'>
                  <AvatarFallback>K5</AvatarFallback>
                </Avatar>

                {/* Örnek 6 */}
                <Avatar className='bg-[#C7D2FE]'>
                  <AvatarFallback>K6</AvatarFallback>
                </Avatar>

                {/* Örnek 7 */}
                <Avatar className='bg-[#FBCFE8]'>
                  <AvatarFallback>K7</AvatarFallback>
                </Avatar>

                {/* Örnek 8 */}
                <Avatar className='bg-[#FDE68A]'>
                  <AvatarFallback>K8</AvatarFallback>
                </Avatar>
              </AvatarStack>
            </div>

            <div className='flex flex-col space-y-1'>
              {/* Yıldızlar */}
              <div className='flex items-start'>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    className='text-yellow-400'
                    key={i}
                    xmlns='http://www.w3.org/2000/svg'
                    height='18px'
                    viewBox='0 -960 960 960'
                    width='18px'
                    fill='currentColor'
                  >
                    <path d='m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z' />
                  </svg>
                ))}
              </div>

              {/* Kullanıcı sayısı */}
              <span className='whitespace-nowrap text-xs font-medium text-white'>
                +8000 kullanıcı
              </span>
            </div>
          </div>
        </section>

        <section className='flex w-full flex-col items-center justify-center bg-white py-20'>
          <h2 className='text-4xl font-semibold text-slate-900'>Eğitmenlerimizin Üniversiteleri</h2>
        </section>

        <section className='flex w-full flex-col items-center justify-center bg-[#fff6ed] py-20'>
          <h2 className='text-4xl font-semibold text-slate-900'>Aktif Dersler</h2>
          <div className='w-full max-w-screen-xl columns-1 gap-4 py-10 [column-fill:_balance] sm:columns-3'>
            <div className='mb-4 break-inside-avoid'>
              <div className='w-full overflow-hidden rounded-2xl bg-white'>
                <div className='flex h-full flex-col space-y-6'>
                  {/* Üst Bilgi */}
                  <div className='flex flex-col space-y-1 px-12 pt-10'>
                    <h3 className='text-2xl font-semibold text-slate-900'>
                      Matematik - Fonksiyonlar
                    </h3>
                    <div className='flex items-center space-x-3 text-sm text-slate-600'>
                      <span className='font-medium'>13 Nisan</span>
                      <span className='px-2 text-xs text-slate-400'>|</span>
                      <span>12:00 - 13:00</span>
                    </div>
                  </div>

                  {/* Konum ve Tür */}
                  <div className='flex items-center justify-between px-12'>
                    <span className='text-sm text-slate-500'>Espressolab, Ankara</span>
                    <div className='h-fit rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase text-green-700'>
                      Yüz Yüze
                    </div>
                  </div>

                  {/* Eğitmen */}
                  <div className='mt-auto flex flex-col items-center space-y-4 border-t px-12 pb-6 pt-4'>
                    <div className='flex w-full items-center space-x-4'>
                      <div className='h-10 w-10 flex-shrink-0 rounded-full bg-blue-100'></div>
                      <div className='flex flex-col'>
                        <span className='text-sm font-semibold text-slate-800'>Ali Yılmaz</span>
                        <span className='text-xs text-slate-500'>
                          Boğaziçi Üniversitesi Tıp Fakültesi, Türkiye 48.cisi
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mb-4 break-inside-avoid'>
              <div className='w-full overflow-hidden rounded-2xl bg-white'>
                <div className='flex h-full flex-col space-y-6'>
                  {/* Üst Bilgi */}
                  <div className='flex flex-col space-y-1 px-12 pt-10'>
                    <h3 className='text-2xl font-semibold text-slate-900'>
                      Matematik - Fonksiyonlar
                    </h3>
                    <div className='flex items-center space-x-3 text-sm text-slate-600'>
                      <span className='font-medium'>13 Nisan</span>
                      <span className='px-2 text-xs text-slate-400'>|</span>
                      <span>12:00 - 13:00</span>
                    </div>
                  </div>

                  {/* Konum ve Tür */}
                  <div className='flex items-center justify-between px-12'>
                    <span className='text-sm text-slate-500'>Espressolab, Ankara</span>
                    <div className='h-fit rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase text-green-700'>
                      Yüz Yüze
                    </div>
                  </div>

                  {/* Eğitmen */}
                  <div className='mt-auto flex flex-col items-center space-y-4 border-t px-12 pb-6 pt-4'>
                    <div className='flex w-full items-center space-x-4'>
                      <div className='h-10 w-10 flex-shrink-0 rounded-full bg-blue-100'></div>
                      <div className='flex flex-col'>
                        <span className='text-sm font-semibold text-slate-800'>Ali Yılmaz</span>
                        <span className='text-xs text-slate-500'>
                          Boğaziçi Üniversitesi Tıp Fakültesi, Türkiye 48.cisi
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mb-4 break-inside-avoid'>
              <div className='w-full overflow-hidden rounded-2xl bg-white'>
                <div className='flex h-full flex-col space-y-6'>
                  {/* Üst Bilgi */}
                  <div className='flex flex-col space-y-1 px-12 pt-10'>
                    <h3 className='text-2xl font-semibold text-slate-900'>
                      Matematik - Fonksiyonlar
                    </h3>
                    <div className='flex items-center space-x-3 text-sm text-slate-600'>
                      <span className='font-medium'>13 Nisan</span>
                      <span className='px-2 text-xs text-slate-400'>|</span>
                      <span>12:00 - 13:00</span>
                    </div>
                  </div>

                  {/* Konum ve Tür */}
                  <div className='flex items-center justify-between px-12'>
                    <span className='text-sm text-slate-500'>Espressolab, Ankara</span>
                    <div className='h-fit rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase text-green-700'>
                      Yüz Yüze
                    </div>
                  </div>

                  {/* Eğitmen */}
                  <div className='mt-auto flex flex-col items-center space-y-4 border-t px-12 pb-6 pt-4'>
                    <div className='flex w-full items-center space-x-4'>
                      <div className='h-10 w-10 flex-shrink-0 rounded-full bg-blue-100'></div>
                      <div className='flex flex-col'>
                        <span className='text-sm font-semibold text-slate-800'>Ali Yılmaz</span>
                        <span className='text-xs text-slate-500'>
                          Boğaziçi Üniversitesi Tıp Fakültesi, Türkiye 48.cisi
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='flex w-full flex-col items-center justify-center space-y-14 bg-slate-900 py-20'>
          <div className='flex max-w-screen-xl items-center justify-center space-x-10'>
            <div className='flex flex-1 space-x-6'>
              <div className='flex flex-col space-y-2 border-l-[1.5px] border-white pl-6'>
                <div className='text-6xl font-bold text-white'>1</div>
                <h4 className='text-xl font-semibold text-white'>Ders Hedeflerini Belirleyin</h4>
                <p className='text-base text-white'>
                  Kazanmak istediğiniz becerileri tanımlayın ve yol haritanızı oluşturun.
                </p>
              </div>
              <div className='flex flex-col space-y-2 border-l-[1.5px] border-white pl-6'>
                <div className='text-6xl font-bold text-white'>2</div>
                <h4 className='text-xl font-semibold text-white'>Eğitmeni Seçin</h4>
                <p className='text-base text-white'>
                  İhtiyaçlarınıza ve programınıza uygun eğitmeni bulun.
                </p>
              </div>
              <div className='flex flex-col space-y-2 border-l-[1.5px] border-white pl-6'>
                <div className='text-6xl font-bold text-white'>3</div>
                <h4 className='text-xl font-semibold text-white'>Ders Planınızı Takip Edin</h4>
                <p className='text-base text-white'>
                  Ders takviminizi görüntüleyin ve adım adım ilerleyin.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='flex w-full flex-col items-center justify-center space-y-20 bg-[#fff6ed] py-20'>
          <h2 className='text-4xl font-semibold text-slate-900'>Başarı Hikayelerimiz</h2>
          <div className='grid w-full max-w-screen-lg grid-cols-3 gap-8'>
            <div className='relative h-[430px] w-full overflow-hidden rounded-2xl bg-[#2F4B9A] p-4 shadow-none hover:shadow-lg'>
              <Image
                src={'/images/placeholder.svg'}
                className='object-cover'
                fill
                alt='placeholder'
              />
              <div className='absolute inset-0 flex h-full w-full flex-col items-start justify-end bg-gradient-to-t from-[#000000]/20 to-transparent px-4 py-5'>
                <h4 className='text-xl font-semibold text-white'>Bölüm 1</h4>
                <p className='text-sm text-white'>Test</p>
              </div>
            </div>
            <div className='relative h-[430px] w-full overflow-hidden rounded-2xl bg-[#2F4B9A] p-4 shadow-none hover:shadow-lg'>
              <Image
                src={'/images/placeholder.svg'}
                className='object-cover'
                fill
                alt='placeholder'
              />
              <div className='absolute inset-0 flex h-full w-full flex-col items-start justify-end bg-gradient-to-t from-[#000000]/20 to-transparent px-4 py-5'>
                <h4 className='text-xl font-semibold text-white'>Bölüm 1</h4>
                <p className='text-sm text-white'>Test</p>
              </div>
            </div>
            <div className='relative h-[430px] w-full overflow-hidden rounded-2xl bg-[#2F4B9A] p-4 shadow-none hover:shadow-lg'>
              <Image
                src={'/images/placeholder.svg'}
                className='object-cover'
                fill
                alt='placeholder'
              />
              <div className='absolute inset-0 flex h-full w-full flex-col items-start justify-end bg-gradient-to-t from-[#000000]/20 to-transparent px-4 py-5'>
                <h4 className='text-xl font-semibold text-white'>Bölüm 1</h4>
                <p className='text-sm text-white'>Test</p>
              </div>
            </div>
          </div>
        </section>

        <section className='flex w-full flex-col items-center justify-center space-y-20 bg-white py-20'>
          <h2 className='text-4xl font-semibold text-slate-900'>Sıkça Sorulan Sorular</h2>
          <Accordion type='single' collapsible className='w-full max-w-screen-lg'>
            <AccordionItem value='item-1'>
              <AccordionTrigger className='text-lg [&>svg]:h-6 [&>svg]:w-6'>
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger className='text-lg [&>svg]:h-6 [&>svg]:w-6'>
                Is it styled?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger className='text-lg [&>svg]:h-6 [&>svg]:w-6'>
                Is it animated?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className='flex w-full flex-col items-center justify-center space-y-20 bg-[#fff6ed] py-20'>
          <h2 className='text-4xl font-semibold text-slate-900'>Yorumlar</h2>
          <div className='w-full max-w-screen-lg columns-1 gap-4 space-y-4 [column-fill:_balance] sm:columns-2 md:columns-3'>
            <div className='mb-4 break-inside-avoid'>
              <div className='flex flex-col space-y-4 rounded-xl border bg-white px-10 py-8'>
                <div className='flex items-center space-x-4'>
                  <img
                    src='/images/placeholder.svg'
                    alt='İlayda Akdülger'
                    className='h-12 w-12 rounded-full'
                  />
                  <div>
                    <h3 className='text-base font-semibold'>İlayda Akdülger</h3>
                    <p className='text-sm text-gray-500'>@ilaydakdulger</p>
                  </div>
                </div>

                <div className='flex items-center space-x-0.5 text-yellow-400'>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className='h-4 w-4 fill-current'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                    >
                      <path d='M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.566-.955L10 0l2.946 5.955 6.566.955-4.756 4.635 1.122 6.545z' />
                    </svg>
                  ))}
                </div>

                <p className='text-sm leading-relaxed text-gray-700'>
                  Online randevu sistemi gerçekten mükemmel! Müşterilerimden randevu almamı çok
                  kolaylaştırdı. Planla'nın bu müthiş özellikleri sayesinde, müşterilerime hızlı bir
                  şekilde yanıt verebiliyorum ve randevularımı çok daha verimli bir şekilde
                  yönetebiliyorum. Planla'dan son derece memnunum ve herkese tavsiye ediyorum.
                </p>
              </div>
            </div>
            <div className='mb-4 break-inside-avoid'>
              <div className='flex flex-col space-y-4 rounded-xl border bg-white px-10 py-8'>
                <div className='flex items-center space-x-4'>
                  <img
                    src='/images/placeholder.svg'
                    alt='İlayda Akdülger'
                    className='h-12 w-12 rounded-full'
                  />
                  <div>
                    <h3 className='text-base font-semibold'>İlayda Akdülger</h3>
                    <p className='text-sm text-gray-500'>@ilaydakdulger</p>
                  </div>
                </div>

                <div className='flex items-center space-x-0.5 text-yellow-400'>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className='h-4 w-4 fill-current'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                    >
                      <path d='M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.566-.955L10 0l2.946 5.955 6.566.955-4.756 4.635 1.122 6.545z' />
                    </svg>
                  ))}
                </div>

                <p className='text-sm leading-relaxed text-gray-700'>
                  Online randevu sistemi gerçekten mükemmel! Müşterilerimden randevu almamı çok
                  kolaylaştırdı. Planla'nın bu müthiş özellikleri sayesinde, müşterilerime hızlı bir
                  şekilde yanıt verebiliyorum ve randevularımı çok daha verimli bir şekilde
                  yönetebiliyorum. Planla'dan son derece memnunum ve herkese tavsiye ediyorum.
                </p>
              </div>
            </div>
            <div className='mb-4 break-inside-avoid'>
              <div className='flex flex-col space-y-4 rounded-xl border bg-white px-10 py-8'>
                <div className='flex items-center space-x-4'>
                  <img
                    src='/images/placeholder.svg'
                    alt='İlayda Akdülger'
                    className='h-12 w-12 rounded-full'
                  />
                  <div>
                    <h3 className='text-base font-semibold'>İlayda Akdülger</h3>
                    <p className='text-sm text-gray-500'>@ilaydakdulger</p>
                  </div>
                </div>

                <div className='flex items-center space-x-0.5 text-yellow-400'>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className='h-4 w-4 fill-current'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                    >
                      <path d='M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.566-.955L10 0l2.946 5.955 6.566.955-4.756 4.635 1.122 6.545z' />
                    </svg>
                  ))}
                </div>

                <p className='text-sm leading-relaxed text-gray-700'>
                  Online randevu sistemi gerçekten mükemmel! Müşterilerimden randevu almamı çok
                  kolaylaştırdı.
                </p>
              </div>
            </div>
            <div className='mb-4 break-inside-avoid'>
              <div className='flex flex-col space-y-4 rounded-xl border bg-white px-10 py-8'>
                <div className='flex items-center space-x-4'>
                  <img
                    src='/images/placeholder.svg'
                    alt='İlayda Akdülger'
                    className='h-12 w-12 rounded-full'
                  />
                  <div>
                    <h3 className='text-base font-semibold'>İlayda Akdülger</h3>
                    <p className='text-sm text-gray-500'>@ilaydakdulger</p>
                  </div>
                </div>

                <div className='flex items-center space-x-0.5 text-yellow-400'>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className='h-4 w-4 fill-current'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                    >
                      <path d='M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.566-.955L10 0l2.946 5.955 6.566.955-4.756 4.635 1.122 6.545z' />
                    </svg>
                  ))}
                </div>

                <p className='text-sm leading-relaxed text-gray-700'>
                  Online randevu sistemi gerçekten mükemmel! Müşterilerimden randevu almamı çok
                  kolaylaştırdı.
                </p>
              </div>
            </div>
            <div className='mb-4 break-inside-avoid'>
              <div className='flex flex-col space-y-4 rounded-xl border bg-white px-10 py-8'>
                <div className='flex items-center space-x-4'>
                  <img
                    src='/images/placeholder.svg'
                    alt='İlayda Akdülger'
                    className='h-12 w-12 rounded-full'
                  />
                  <div>
                    <h3 className='text-base font-semibold'>İlayda Akdülger</h3>
                    <p className='text-sm text-gray-500'>@ilaydakdulger</p>
                  </div>
                </div>

                <div className='flex items-center space-x-0.5 text-yellow-400'>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className='h-4 w-4 fill-current'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                    >
                      <path d='M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.566-.955L10 0l2.946 5.955 6.566.955-4.756 4.635 1.122 6.545z' />
                    </svg>
                  ))}
                </div>

                <p className='text-sm leading-relaxed text-gray-700'>
                  Online randevu sistemi gerçekten mükemmel! Müşterilerimden randevu almamı çok
                  kolaylaştırdı.
                </p>
              </div>
            </div>
            <div className='mb-4 break-inside-avoid'>
              <div className='flex flex-col space-y-4 rounded-xl border bg-white px-10 py-8'>
                <div className='flex items-center space-x-4'>
                  <img
                    src='/images/placeholder.svg'
                    alt='İlayda Akdülger'
                    className='h-12 w-12 rounded-full'
                  />
                  <div>
                    <h3 className='text-base font-semibold'>İlayda Akdülger</h3>
                    <p className='text-sm text-gray-500'>@ilaydakdulger</p>
                  </div>
                </div>

                <div className='flex items-center space-x-0.5 text-yellow-400'>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className='h-4 w-4 fill-current'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                    >
                      <path d='M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.566-.955L10 0l2.946 5.955 6.566.955-4.756 4.635 1.122 6.545z' />
                    </svg>
                  ))}
                </div>

                <p className='text-sm leading-relaxed text-gray-700'>
                  Online randevu sistemi gerçekten mükemmel! Müşterilerimden randevu almamı çok
                  kolaylaştırdı.
                </p>
              </div>
            </div>
            <div className='mb-4 break-inside-avoid'>
              <div className='flex flex-col space-y-4 rounded-xl border bg-white px-10 py-8'>
                <div className='flex items-center space-x-4'>
                  <img
                    src='/images/placeholder.svg'
                    alt='İlayda Akdülger'
                    className='h-12 w-12 rounded-full'
                  />
                  <div>
                    <h3 className='text-base font-semibold'>İlayda Akdülger</h3>
                    <p className='text-sm text-gray-500'>@ilaydakdulger</p>
                  </div>
                </div>

                <div className='flex items-center space-x-0.5 text-yellow-400'>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className='h-4 w-4 fill-current'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                    >
                      <path d='M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.566-.955L10 0l2.946 5.955 6.566.955-4.756 4.635 1.122 6.545z' />
                    </svg>
                  ))}
                </div>

                <p className='text-sm leading-relaxed text-gray-700'>
                  Online randevu sistemi gerçekten mükemmel! Müşterilerimden randevu almamı çok
                  kolaylaştırdı. Planla'nın bu müthiş özellikleri sayesinde, müşterilerime hızlı bir
                  şekilde yanıt verebiliyorum ve randevularımı çok daha verimli bir şekilde
                  yönetebiliyorum. Planla'dan son derece memnunum ve herkese tavsiye ediyorum.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
