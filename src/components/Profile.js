import React from 'react'
import "./Profile.css"
import Navbar from "./Navbar"
import { useSelector } from 'react-redux'
import { selectUser } from "../features/userSlice"
import { auth } from "../firebase"

const Profile = () => {
  const user = useSelector(selectUser)
  return (
    <div className='profile'>
      <Navbar />
      <div className='profile-body'>
        <h1>Edit Profile</h1>
        <div className='profile-info'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt='avatar'
          />
          <div className='profile-details'>
            <h2>{user.email}</h2>
            <div className='profile-plan'>
              <h3>Plans</h3>
              <button onClick={() => auth.signOut()} className='signout'>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile