import '../styles/global.css'
import 'katex/dist/katex.css'
import Header from '../components/header'
import Footer from '../components/footer'
import appStyle from '../styles/app.module.css'
import styles from '../styles/header.module.css'

export default ({ Component, pageProps }) => (
  <>
    <Header />
    <div className={appStyle.app}>
      <div className={appStyle.header}>
        <header className={styles.header}>
          <div className={styles.spacer} />
          <h1 className={styles.title}>Agumy Blog</h1>
          <div className={styles.info} />
        </header>
      </div>
      <main className={appStyle.main}>
        <Component {...pageProps} />
      </main>
      {/* <div className={appStyle.footer}>
      <Footer />
    </div> */}
    </div>
  </>
)
