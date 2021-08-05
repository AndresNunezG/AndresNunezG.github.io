import React from 'react';

import { aboutData } from '../data'
import './styles/About.css';

export default function About () {
    const data = aboutData[0];
    return (
        <section id="about">
            <div>
                <h1>{data.title}</h1>
                <p>{data.content}</p>
            </div>
        </section>
    )
}