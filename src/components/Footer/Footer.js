import React from 'react'
import footer_logo from '../Assets/Frontend_Assets/logo_big.png'
import insta_icon from '../Assets/Frontend_Assets/instagram_icon.png'
import pins_icon from '../Assets/Frontend_Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/Frontend_Assets/whatsapp_icon.png'
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
          <div className="footer-logo">
              <img src={footer_logo} alt="" />
              <p>SHOPPER</p>
          </div>
          <ul className="footer-links">
              
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contacts</li>
          </ul>
          <div className="footer-social-icon">
              <div className="footer-icons-container">
                  <img src={insta_icon} alt="" />
              </div>
              <div className="footer-icons-container">
                  <img src={pins_icon} alt="" />
              </div>
              <div className="footer-icons-container">
                  <img src={whatsapp_icon} alt="" />
              </div>
          </div>
          <div className="footer-copyright">
              <hr />
              <p>Copyright @ 2023- All rights are preserved</p>
          </div>
      </div>
      
  )
}
export default Footer
