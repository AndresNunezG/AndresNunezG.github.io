import React, { useEffect, useState } from 'react';

import { aboutData } from '../data'
import DevImg from '../images/AboutDeveloper.svg'
import './styles/About.css';

const useTypeEffect = (text, speed) => {
    const hola = '';
};

export default function About (props) {
    const data = aboutData[props.language];
    const [title, setTitle] = useState('');
    const [counter, setCounter] = useState(0);
    const speed = 120;
    useEffect(() => {
        setTimeout(() => {
            if (counter < data.title.length) {
                setCounter(counter => counter + 1);
                setTitle(title + data.title.charAt(counter))
            }
        }, speed);
    }, [title]); // eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        setTitle('');
        setCounter(0);
    }, [props.language]);
    return (
        <section id="about">
            <div className="About__text">
                <div className="AboutTitle__container">
                    <h1 className="About__title">{title}</h1>
                </div>
                <p className="About__content">{data.content}</p>
            </div>
            <div className="About__image">
                <img src={DevImg} alt="illustration developer" />
            </div>
        </section>
    )
}