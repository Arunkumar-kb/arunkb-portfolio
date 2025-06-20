import React from 'react'
import '../styles/projects.css'
import img1 from '/images/home.jpg'
import img2 from '/images/image.png'
const Projects = () => {
    return (
        <section className='projects' id='projects'>
            <div className='container'>
                <div className='heading'>
                    <h1>Projects</h1>
                    <p>Here you will find My projects that I created with each project containing its own case study</p>
                </div>
                <div className='project-list'>
                    <div className='project'>
                        <img src={img1} alt="" />
                        <div className='title'>
                            <h4>Online job portal</h4>
                            <a href='https://github.com/Arunkumar-kb/online-job-portal' target='_blank' className='project-link'>GitHub</a>
                        </div>
                    </div>
                    <div className='project'>
                        <img src={img2} alt="" />
                        <div className='title'>
                            <h4>Cafe wild Beans</h4>
                            {/* <button>Github</button> */}
                            <a href='https://github.com/Arunkumar-kb/cafe-project' target='_blank' className='project-link'>GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
