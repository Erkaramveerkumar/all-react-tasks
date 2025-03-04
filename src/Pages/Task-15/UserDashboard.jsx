import React from 'react'
import logo from '../../assets/Images/pngwing.com.png'
import { useNavigate } from 'react-router-dom'
const UserDashboard = () => {
    const navigate = useNavigate()
    const logout = () => {
        // localStorage.clear();
        localStorage.removeItem('isLogin');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userData');
        navigate('/loginform');
    }
    return (
        <>
            <>
                {/* Main Container */}
                <div className="d-flex" style={{ height: "100vh" }}>
                    {/* Sidebar */}
                    <div
                        className="bg-dark text-white p-3 d-flex flex-column flex-shrink-0"
                        style={{ width: 250 }}
                    >
                        <h4 className="text-center mb-4">Dashboard</h4>
                        <hr className="text-secondary" />
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a
                                    className="nav-link text-white active"
                                    aria-current="page"
                                    href="#"
                                >
                                    <i className="bi bi-house-door me-2" />
                                    Home
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a className="nav-link text-white" href="#">
                                    <i className="bi bi-person me-2" />
                                    Profile
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a className="nav-link text-white" href="#">
                                    <i className="bi bi-gear me-2" />
                                    Settings
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a className="nav-link text-white" href="#">
                                    <i className="bi bi-envelope me-2" />
                                    Messages
                                </a>
                            </li>
                            <li className="nav-item mt-auto">
                                <a className="nav-link text-danger" href="#" onClick={logout}>
                                    <i className="bi bi-box-arrow-right me-2" />
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Main Content */}
                    <div className="flex-grow-1">
                        {/* Navbar */}
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarContent"
                                    aria-controls="navbarContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarContent">
                                    <div className='ms-auto me-3'>
                                    <img src= {logo} alt="logo" className='' style={{width : '50px', height : '50px' , borderRadius : '50%'}} />
                                    </div>
                                </div>
                            </div>
                        </nav>
                        {/* Content Section */}
                        <div className="container my-4">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Profile</h5>
                                            <p className="card-text">Manage your personal information.</p>
                                            <a href="#" className="btn btn-primary">
                                                Go to Profile
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Settings</h5>
                                            <p className="card-text">Update your preferences.</p>
                                            <a href="#" className="btn btn-primary">
                                                Go to Settings
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Messages</h5>
                                            <p className="card-text">Check your inbox.</p>
                                            <a href="#" className="btn btn-primary">
                                                Go to Messages
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Dashboard Overview Section */}
                            <div className="row mt-4">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Dashboard Overview</h5>
                                            <p className="card-text">Summary of your recent activities:</p>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="card text-center bg-light mb-3">
                                                        <div className="card-body">
                                                            <h6 className="card-title">Tasks Completed</h6>
                                                            <h3 className="text-success">24</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="card text-center bg-light mb-3">
                                                        <div className="card-body">
                                                            <h6 className="card-title">Messages Received</h6>
                                                            <h3 className="text-primary">8</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="card text-center bg-light mb-3">
                                                        <div className="card-body">
                                                            <h6 className="card-title">Profile Views</h6>
                                                            <h3 className="text-warning">120</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#" className="btn btn-secondary mt-2">
                                                View Detailed Report
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </>
    )
}

export default UserDashboard