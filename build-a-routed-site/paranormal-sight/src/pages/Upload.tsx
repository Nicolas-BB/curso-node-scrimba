import styles from './Upload.module.css'

export function Upload() {
    return (
        <main className={styles.main}>
            <h1>Adicionar avistamento</h1>
            <form className={styles.form}>
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
                    <label className={styles.label}>
                        Detalhes:
                        <textarea
                            className={styles.detailsInput}
                            name="details"
                            id="details"
                            placeholder='Eu estava caminhando na rua à noite quando...'
                        />
                    </label>
                </div>
                <button>Enviar relato</button>
            </form>
        </main>
    )
}
