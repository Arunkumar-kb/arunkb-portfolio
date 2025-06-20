import React, { useRef } from 'react'
import '../styles/nav.css'
import myImage from '/images/arunkumar.jpg'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {

    const navRef = useRef();//ref to the nav links

    const showNavbar = () => {
        navRef.current.classList.toggle('res-nav');
    }

    return (
        <nav className='navbar'>
            <div className='nav-logo'>
                <img src={myImage} alt='logo'></img>
                <h3>ARUNKUMAR K B</h3>
            </div>
            <div className='nav-links' ref={navRef}>
                <ul onClick={showNavbar}>
                    <li><a href="#home" >Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <button className='nav-btn' onClick={showNavbar}><FaBars /></button>
        </nav>
    )
}

export default Navbar
