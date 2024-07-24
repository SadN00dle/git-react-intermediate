import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div className='text-white font-bold'>Please login</div>

    return <div className='text-white font-bold'>Welcome {user.username}</div>
}

export default Profile