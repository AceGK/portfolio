import '../styles/globals.scss';
import '../../public/icons/style.scss';
import Layout from '../components/Layout';
import { ThemeProvider } from 'next-themes'

// import localFont from '@next/font/local'
// const Orbiton = localFont({src: '../../public/fonts/Orbitron-Regular.woff'})
// const Source = localFont({src: '../../public/fonts/SourceCodePro-Regular.woff'})
// const UnitedKingdom = localFont({src: '../../public/fonts/UnitedKingdom.woff'})


function MyApp({ Component, pageProps }) {
  return (
    // <main className={Orbiton.className}>
      <ThemeProvider themes={['light', 'dark', 'crt']}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    // </main>
  )
}

export default MyApp

