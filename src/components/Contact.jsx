import React from 'react';
import emailjs from 'emailjs-com'

import { contactData } from '../data';
import { ShieldCheckIcon } from '@heroicons/react/outline';
import './styles/Contact.css';

export default function Contact (props) {
    const data = contactData[props.language];
    const handleClickEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_mfzvvr1', 'template_nyrqewl', '#EmailJS', 'user_W2UueZCBcwEXPfVQrHSV0')
         .then(result => console.log(result.text))
         .catch(error => console.log(error));
    };
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
                <form id="EmailJS" className="ContactForm" autoComplete="off">
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
                    maxLength="1000"
                    placeholder={data.message}>
                    </textarea>
                    <button
                     className="SubmitButton"
                     type="button"
                     onClick={handleClickEmail}>
                    {data.submit}
                    </button>
                </form>
            </div>
        </section>
    )
}