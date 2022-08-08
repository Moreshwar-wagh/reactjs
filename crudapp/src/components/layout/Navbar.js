import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div>
            <header>
                <nav className="navbar">
                    <ul>
                        <li><Link to="/"><b>Home</b></Link></li>
                        <li><Link to="/about"><b>About</b></Link></li>
                        <li><Link to="/contact"><b>Contact Us</b></Link></li>
                        <div className="search">
                            <input type="text" className="search" placeholder="Search" />
                        </div>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;