import React from 'react'

import './Discover.css'

import discover from '../../../assets/png/discover.png'

function Discover() {
    return (
        <div className='discover' id='discover'>
            <h1><span className='primary__color bold'>Discover</span> banking like never before</h1>
            <div className='discover__container'>
                <div className='discover_left'>
                    <div className='discover_left__content'>
                        <div className='discover_info'>
                            <p>Integer elit mauris, molestie at pretium vitae, luctus sed dui</p>    
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                </div>
                <div className='discover_right'>
                    <img src={discover} alt="" className='discover_img'/>
                </div>
            </div>
        </div>
    )
}

export default Discover