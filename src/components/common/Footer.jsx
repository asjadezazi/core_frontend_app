import React from 'react'
import "./footer.css"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className='Main'>
        <ul className='icon'>
          <li><FaInstagram /></li>
          <li><FaTwitter /></li>
          <li><FaGoogle /></li>
          <li><FaYoutube /></li>
        </ul>

        <ul className='card'>
          <li>Home</li>
          <li>News</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Our Team</li>
        </ul>
      </div>
    </>
  )
}

export default Footer