import React from 'react';

import './styles/Navbar.css'

export default function Navbar () {
    return(
        <header className="Navbar__container">
            <div className="Navbar__name">
                <h1 className="Navbar__firstname">Andr&eacute;s&nbsp;</h1>
                <h1 className="Navbar__lastname">N&uacute;ñez</h1>
            </div>
            <div className="Navbar">
                <div className="Navbar__left">
                    <a href='about'>About</a>
                    <a href='projects'>Projects</a>
                    <a href='techstack'>Techstack</a>
                </div>
                <div className="Navbar__right">
                    <a href="contact">Contact</a>
                </div>
            </div>
        </header>
    )
}