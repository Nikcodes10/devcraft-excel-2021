import React from 'react'
import { Link } from 'react-router-dom';

import { Navbar } from '../..'

import landing from '../../../assets/svg/landing.svg'
import './Home.css'

function Home() {
    return (
        <div className='home' id='home'>
            <Navbar />  
            <div className='home__container'>
                <div className='home_left'>
                    <div className='home_left__content'>
                        <h1>The <span className='bold'>Smartest</span> Bank on your <span className='primary__color bold'>Smartphone</span></h1>
                        <p>
                            The easiste way to invest in mutual funds, obligation, money market and stock
                        </p>
                        <div className='home_btn_container'>
                            <Link to='/login'>
                                <button className='home_g_btn'>Let's start</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='home_right'>
                    <img src={landing} alt="" className='landing_img'/>
                </div>
            </div>
        </div>
    )
}

export default Home