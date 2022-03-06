import React from 'react';
import { Link } from 'react-router-dom'

import './Navbar.css'

import named_logo from '../../../assets/svg/named_logo.svg'

function Navbar() {
    return (
        <div className='navbar'>
            <img src={named_logo} alt="HyFi" />

            <div className='navbar_btn'>
                <Link to="/login">
                    <button className="navBtn nav_login">Login</button>
                </Link>
                <Link to="/signin">
                    <button className="navBtn nav_signup">Sign up</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;