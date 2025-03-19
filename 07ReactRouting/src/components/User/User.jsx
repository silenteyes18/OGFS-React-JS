import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {username}  = useParams()
  return (
    <div className='py-16 bg-gray-400 flex justify-center items-center text-2xl font-sans font-bold '>
      User{username}
    </div>
  )
}

export default User
