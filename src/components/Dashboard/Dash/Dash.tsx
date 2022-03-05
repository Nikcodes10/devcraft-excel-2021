import React from 'react'
import { MdKeyboardArrowDown, MdArrowUpward } from "react-icons/md";

import avatar1 from '../../../assets/png/avatars/one.png'
import avatar2 from '../../../assets/png/avatars/two.png'
import avatar3 from '../../../assets/png/avatars/three.png'
import avatar4 from '../../../assets/png/avatars/four.png'

import './Dash.css'

function Dash() {
    return (
        <div className='dash'>
            <div className='dash_one'>
                <h1 className='dash__header'>Income & Expenses</h1>
                <div className='dash_income'>
                    <div className='dash_income__content'>
                        <h4>15000</h4>
                        <p>+14% <MdArrowUpward /></p> 
                    </div>
                </div>
            </div>
            <div className='dash_two'>
                <h1 className='dash__header'>Send money to</h1>
                <div className='dash_avatars'>
                    <img src={avatar1} alt=''  className='dash_avatar_img border_green'/>  
                    <img src={avatar2} alt=''  className='dash_avatar_img'/>  
                    <img src={avatar3} alt=''  className='dash_avatar_img'/>  
                    <img src={avatar4} alt=''  className='dash_avatar_img'/>  
                </div>
                <div className='dash_visa'>
                    <h1>VISA</h1>
                    <h3>**** 2253</h3>
                    <MdKeyboardArrowDown size={25}/>
                </div>
                <button className='dash_two__btn'>Send Money</button>
            </div>
            <div className='dash_three'>
                <h1 className='dash__header'>My Cards</h1>
            </div>
        </div>
    )
}

export default Dash