import React from 'react';

import { projectsHeader, projectsData } from '../data';
import { CodeIcon } from '@heroicons/react/outline';
import './styles/Projects.css'

export default function Projects (props) {
    const dataHeader = projectsHeader[props.language]
    const data = projectsData[props.language]
    return (
        <section id="projects">
            <div className="Projects__title">
                <CodeIcon className="Icon__projects"/>
                <h1 className="Main__title">{dataHeader.title}</h1>
                <p className="Subtitle__title">{dataHeader.content}</p>
            </div>
        </section>
    )
}