import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header.tsx'

export function Layout() {
    return (
        <div className='container'>
            <Header />
            <Outlet />
        </div>
    )
}
