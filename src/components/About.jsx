import React, { useEffect, useState } from 'react';

import { aboutData } from '../data'
import DevImg from '../images/AboutDeveloper.svg'
import './styles/About.css';

export default function About (props) {
    const data = aboutData[props.language];
    const [title, setTitle] = useState('');
    const [counter, setCounter] = useState(0);
    const speed = 120;
    const titleData = data.title;
    useEffect(() => {
        setTimeout(() => {
            if (counter < titleData.length) {
                setCounter(counter => counter + 1);
                setTitle(title + titleData.charAt(counter))
            }
        }, speed);
    }, [title]);
    useEffect(() => {
        setTitle('');
        setCounter(0);
    }, [props.language]);
    return (
        <section id="about">
            <div className="About__text">
                <h1 className="About__title">{title}</h1>
                <p className="About__content">{data.content}</p>
            </div>
            <div className="About__image">
                <img src={DevImg} alt="illustration developer" />
            </div>
        </section>
    )
}