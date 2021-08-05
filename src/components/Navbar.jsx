import React from 'react';

import { navbarData } from '../data.js';
import { SunIcon } from '@heroicons/react/outline'
import './styles/Navbar.css';

export default function Navbar () {
    const data = navbarData[1];
    return (
        <header className="Navbar__container">
            <div className="Navbar__name">
                <h1 className="Navbar__firstname">Andr&eacute;s&nbsp;</h1>
                <h1 className="Navbar__lastname">N&uacute;ñez</h1>
            </div>
            <div className="Navbar">
                <div className="Navbar__left">
                    <a href='about'>{data.about}</a>
                    <a href='projects'>{data.projects}</a>
                    <a href='techstack'>{data.techstack}</a>
                    <a href="contact">{data.contact}</a>
                </div>
                <div className="Navbar__right">
                    <button type="button">
                        <h4>EN</h4>
                    </button>
                    <SunIcon className="Icon__sun" />
                </div>
            </div>
        </header>
    )
}