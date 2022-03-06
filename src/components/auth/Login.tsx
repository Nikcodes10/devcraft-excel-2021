import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import CustomTitle from '../../utils/CustomTitle'

import coins from '../../assets/svg/coins.svg'
import named_logo from '../../assets/svg/named_logo.svg'
import './Auth.css'


function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [usernameErr, setUsernameErr] = useState('')
  const [passwordErr, setPasswordErr] = useState('')

  const { handleToken, handleUser } = useContext(AuthContext);

  const serverURL = process.env.REACT_APP_BACKEND_URL + '/auth/login';

  let navigate = useNavigate();

  const goToSignUp = () => {
    navigate("/signup")
  }
  const goToHome = () => {
    navigate("/")
  }

  const handleSignUp = (e : any) => {
    e.preventDefault()
    let valid = true;
    if(!username) {
      setUsernameErr('Enter username');
      valid = false;
    }
    if(!password) {
      setUsernameErr('Enter password');
      valid = false;
    }
    if(!valid)  return;
    
    const data = JSON.stringify({
      username, password
    })

    fetch(serverURL, {
      method:'POST', headers: {
        'Content-type':'Application/json'
      },
      body:data
    }).then(res => res.json())
    .then(data => {
      handleToken(data.token)
      handleUser(data.user)
    })
    .catch(e => console.log(e))
  }

  return (
    <div className='auth'>
      <CustomTitle title="Sign Up"/>
      <div className="circle1"/>
      <div className="circle2"/>
      <div className='auth__container'>
        <div className='auth__container_left'>

          <form className='auth_form' onSubmit={handleSignUp}>
          <div className='auth_logo' onClick={goToHome}>
            <img src={named_logo} alt="HyFi" className='auth_logo_img'/>
          </div>
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
            <div className='auth_footer'>
            <p>By sign up you agree to our terms and conditions and have read our data policy</p>
          </div>
          </form>



        </div>
        <div className='auth__container_right'>
          <img src={coins} alt="HyFi" className='auth_image'/>
        </div>
      </div>
    </div>
  )
}

export default Login