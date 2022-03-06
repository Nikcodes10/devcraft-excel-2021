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
                            <p>Deposit personal and business checks safely, securely, and without having to visit a branch or ATM</p>    
                            <p>Take control of your finances with budgeting, expense and other apps that automatically track your spending and saving habits.</p>
                            <p>By setting up notifications on your account, you’ll be in the know with the latest transaction and balance activity on your account.</p>
                            <p>Move your cash quickly between accounts or by sending to an external account. You can set up automatic transfers to move money.</p>
                        </div>
                    </div>
                </div>
                <div className='spending_right'>
                    <img src={spending} alt="HyFi" className='spending_img'/>
                </div>
            </div>
            <img src={dots} alt="HyFi" className='spending_dots'/>
        </div>
    )
}

export default Spending