import React from 'react';

export default function (props) {
    return (
        <section id="Contact">
            <form>
                <label for="name"></label>
                <input
                 name="name"
                 type="text"
                 placeholder="LANG">
                </input>
                <label for="email"></label>
                <input
                 name="email"
                 type="email">
                 </input>
                <label for="message"></label>
                <input
                 name="message"
                 type="text"
                 placeholder="LANG">
                </input>
            </form>
        </section>
    )
}