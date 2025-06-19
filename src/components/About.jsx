import React from 'react'
import '../styles/about.css'
const About = () => {
  return (
    <section className='about' id='about'>
      <div className='container'>
        <div className='heading'>
          <h1>About Me</h1>
          <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
        </div>
        <div className='about-data'>
          <div className='about-info'>
            <h3>Get to know me!</h3>
            <p>As a Frontend-Focused Web Developer, I specialize in building and managing the front-end of websites and web applications, contributing to the success of the overall product. Explore some of my work in the Projects section.
            </p>
            <p> Memory updated Here's a more professional and simplified version: I enjoy sharing my knowledge and experience in web development to help the developer community. Connect with me on LinkedIn and Instagram, where I regularly post valuable content on web development and programming
            </p>
            <p>I am seeking job opportunities where I can contribute, learn, and grow. If you have a suitable position that aligns with my skills and experience, please feel free to contact me.</p>
          </div>
          <div className='about-info'>
            <h3>My Skills</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>ReactJs</li>
              <li>REST API</li>
              <li>NodeJs</li>
              <li>ExpressJs</li>
              <li>Java</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Git</li>
              <li>Git Hub</li>

            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
