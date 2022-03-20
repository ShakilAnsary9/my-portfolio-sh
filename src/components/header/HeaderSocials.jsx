import React from 'react'
import { BsFacebook, BsGithub, BsInstagram } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="#" target="_blank"><BsFacebook /></a>
        <a href="#" target="_blank"><BsInstagram /></a>
        <a href="#" target="_blank"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials