import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import CustomTitle from '../../utils/CustomTitle'

import './Auth.css'


function SignUp() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  let navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login")
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
            <h1 className='af__h1'>Create Account!</h1>
            <h6 className='af__h6'>Please enter your details.</h6>

            <div className='auth_input_container'>
              <div className='auth_single_input'>
                <label className='auth_label'>Name</label>
                <input className='auth_input' type='text' value={name} onChange={(e) => setName(e.target.value)}/>
                <p></p>
              </div>
              <div className='auth_single_input'>
                <label className='auth_label'>Email</label>
                <input className='auth_input' type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <p></p>
              </div>
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
              <button type='submit' className='auth__primary_btn'>Create Account</button>
              <button onClick={goToLogin} className='auth__secondary_btn'>Login</button>
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

export default SignUp