import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">Join My Course</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="w-50 me-5" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="btn btn-primary me-5" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="btn btn-success me-5" to="/admin">Admin</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="btn btn-warning me-5" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="btn btn-secondary me-5" to="/career">Career</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="btn btn-info me-5" to="/studentlogin">Student Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Navbar
