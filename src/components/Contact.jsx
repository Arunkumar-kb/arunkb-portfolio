import React, { useRef, useState } from 'react'
import '../styles/contact.css'
import emailjs from '@emailjs/browser'
const Contact = () => {
    const form = useRef();
    const [toast, setToast] = useState({show: false, message: '', type: ''});
    const [loading, setLoading] = useState(false);
    const serviceId = import.meta.env.VITE_Email_Service_Id;
    const templateId = import.meta.env.VITE_Email_Template_Id;
    const APIKey = import.meta.env.VITE_Email_API_Key;

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        const name = form.current.name.value.trim();
        const email = form.current.email.value.trim();
        const message = form.current.message.value.trim();

        if (!name || !email || !message) {
            showToast('Please fill in all fields','error');
            setLoading(false);
            return;
        }

        // Basic email pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showToast('Please enter a valid email address','error');
            setLoading(false);
            return;
        }
        emailjs.sendForm(
            serviceId,//service id emailjs
            templateId,//template id 
            form.current,
            APIKey//api key
        )
            .then(
                (result) => {
                    showToast("Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    showToast('Error sending message, please try again later.');
                    console.log(error.text);
                    form.current.reset();
                }
            )
            .finally(() => {
                setLoading(false);
            });

    }
    const showToast = (msg,type) => {
        setToast({ show: true, message: msg, type: type || '' });
        setTimeout(() => {
            setToast(prev => ({...prev, show: false}));
        }, 3000);
    }
    return (
        <section className='contact' id='contact'>
            <div className='container'>
                <div className='heading'>
                    <h1>contact</h1>
                    <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
                </div>
                {
                    toast.show && (
                        <div className={`toast ${toast.type}`}>
                            <span className="toast-message">{toast.message}</span>
                            <span className="toast-close" onClick={() => setToast(prev => ({...prev,show:false}))}>&times;</span>
                        </div>
                    )
                }
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
                            <button type='submit'>{loading ? 'Sending...' : 'Submit'}</button>
                        </div>

                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
