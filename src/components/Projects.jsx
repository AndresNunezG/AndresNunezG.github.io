import React from 'react';

import { projectsHeader, projectsData } from '../data';
import { CodeIcon, PlusIcon } from '@heroicons/react/outline';
import './styles/Projects.css';

export default function Projects (props) {
    const dataHeader = projectsHeader[props.language];
    const data = projectsData[props.language];
    return (
        <section id="projects">
            <div className="Projects__title-container">
                <CodeIcon className="Icon__projects"/>
                <h1 className="Projects__title">{dataHeader.title}</h1>
                <p className="Projects__subtitle">{dataHeader.content}</p>
            </div>
            <div className="Projects__list-container">
                {data.map((project) => (
                    <div key={project.title} className="ProjectItem__container">
                        <div className="ProjectItem__image">
                            <img
                             src={project.img}
                             alt={project.imgAlt}
                             className="ItemImage"
                            />
                        </div>
                        <div className="ProjectText__container">
                            <div className="ProjectItem__title">
                                <h2>{project.title}</h2>
                                <div className="ProjectItem__techs">
                                    {project.techs}
                                </div>
                            </div>
                            <div className="ProjectItem__content">
                                <p>{project.subtitle}</p>
                                <div className="SeeMore__container">
                                    <a href={project.link} target="_blank" rel="noreferrer">{dataHeader.seemore}</a>
                                    <PlusIcon className="Icon__semore"/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}