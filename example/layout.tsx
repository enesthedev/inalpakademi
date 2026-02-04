import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { PropsWithChildren } from 'react'
import { routing } from '../features/i18n/routing'
import { Locale } from '../features/i18n/types'

import { Geist, Poppins } from 'next/font/google'

import { NextIntlClientProvider } from 'next-intl'

import '../globals.css'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin-ext'],
  display: 'swap',
  variable: '--font-poppins'
})

const geist = Geist({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin-ext'],
  display: 'auto',
  variable: '--font-geist'
})

export type DynamicRootLayoutProps = {
  params: {
    locale: string
  }
}

export default async function DynamicRootLayout(
  props: PropsWithChildren<Readonly<DynamicRootLayoutProps>>
) {
  const { locale } = await props.params

  if (!routing.locales.includes(locale as Locale)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={`font-sans ${geist.variable} ${poppins.variable}`}>
        <NextIntlClientProvider messages={messages}>{props.children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
