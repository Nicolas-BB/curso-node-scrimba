import { useEffect, useRef, useState } from 'react';
import styles from './Story.module.css'

type StoryProps = {
    date: string;
    location: string;
    title: string;
    body: string;
}

export function Story({ date, location, title, body }: StoryProps) {
    const [button, setButton] = useState(false)
    const [expand, setExpand] = useState(false)
    const bodyRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        const el = bodyRef.current

        if (!el) return

        setButton(el.scrollHeight > el.clientHeight)
    }, [])

    return (
        <article className={styles.article}>
            <span>{date}, {location}</span>
            <h2>{title}</h2>
            <p
                className={!expand ? styles.body : undefined}
                ref={bodyRef}
            >
                {body}
            </p>

            {button && (
                <button onClick={() => setExpand(v => !v)}>
                    {expand ? 'Ler menos' : 'Ler mais'}
                </button>
            )}
        </article>
    )
}
