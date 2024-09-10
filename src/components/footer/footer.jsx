
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="main-footer">
                <div className="container">
                    <div className="row">

                        <div className="col">
                            <h4>Atencion al cliente</h4>
                            <ul className="listado">
                                <li><a href="#">Seguimiento Del Producto</a></li>
                                <li><a href="#">Seguridad De Cuenta</a></li>
                                <li><a href="#">Centro de seguridad</a></li>
                            </ul>
                        </div>

                        <div className="col">

                            <h4>Redes sociales</h4>
                            <ul className="listado">
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">WhatApp</a></li>

                            </ul>
                        </div>

                        <div className="col">
                            <h4>PRODUCTOS</h4>
                            <ul className="listado">
                                <li><a href="#">Calzados</a></li>
                                <li><a href="#">ROPA</a></li>
                                <li><a href="#">ACCESORIOS</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <p className="col-sm">
                           OLIMPIC SPORTS | Todos los derechos reservados
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}


export default Footer;
