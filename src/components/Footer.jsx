import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import '../styles/footer.css'
const Footer = () => {
    return (
        <footer className='footer' id='footer'>
            <div className='container'>
                <div className='footer-info'>
                    <div className='personal-info'>
                        <h3>Arunkumar</h3>
                        <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                    </div>
                    <div className='social'>
                        <h3>social</h3>
                        <div className='links'>
                            <a href='https://www.linkedin.com/in/arunkumar-kb' target='_blank'><FaLinkedin style={{ fontSize: '2.5rem', color: '#fff' }} /></a>
                            <a href='https://github.com/Arunkumar-kb' target='_blank'><FaGithub style={{ fontSize: '2.5rem', color: '#fff' }} /></a>
                            <a href='#'><FaInstagram style={{ fontSize: '2.5rem', color: '#fff' }} /></a>
                        </div>
                    </div>
                </div>
                <div className='copyrights'>
                    <p> &copy; copyrights 2025. made by ak media solution</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
