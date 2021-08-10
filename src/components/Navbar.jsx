import React, { useState } from 'react';

import { navbarData } from '../data.js';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import './styles/Navbar.css';

export default function Navbar (props) {
    const data = navbarData[props.language];
    const [menuMobile, setMenuMobile] = useState(false);
    const handleMobileMenu = () => {
        const mobileMenu = document.getElementById("MobileMenu");
        if (mobileMenu.style.display === "flex") {
            mobileMenu.style.display = "none";
            setMenuMobile(false);
        } else {
            mobileMenu.style.display = "flex";
            setMenuMobile(true);
        }
    };
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
                    <a href="#blog">{data.blog}</a>
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
                    <div>
                        <button type="button" className="Icon__MobileMenu" onClick={handleMobileMenu}>
                            {menuMobile ? <XIcon /> : <MenuIcon />}
                        </button>
                    </div>
                    <div id="MobileMenu" className="MobileMenu__ddList">
                        <ul>
                            <li>
                                <a href='#about'>{data.about}</a>
                            </li>
                            <li>
                                <a href='#projects'>{data.projects}</a>
                            </li>
                            <li>
                                <a href='#techstack'>{data.techstack}</a>
                            </li>
                            <li>
                                <a href="#contact">{data.contact}</a>
                            </li>
                            <li>
                                <a href="#blog">{data.blog}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}