import React from 'react'
import './about.css'
import ME from "../../assets/Rogue Bonfire (2).png"
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className="about_me-image">
            <img src={ME} alt="logo"></img>
          </div>
        </div>

        <div className='about_content'>
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>6 Months in Educamas, Programate</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>Looking for volunteers for new projects</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>5+ and working for more</small>
            </article>
          </div>
          <p>
          Hello! My name is Cristian Montoya López, I am 18 years old, I am a Colombian citizen, eager to learn and develop through the world of technology and development, currently, I am still in my stage of learning and discovering the different technologies and programming languages that every day are updated and likewise, different.

          However, with much encouragement to learn, on this page you can find a little of my advances throughout this world, what are you waiting for to venture?
          </p>

          <a href='#contact' className='btn btn-primary'> Let's talk</a>
        </div>


      </div>
    </section>
  )
}

export default about