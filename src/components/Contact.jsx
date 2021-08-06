import React from 'react';

import { contactData } from '../data';
import './styles/Contact.css'

export default function (props) {
    const data = contactData[props.language]
    return (
        <section id="contact">
            <div className="ContactText__container">
                <h1>Contact me</h1>
            </div>
            <div className="ContactForm__container">
                <form className="ContactForm" autocomplete="off">
                    <input
                    className="InputForm"
                    name="name"
                    type="text"
                    autocomplete="off"
                    placeholder={data.name}>
                    </input>
                    <input
                    className="InputForm"
                    name="email"
                    type="email"
                    autocomplete="off"
                    placeholder={data.email}>
                    </input>
                    <input
                    className="InputForm"
                    name="message"
                    type="text"
                    autocomplete="off"
                    placeholder={data.message}>
                    </input>
                    <button
                     className="SubmitButton"
                     type="button">{data.submit}</button>
                </form>
            </div>
        </section>
    )
}