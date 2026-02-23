import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './pages/Navbar'
import { Footer } from './pages/Footer'

export const Layout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
