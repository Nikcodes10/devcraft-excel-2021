import React from 'react'

import './Dash.css'

function Dash() {
    return (
        <div className='dash'>
            <div className='dash_one'>
                <h1 className='dash__header'>Income & Expenses</h1>
            </div>
            <div className='dash_two'>
                <h1 className='dash__header'>Send money to</h1>
                <div className='dash_avatars'>
                    
                </div>
            </div>
            <div className='dash_three'>
                <h1 className='dash__header'>My Cards</h1>
            </div>
        </div>
    )
}

export default Dash