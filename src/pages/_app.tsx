import '../styles/global.css'
import 'katex/dist/katex.css'
import Header from '../components/header'
import Footer from '../components/footer'
import appStyle from '../styles/app.module.css'

export default ({ Component, pageProps }) => (
  <div className={appStyle.app}>
    <div className={appStyle.header}>
      <Header />
    </div>
    <main className={appStyle.main}>
      <Component {...pageProps} />
    </main>
    <div className={appStyle.footer}>
      <Footer />
    </div>
  </div>
)
