import styles from '../styles/page.module.css'
import HomePage from './(sections)/home'
import AboutPage from './(sections)/about'
import NavBar from '../components/navBar'
import GalleryPage from './(sections)/gallery'
import ContactPage from './(sections)/contact'
import Link from 'next/link'

let copyright = String.fromCodePoint(0x00A9);

export default function App() {
    return (
        <div>
            <main className={styles.main}>
                <NavBar />
                <HomePage />
                <br/>
                <AboutPage />
                <br />
                <GalleryPage />
                <br />
                <ContactPage></ContactPage>
            </main>
            <footer className={styles.footer}>
                Copyright {copyright}.&nbsp;
                <Link href='github.com' className={styles.copyrightLink}>Designed and developed by Joshua Ho.</Link>&nbsp;
                {new Date().getFullYear()}.
            </footer>
        </div>
  )
}
 