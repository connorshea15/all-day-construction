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
        <div className="row">
            <div className="col-xl-1 col-xs-12">
                <h1 className="content-title">Contact Us</h1>
            </div>
            <div className="col-xl-11 col-xs-12">
                <h4>We Would Love to Hear from You!</h4>
                <form className="mx-auto">
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Name</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
}


export default Contact;