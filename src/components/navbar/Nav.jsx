import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/Fa";

const Nav = ({disable}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div>
            <nav>
                <Link to="/" className="title">
                    <div className="container">
                        <img
                        src="images/LogoMyTEAPony.png"
                        height="40"
                        alt="MyTEAPony Logo"
                        loading="lazy"
                        style={{marginTop: "-1px;"}}
                        />
                    </div>
                </Link>
                <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <li>
                    <a href='./'><button type="button" className="btn btn-outline-primary me-3">PACIENTES</button></a>
                    </li>
                    <li>
                    <a href=''><button type="button" className="btn btn-outline-primary me-3">ACTIVIDADES</button></a>
                    </li>
                    <li>
                    <a className="navbar-brand me-2" href="#" style={{paddingTop: "0.5rem"}}>
                        <img
                        src="images/icon.png"
                        height="40"
                        alt="MyTEAPony Logo"
                        loading="lazy"
                        style={{marginTop: "-1px;"}}
                        />
                    </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}


export default Nav
