import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
        <h1>My Profile</h1>

        <h4> Adnan</h4>

        <Link to={'/myorder'}>Orders</Link>
        <Link to={'/admin/dashboard'}>Dashboard</Link>
        <Link >Logout</Link>
        
    </div>
  )
}

export default Profile