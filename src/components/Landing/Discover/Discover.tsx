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
                            <p>Payment done easily via scan and unique id to employees, customers and shopkeepers.</p>    
                            <p>Pay taxes in a few clicks and automate invoice payments using Shopkeeper Payments</p>
                            <p>Easily calculate and schedule salary and compliance payments in seconds using HyFiRoll</p>
                        </div>
                    </div>
                </div>
                <div className='discover_right'>
                    <img src={discover} alt="HyFi" className='discover_img'/>
                </div>
            </div>
        </div>
    )
}

export default Discover