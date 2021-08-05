import React from 'react';

import { aboutData } from '../data'
import './styles/About.css';

export default function About (props) {
    const data = aboutData[props.language];
    return (
        <section id="about">
            <div className="About__text">
                <h1 className="About__title">{data.title}</h1>
                <p className="About__content">{data.content}</p>
            </div>
            <div className="About__image">

            </div>
        </section>
    )
}