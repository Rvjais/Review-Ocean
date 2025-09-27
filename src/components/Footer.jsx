import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <p>© 2025 Your Company. All rights reserved.</p>
        <div className="footer-links">
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms of Service</Link>
        <Link to="https://wa.me/9648165493" target="_blank" rel="noopener noreferrer">Contact Us</Link>
        
        </div>
         <div className="social-icons">
          <a className='instaicon' href="https://www.instagram.com/reviewoceans/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a className='fbicon' href="https://facebook.com/yourcompany" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a className='lnicon' href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
    <div className="footer-bottom">
        <p>Made with ❤️ by Ranveer</p>
      </div>
      </div>
      
    </>
  )
}

export default Footer