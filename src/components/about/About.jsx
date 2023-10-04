import React from 'react'
import './about.css'
import me from '../../Assets/me-about.jpg'
import {BiAward} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>  
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className="about_me-image">
            <img src={me} alt='About Image' />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <BiAward className= 'about_icon' />
              <h5>Experience</h5>
              <small>Fontened Developer</small>
            </article>

            <article className='about_card'>
              <FiUsers className= 'about_icon' />
              <h5>Clients</h5>
              <small>200+ worldWide</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className= 'about_icon' />
              <h5>Projects</h5>
              <small>15+</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deleniti iure at est blanditiis! Accusamus!
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
