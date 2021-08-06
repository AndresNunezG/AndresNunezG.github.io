import React from 'react';

import { contactData } from '../data';
import { ShieldCheckIcon } from '@heroicons/react/outline';
import './styles/Contact.css';

export default function Contact (props) {
    const data = contactData[props.language]
    return (
        <section id="contact">
            <div className="ContactText__container">
                <h1 className="ContactText__title">{data.title}</h1>
                <p className="ContactText__subtitle">{data.subtitle}</p>
                <div className="Warning__container">
                    <ShieldCheckIcon className="Icon__warning" />
                    <p className="ContactText__warning">
                        &nbsp;{data.warning}
                    </p>
                </div>
            </div>
            <div className="ContactForm__container">
                <form className="ContactForm" autoComplete="off">
                    <input
                    className="InputForm"
                    name="name"
                    type="text"
                    autoComplete="off"
                    placeholder={data.name}>
                    </input>
                    <input
                    className="InputForm"
                    name="email"
                    type="email"
                    autoComplete="off"
                    placeholder={data.email}>
                    </input>
                    <textarea
                    className="InputForm MessageBox"
                    name="message"
                    type="text"
                    autoComplete="off"
                    placeholder={data.message}>
                    </textarea>
                    <button
                     className="SubmitButton"
                     type="button">{data.submit}</button>
                </form>
            </div>
        </section>
    )
}