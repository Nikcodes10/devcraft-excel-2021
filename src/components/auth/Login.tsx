import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import CustomTitle from '../../utils/CustomTitle'

import './Auth.css'


function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  let navigate = useNavigate();

  const goToSignUp = () => {
    navigate("/signup")
  }
  const goToHome = () => {
    navigate("/")
  }

  const handleSignUp = (e : any) => {
    e.preventDefault()
  }

  return (
    <div className='auth'>
      <CustomTitle title="Sign Up"/>
      <div className='auth__container'>
        <div className='auth__container_left'>
          <div className='auth_logo' onClick={goToHome}>
            <img src="" alt="" />
            <h2>HyFi</h2>
          </div>

          <form className='auth_form' onSubmit={handleSignUp}>
            <h1 className='af__h1'>Welcome Back!</h1>
            <h6 className='af__h6'>Please Log in to your account.</h6>

            <div className='auth_input_container'>
              <div className='auth_single_input'>
                <label className='auth_label'>Username</label>
                <input className='auth_input' type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <p></p>
              </div>
              <div className='auth_single_input'>
                <label className='auth_label'>Password</label>
                <input className='auth_input' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <p></p>
              </div>
            </div>

            <div className='auth_btns'>
              <button type='submit' className='auth__primary_btn'>Login</button>
              <button onClick={goToSignUp} className='auth__secondary_btn'>Sign Up</button>
            </div>
          </form>

          <div className='auth_footer'>
            <p>By sign up you agree to our terms and conditions and have read our data policy</p>
          </div>

        </div>
        <div className='auth__container_right'>

        </div>
      </div>
    </div>
  )
}

export default Login