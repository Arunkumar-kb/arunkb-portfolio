import React, { useRef } from 'react'
import '../styles/contact.css'
import emailjs from '@emailjs/browser'
const Contact = () => {
    const form = useRef();
    const serviceId = import.meta.env.VITE_Email_Service_Id;     
    const templateId = import.meta.env.VITE_Email_Template_Id;
    const APIKey = import.meta.env.VITE_Email_API_Key;

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            serviceId,//service id emailjs
            templateId,//template id 
            form.current,
            APIKey//api key
        )
            .then(
                (result) => {
                    console.log(result);
                    alert('message send successfully');
                    form.current.reset();
                },
                (error) => {
                    alert('failed to send message, try again later')
                    console.log(error.text);
                }
            )

    }
    return (
        <section className='contact' id='contact'>
            <div className='container'>
                <div className='heading'>
                    <h1>contact</h1>
                    <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='contact-info'>

                        <div>
                            <label>Name</label>
                            <input type='text' name='name' placeholder='Enter your name' /></div>
                        <div>
                            <label>Email</label>
                            <input type='text' name='email' placeholder='Enter your Email' />
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea rows={6} name='message' placeholder="Enter your thought's" />
                        </div>
                        <div className='btn'>
                            <button type='submit'>submit</button>
                        </div>

                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
