import { Footer } from '../components/Footer.tsx'
import styles from './Home.module.css'

export function Home() {
    return (
        <>
            <main className={styles.main}>
                <h1 className={styles.h1}>FROM THE<br />OTHER SIDE</h1>
                <h2 className={styles.h2}>THE ONLINE HOME<br />OF PARANORMAL<br />SIGHTINGS</h2>
            </main>
            <Footer />
        </>
    )
}
