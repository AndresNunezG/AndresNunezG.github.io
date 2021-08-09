import React from 'react';

import { navbarData } from '../data.js';
import { SunIcon } from '@heroicons/react/outline'
import { MoonIcon } from '@heroicons/react/outline';
import { MenuIcon } from '@heroicons/react/outline';
import './styles/Navbar.css';

export default function Navbar (props) {
    const data = navbarData[props.language];
    return (
        <header className="Navbar__container">
            <div className="Navbar__name">
                <h1 className="Navbar__firstname">Andr&eacute;s&nbsp;</h1>
                <h1 className="Navbar__lastname">N&uacute;ñez</h1>
            </div>
            <div className="Navbar">
                <div className="Navbar__left">
                    <a href='#about'>{data.about}</a>
                    <a href='#projects'>{data.projects}</a>
                    <a href='#techstack'>{data.techstack}</a>
                    <a href="#contact">{data.contact}</a>
                </div>
                <div className="Navbar__right">
                    <button onClick={props.onClickLeng} className="Leng__button" type="button">
                        <h3>
                            {props.language ? "EN" : "ES"}
                        </h3>
                    </button>
                    <button onClick={props.onClickTheme} className="Theme__button" type="button">
                        {props.theme ? <MoonIcon className="Icon__theme" /> : <SunIcon className="Icon__theme" />}
                    </button>
                </div>
                <div className="MobileMenu__container">
                    <MenuIcon />
                </div>
            </div>
        </header>
    )
}