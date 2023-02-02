import React from 'react'
import testimage from '../assets/testimage.jpeg'

const ProfileMiniCard = () => {
  return (
    <div className='flex flex-col items-start md:items-center py-3'>
      <div className="h-28 w-28">
        <img src={testimage} alt="profile" className=' w-full h-full object-cover rounded-full' />
      </div>
      <h4 className="font-bold ">Boss Ayuk</h4>
      <em className='border-b-2 border-b-light md:w-2/3 text-center text-sm'>CEO</em>
      <p className='text-xs font-bold py-1'> <i>December 2010</i> </p>
    </div>
  )
}

export default ProfileMiniCard
