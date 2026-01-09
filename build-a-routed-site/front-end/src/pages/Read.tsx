import { useEffect, useState } from 'react'
import { Story } from '../components/Story.tsx'
import { Loading } from '../components/Loading.tsx'
import styles from './Read.module.css'

export function Read() {
    const [stories, setStories] = useState<any[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        const headers = new Headers({
            'Content-Type': 'application/json'
        })

        const fetchParams = {
            method: 'GET',
            headers: headers
        }

        fetch('http://localhost:8000/api', fetchParams)
            .then(res => res.json())
            .then(data => {
                setStories(data)
            })
            .finally(() => {
                setLoading(false)
            })

        console.log(stories)
    }, [])

    return (
        <main className={styles.main}>
            <h1 className={styles.h1}>SIGHTINGS</h1>
            <section className={styles.storiesList}>
                {loading ? <Loading /> : stories.map((item) => (
                    <Story key={item.id} date={item.date} location={item.location} title={item.title} body={item.body} />
                ))}
            </section>
        </main>
    )
}
