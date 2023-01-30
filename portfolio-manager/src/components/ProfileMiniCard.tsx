import React from 'react'
import testimage from '../assets/testimage.jpeg'

const ProfileMiniCard = () => {
  return (
    <div className='min-w-48  w-48 h-48 flex flex-col items-center py-3'>
      <img src={testimage} alt="profile" className='w-24 h-24 object-cover rounded-full ring-4 ring-white' />
      <h4 className="font-bold ">Boss Ayuk</h4>
      <em className='border-b-2 border-b-light w-2/3 text-center text-sm'>CEO</em>
      <p className='text-xs font-bold py-1'> <i>December 2010</i> </p>
    </div>
  )
}

export default ProfileMiniCard
