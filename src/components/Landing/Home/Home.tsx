import React from 'react'
import { Link } from 'react-router-dom';

import { Navbar } from '../..'


import './Home.css'

function Home() {
    return (
        <div className='home' id='home'>
            <Navbar />  
            <div className='home__container'>
                <div className='home_left'>
                    <div className='home_left__content'>
                        <h1>Smart Investments with HyFi bank</h1>
                        <p>
                            The easiste way to invest in mutual funds, obligation, money market and stock
                        </p>
                        <div className='home_btn_container'>
                            <Link to='/home'>
                                <button className='homeBtn home_g_btn'>Let's start</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='home_right'>
                    <div className='home_right_content'>
                        <h1>$590,568</h1>
                        <h3>+80.05 / 0.5%</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home