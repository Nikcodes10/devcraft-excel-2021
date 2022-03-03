import React from 'react'

import './Profile.css'

function Profile() {
  return (
    <div className='profile'>
      <div className='profile__container'>
        <h1>Account</h1>
        <div className='profile__header'>
          <img src="https://avatars.githubusercontent.com/u/43471295?v=4" alt=''  className='profile_img'/>
          <div className='profile__header_btns'>
            <button className='profile__primary_btn'>Change</button>
            <button className='profile__secondary_btn'>Remove</button>
          </div>
        </div>
        <h1>General</h1>
      </div>
    </div>
  )
}

export default Profile