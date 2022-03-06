import React from 'react'

import './Spending.css'

import spending from '../../../assets/png/spending.png'
import dots from '../../../assets/svg/dots.svg'

function Spending() {
    return (
        <div className='spending' id='spending'> 
            <div className='spending__container'>
                <div className='spending_left'>
                    <div className='spending_left__content'>
                        <h1>Get on top of your spending. <span className='primary__color'>Always</span></h1>
                        <div className='spending_info'>
                            <p>Integer elit mauris, molestie at pretium vitae, luctus sed dui</p>    
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                </div>
                <div className='spending_right'>
                    <img src={spending} alt="" className='spending_img'/>
                </div>
            </div>
            <img src={dots} alt="" className='spending_dots'/>
        </div>
    )
}

export default Spending