import React from 'react'
import myResume from '../assets/resume-ak.pdf'
import '../styles/home.css'
const Home = () => {
  return (
    <section className='home' id='home'>
        <div className='container'>
            <h1>Hey, i'm Arunkumar</h1>
            <p>A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</p>
            <button><a href={myResume} download="resume-ak.pdf" style={{color: '#fff', textDecoration:'none'}} >resume</a></button>
        </div>
    </section>
  )
}

export default Home
