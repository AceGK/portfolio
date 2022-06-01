import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link 
            rel="preload"
            href="/public/fonts/UnitedKingdom"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link 
            rel="preload"
            href="/public/fonts/Orbitron-Regular"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link 
            rel="preload"
            href="/public/fonts/SourceCodePro-Regular"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument