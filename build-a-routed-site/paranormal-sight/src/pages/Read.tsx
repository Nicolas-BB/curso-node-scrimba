import { Story } from '../components/Story.tsx'
import { stories } from '../data/stories.ts'
import styles from './Read.module.css'

export function Read() {
    return (
        <main className={styles.main}>
            <h1 className={styles.h1}>SIGHTINGS</h1>
            <section className={styles.storiesList}>
                {stories.map((item) => (
                    <Story key={item.id} date={item.date} location={item.location} title={item.title} body={item.body} />
                ))}
            </section>
        </main>
    )
}
