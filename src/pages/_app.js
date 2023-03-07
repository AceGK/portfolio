import '../styles/globals.scss';
import '../../public/icons/style.scss';
import Layout from '../components/Layout';
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider themes={['light', 'dark', 'crt']}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp

