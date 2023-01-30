import React from 'react'
import { Link } from 'react-router-dom'
import testimage from '../assets/testimage.jpeg'

export const ProjectCard = () => {
  const [uiColor, setuiColor] = React.useState(false)
  function handleHover(value: boolean) {
    return setuiColor(value)
  }
  return (
    <Link to="/projectProfile" onMouseOver={()=>handleHover(true)} onMouseOut={()=>handleHover(false)} className={`bg-dark ${uiColor? 'text-white md:text-light' : 'text-light md:text-white'} p-2 m-1 grid grid-cols-3 gap-1 w-full h-full`}>
      <div className='relative col-span-1 bg-light text-dark shadow-toleft'>
        <img src={testimage} alt="product" className='w-full h-full object-cover' />
        <h3 className={`absolute bottom-0 ${uiColor? 'bg-white md:bg-light' : 'bg-light md:bg-white'} bg-opacity-50 md:bg-opacity-50  w-full p-1 text-end font-bold`}>{`Bohikor`.toUpperCase()}</h3>
      </div>
      <div className='col-span-2 p-1 flex flex-col space-y-2 items-center justify-center'>
        <div className='flex flex-col items-center -space-y-2'>
          <h3 className='font-bold'>Bohikor</h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#980c0c" d="M15.874 13a4.002 4.002 0 0 1-7.748 0H3v-2h5.126a4.002 4.002 0 0 1 7.748 0H21v2h-5.126zM12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4z"/></svg>
        </div>
        <h4 className='text-sm text-center'>The best Way to track how you spend your money</h4>
        <div className='flex flex-row -space-x-2 items-center, justify-start pt-3'>
          <div className='w-10 h-10 bg-light flex items-center justify-center rounded-full text-dark shadow-toleft ring-1 ring-light'>MB</div>
          <div className='w-10 h-10 bg-light flex items-center justify-center rounded-full text-dark shadow-toleft ring-1 ring-light'>GH</div>
          <div className='w-10 h-10 bg-light flex items-center justify-center rounded-full text-dark shadow-toleft ring-1 ring-light'>TC</div>
          <div className='w-10 h-10 bg-light flex items-center justify-center rounded-full text-dark shadow-toleft ring-1 ring-light'>+4</div>
        </div>
      </div>
    </Link>
  )
}
