import React from 'react'
import './hero.css'

const Hero = () => {
    return  (
        <div className='hero'>
            <div className='hero_section'>
                <div className='hero_title'>
                  <h3>New Arrivals ONLY</h3>
                  <h1 className='hero_title_h1'>New <span>Collections</span> for Everyone</h1>
                  <button>Latest Collection</button>
                </div>
                <div className='hero_img'>
                  <img src='./Assets/Shopping_image.png' alt=''/>
                </div>
              
            </div>
              
        </div>
      )

}

export default Hero