import { Link } from 'react-router-dom'
import logo from '../../public/images/candle-logo.png'
import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link to='/'><img src={logo} alt="Logo" /></Link>
                <ul className={styles.ul}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/read'>Read</Link>
                    </li>
                    <li>
                        <Link to='/upload'>Upload</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
