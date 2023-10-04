import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'

function headerSocials() {
  return (
    <div>
      <div className="header__socials">
        <a href='https://www.linkedin.com/in/akash-singh-4a5b941ba/' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/akash12singh' target='_blank'><FaGithubSquare /></a>
        <a href='https://leetcode.com/Akash-pro/' target='_blank'><SiLeetcode /></a>
      </div>
    </div>
  )
}

export default headerSocials
