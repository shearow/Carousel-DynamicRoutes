import { useState } from "react"
import "../styles/navbar.css"
import { NavLink } from "react-router-dom"

export const NavBar = () => {
    const [navActive, setNavActive] = useState(false);

    return (
        <>
        <div className="nav-bar">
            <div className="nav-bar-container container">
                <div className="nav-logo">
                    <NavLink to="/"><img src="../src/assets/img/logo-nav.jpg" alt="logo" /></NavLink>
                </div>
                <div className="nav-burger" onClick={() => setNavActive(!navActive)}>
                    {navActive ? <i className="fa-solid fa-rectangle-xmark close-nav-i"/>
                               : <i className="fa-solid fa-bars-staggered open-nav-i" />}
                    
                </div>
                <nav className={navActive ? "active" : ""}>
                    <ul>
                        <li><NavLink to="/home" onClick={() => setNavActive(false)}>Home</NavLink></li>
                        <li><NavLink to="/about" onClick={() => setNavActive(false)}>About</NavLink></li>
                        <li><NavLink to="/shopp" onClick={() => setNavActive(false)}>Shopp Store</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
        </>
    )
}