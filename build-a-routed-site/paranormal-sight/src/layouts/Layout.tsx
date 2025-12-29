import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header.tsx'
import { Footer } from '../components/Footer.tsx'

export function Layout() {
    return (
        <div className='container'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
