import React from 'react'

import { Home, Landing, Discover } from '../../components'

import './LandingPage.css'

function LandingPage() {
    return (
        <div className='landingPage'>
            <div className="circle1"/>
            <div className="circle2"/>
            {/* <Home />
            <Landing /> */}
            <Discover />
        </div>
    )
}

export default LandingPage