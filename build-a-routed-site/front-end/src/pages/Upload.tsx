import styles from './Upload.module.css'

export function Upload() {
    const teste = (e: any) => {
        e.preventDefault()

        const form = e.currentTarget
        const title = form.title.value
        const date = form.date.value
        const location = form.location.value
        const body = form.body.value

        console.log({ title, date, location, body })
    }

    return (
        <main className={styles.main}>
            <h1>Adicionar avistamento</h1>
            <form className={styles.form} onSubmit={(e) => teste(e)}>
                <div>
                    <label className={styles.label}>
                        Título:
                        <input
                            type="text"
                            name="title"
                            id="title"
                            placeholder='Um encontro sinistro'
                        />
                    </label>
                    <label className={styles.label}>
                        Data/Hora:
                        <input
                            type="datetime-local"
                            name="date"
                            id="date"
                        />
                    </label>
                    <label className={styles.label}>
                        Local:
                        <input
                            type="text"
                            name="location"
                            id="location"
                            placeholder='Ivaiporã, PR'
                        />
                    </label>
                    <label className={`${styles.label} ${styles.detailsLabel}`}>
                        Detalhes:
                        <textarea
                            className={styles.detailsInput}
                            name="body"
                            id="body"
                            placeholder='Eu estava caminhando na rua à noite quando...'
                        />
                    </label>
                </div>
                <button>Enviar relato</button>
            </form>
        </main>
    )
}
