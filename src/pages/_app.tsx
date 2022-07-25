import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { DefaultSeo } from 'next-seo'

import '@fontsource/montserrat/300.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'
import 'slick-carousel/slick/slick.css'

import { GlobalStyles } from 'styles/global'
import { error, success } from 'config/toast'
import SEO from '../config/next-seo.config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <Component {...pageProps} />
      <Toaster toastOptions={{ success, error }} position="top-right" />
    </>
  )
}

export default MyApp
