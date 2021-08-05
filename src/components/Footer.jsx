import React from 'react';

import { footerData } from '../data';
import './styles/Footer.css'

export default function Footer (props) {
    const data = footerData[props.language]
    return (
        <section id="Footer">
            <div className="Footer__container">
                <div className="Footer__left">
                    <p>{data.rights}</p>
                    <a href="https://storyset.com/work">
                        Work illustrations by Storyset
                    </a>
                </div>
                <div className="Footer__right">
                    <a href="https://github.com/AndresNunezG" target="_blank">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/andresnunezg/" target="_blank">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}