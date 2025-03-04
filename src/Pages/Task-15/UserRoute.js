import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const UserRoute = () => {
    let auth = localStorage.getItem('isLogin')
    return (
        auth ? 
        <Outlet /> : <Navigate to="/" />
    )
}

export default UserRoute;