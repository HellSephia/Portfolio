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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae massa rutrum, pharetra augue id, malesuada turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi ac dolor nec enim congue condimentum a nec nulla. Integer non erat accumsan, porttitor risus sit amet, venenatis leo. Vestibulum venenatis urna id sem ullamcorper elementum. Sed porta velit nec quam interdum, in pretium justo mollis
          </p>

          <a href='#contact' className='btn btn-primary'> Let's talk</a>
        </div>


      </div>
    </section>
  )
}

export default about