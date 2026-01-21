import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
     <div className="container">
    <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            style={{
                display: "block",
                margin: "0 auto"
            }}
            >
            <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
        <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item">
            <a className="nav-link" href="">
                <i className="fa-solid fa-house" /> <Link to="/"  style={{ color: "#f8f9fa", textDecoration:"none" }} >Home</Link> 
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="">
                <i className="fa-solid fa-phone" /> <Link to="/Contact"  style={{ color: "#f8f9fa", textDecoration:"none" }}>Contact</Link> 
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="">
                <i className="fa-solid fa-right-to-bracket" /> <Link to="/Login"  style={{ color: "#f8f9fa", textDecoration:"none" }}>Login</Link>
            </a>
            </li>
        </ul>
        </div>
     </div>
    </nav>
  )
}
export default Navbar 