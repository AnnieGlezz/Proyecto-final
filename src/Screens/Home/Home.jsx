import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar'

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Outlet />
            <h1>Aqui va a ir el footer</h1>
        </div>
    )
}

export default Home
