import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target="_blank" className='icon'><BsLinkedin/></a>
        <a href="https://github.com" target="_blank" className='icon'><FaGithub/></a>
        <a href="https://dribbble.com" target="_blank"><FiDribbble className='icon'/></a>
    </div>

  )
}

export default HeaderSocials