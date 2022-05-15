import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="google-site-verification"
          content="K_pPeGKApk94IcoK4yBsUlZo2qbRkuDENbxfu6WOVp4"
        />
        <meta description="Chào các bạn, mình là Trịnh Cao Cường - một người thích khám phá thế giới của câu lệnh. Blog này là nơi mình chia sẻ những kiến thức và trải nghiệm của mình." />
        <meta name="geo.region" content="VN-HN" />
        <meta name="geo.placename" content="Hanoi" />
        <meta name="geo.position" content="21.004296;105.843723" />
        <meta name="ICBM" content="21.004296, 105.843723" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
