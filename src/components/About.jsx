import React from 'react';
import useTypeEffect from '../hooks/useTypeEffect';

import { aboutData } from '../data'
import DevImgLight from '../images/AboutDeveloperLight.svg'
import DevImgDark from '../images/AboutDeveloperDark.svg'
import './styles/About.css';

export default function About (props) {
    const data = aboutData[props.language];
    const speed = 170;
    const textEffect = useTypeEffect(data.title, speed, props.language)
    return (
        <section id="about">
            <div className="About__container">
                <div className="About__text">
                    <div className="AboutTitle__container">
                        <h1 className="About__title">{textEffect}</h1>
                    </div>
                    <p className="About__content">{data.content}</p>
                </div>
                <div className="About__image">
                    <img src={props.theme ? DevImgLight : DevImgDark} alt="illustration developer" />
                </div>
            </div>
        </section>
    )
}