import styles from './Story.module.css'

type StoryProps = {
    date: string;
    location: string;
    title: string;
    body: string;
}

export function Story({ date, location, title, body }: StoryProps) {
    return (
        <article className={styles.article}>
            <span>{date}, {location}</span>
            <h2>{title}</h2>
            <p>{body}</p>
        </article>
    )
}
