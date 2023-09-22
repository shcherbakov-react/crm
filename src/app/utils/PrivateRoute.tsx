import { Navigate, Outlet } from 'react-router-dom'

export function PrivateRoute() {
    return localStorage.getItem('login') != null ? (
        <Outlet />
    ) : (<Navigate to='/' />)
}