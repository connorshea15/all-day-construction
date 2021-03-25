import React, { useState } from 'react'

function Contact() {
    // const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // const { name, email, message } = formState;
    // const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        console.log("Change gone come!");
        console.log("Yes it will!");
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Submitted!');
    }

    return (
        <section className="content">
            <h1 data-testid="contact-h1">Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" onBlur={handleChange} />
                </div>
                <button data-testid="contact-button" type="submit">Submit</button>
            </form>
        </section>
    );
}


export default Contact;