import React, { useContext, useEffect } from 'react'
import './Login.css'
import { ShopContext } from '../../Context/ShopContext'

const Login = () => {

  const {setSelect}=useContext(ShopContext)

  useEffect(()=>{
    setSelect("")
   },[])

  return (
      <div className='login-signup'>
        <div className='login_section'>
          <div className='login_detail'>
                <p className='sign_up'>Sign Up</p>
                <input type='text' placeholder='Your Name'/>
                <input type='text' placeholder='Email Address'/>
                <input type='text' placeholder='Password'/>
                <div className='log_button'>
                  <button >Continue</button>
                  <p className='log_condition'>Already have an account?<span>Login here</span></p>
                  <div className='note'>
                    <p><input type='checkbox'/></p>  
                    <p className='log_note'>By continuing i agree to the terms of use & privacy policy.</p>
                  </div>
                </div>
          </div>
        </div>
      </div>
  )
}

export default Login