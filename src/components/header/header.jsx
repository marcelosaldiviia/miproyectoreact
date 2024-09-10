import React from 'react';
import './header.css/.'

const Header = () => {

    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">

                    <a className="navbar-brand" href="#">OLIMPIC SPORTS</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">SECCIONES</a>
                            </li>


                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">

                                    ROPA

                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">Hombre</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Mujer</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Niños</a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    CALZADO
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">Running</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Futbol</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Baloncesto</a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    MUJER
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">Conjuntos</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Calzado</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Accesorios</a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    HOMBRE
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">Conjuntos</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Calzado</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Accesorios</a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    NIÑOS
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">Ropa Niño/a</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Calzado</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Accesorios</a>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}


export default Header;

