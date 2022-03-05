import React from 'react';

import './FourNotFour.css';
import { Link } from 'react-router-dom';

import fournotfourImage from '../../assets/svg/404.svg'

function FourNotFour() {
    return (
        <div className="fournotfour">
            <img src={fournotfourImage} className="fournotfour-image" alt="Anjali Rajendran 404"/>

            <p>Oops! Something went wrong</p>
            <Link to='/'>
                <button className='fnf__btn'>Return Home</button>
            </Link>
        </div>
        
    )
}

export default FourNotFour