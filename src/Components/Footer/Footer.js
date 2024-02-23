import React from 'react'
import './Footer.css'
import logo_big from '../Assets_2/logo_big.png'
import instagram_icon from '../Assets_2/instagram_icon.png'
import pintester_icon from '../Assets_2/pintester_icon.png'
import whatsapp_icon from '../Assets_2/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer_section'>
      <div className='footer_logo'>
        <img src={logo_big} alt=''/>
        <p>SHOPPER</p>
      </div>
      <div className='footer_item'>
        <p>Company</p>
        <p>Products</p>
        <p>Offices</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div className='footer_icon'>
        <img src={instagram_icon} alt=''/>
        <img src={pintester_icon} alt=''/>
        <img src={whatsapp_icon} alt=''/>
      </div>
      
      
    </div>
  )
}

export default Footer