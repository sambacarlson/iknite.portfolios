import React from 'react'
import testimage from '../assets/testimage.jpeg'
import { Link } from 'react-router-dom'

const ProfileCard = () => {
  const [uiColor, setuiColor] = React.useState(false)
  function handleHover(value: boolean) {
    return setuiColor(value)
  }
  return (
    <Link to="/memberProfile" onMouseOver={()=>handleHover(true)} onMouseOut={()=>handleHover(false)} >
      {/* below medium screens */}
      <div className='flex flex-row items-center justify-start space-x-3 md:hidden' >
        <div className='w-20 h-20'>
          <img src={testimage} alt="profile" className='w-full h-full rounded-full object-cover shadow-tobottom' />
        </div>
        <div className="flex flex-col items-start w-1/2">
          <h3 className={`text-${uiColor? 'light' : 'white'} bg-dark pl-1 pr-12 font-bold shadow-tobottom mb-1`}>{`Carlson`.toUpperCase()}</h3>
          <h4 className='text-reddish'>Developer</h4>
          <h4 className='text-dark'>Trainee</h4>
          <hr className={`md:hidden w-[130%] mt-2 text-${uiColor? 'light' : 'reddish'}`} />
        </div>
      </div>
      {/* Medium screens and above */}
      <div className='hidden relative bg-dark text-light p-2 m-1 rounded-sm md:flex flex-col w-48 h-48'>
          <div className='w-10 h-10 bg-white bg-opacity-70 rounded-full z-10 absolute left-4 top-3 flex items-center justify-center'>
            <h1 className='text-base text-reddish'>DEV</h1>
          </div>
        <div className='relative col-span-1 bg-none text-dark shadow-toleft'>
          <img src={testimage} alt="product" className='w-full h-full object-cover' />
          <h3 className={`absolute bottom-0 bg-${uiColor? 'light' : 'white'} bg-opacity-70  w-full p-1 text-end`}>{`Carlson`.toUpperCase()}</h3>
        </div>
        <div className='col-span-2 ring-1 p-1 ring-darker flex flex-col items-center justify-center shadow-toleft'>
          <h4 className={`text-sm text-${uiColor? 'white': 'light'} text-center font-bold`}>Intern</h4>
          <h4 className='text-sm text-light text-center'>June 2022 - Present</h4>
        </div>
      </div>
    </Link>
  )
}

export default ProfileCard
