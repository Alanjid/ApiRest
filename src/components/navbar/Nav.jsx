import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = ({disable}) => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                <a class="navbar-brand me-2" href="#">
                    <img
                    src="images/LogoMyTEAPony.png"
                    height="40"
                    alt="MyTEAPony Logo"
                    loading="lazy"
                    style={{marginTop: "-1px;"}}
                    />
                </a>

                <button
                    class="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarButtonsExample"
                    aria-controls="navbarButtonsExample"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i class="fas fa-bars"></i>
                </button>

                <div class="collapse navbar-collapse" id="navbarButtonsExample">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#"></a>
                    </li>
                    </ul>

                    <div class="d-flex align-items-center">
                    <button type="button" class="btn btn-outline-primary me-3">PACIENTES</button>
                    <button type="button" class="btn btn-outline-primary me-3">ACTIVIDADES</button>
                    <a class="navbar-brand me-2" href="#">
                        <img
                        src="images/icon.png"
                        height="40"
                        alt="MyTEAPony Logo"
                        loading="lazy"
                        style={{marginTop: "-1px;"}}
                        />
                    </a>
                    </div>
                </div>
                </div>
            </nav>
        </div>
    )
}


export default Nav
