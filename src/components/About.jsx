import React from 'react';
import useTypeEffect from '../hooks/useTypeEffect';

import { aboutData } from '../data'
import DevImg from '../images/AboutDeveloper.svg'
import './styles/About.css';

export default function About (props) {
    const data = aboutData[props.language];
    const speed = 120;
    const textEffect = useTypeEffect(data.title, speed, props.language)
    return (
        <section id="about">
            <div className="About__text">
                <div className="AboutTitle__container">
                    <h1 className="About__title">{textEffect}</h1>
                </div>
                <p className="About__content">{data.content}</p>
            </div>
            <div className="About__image">
                <img src={DevImg} alt="illustration developer" />
            </div>
        </section>
    )
}