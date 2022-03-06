import React from 'react'

import './Transaction.css'
import transaction from '../../../assets/svg/transaction.svg'

function Transaction() {
    return (
        <div className='transaction'>
            <img src={transaction} alt="HyFi"  className='transaction__img'/>
        </div>
    )
}

export default Transaction