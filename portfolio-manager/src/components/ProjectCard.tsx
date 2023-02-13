import React from 'react'
import { Link } from 'react-router-dom'
import testimage from '../assets/testimage.jpeg'

export const ProjectCard = (props:{project:any}) => {
  const [uiColor, setuiColor] = React.useState(false)
  function handleHover(value: boolean) {
    return setuiColor(value)
  }
  const fromData = props.project
  return (
    <Link to="/projectProfile" state={{from:fromData}} onMouseOver={()=>handleHover(true)} onMouseOut={()=>handleHover(false)} className={`bg-white ${uiColor? 'text-slate-700': 'text-dark'} p-2 m-1 grid grid-cols-3 gap-4 w-full h-full`}>
      <div className='relative col-span-1 bg-light text-dark border-2 border-slate-200'>
        <img src={props.project.projectDemoImages[0]} alt="product" className='w-full h-full object-cover' />
        <h3 className={`absolute bottom-0 ${uiColor? 'bg-white md:bg-light' : 'bg-light md:bg-white'} bg-opacity-50 md:bg-opacity-50  w-full p-1 text-end font-bold`}>{props.project.projectName.toUpperCase()}</h3>
      </div>
      <div className='col-span-2 p-3 flex flex-col space-y-3 items-start justify-center border-[1px] border-slate-200'>
        <div className='flex flex-col items-start -space-y-2'>
          <h3 className='font-bold'>{props.project.projectName}</h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.874 13a4.002 4.002 0 0 1-7.748 0H3v-2h5.126a4.002 4.002 0 0 1 7.748 0H21v2h-5.126zM12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4z"/></svg>
        </div>
        <h4 className='text-sm text-center'>{props.project.projectHeadline}</h4>
        <div className='flex flex-row -space-x-2 items-center, justify-start pt-3'>
          <div className='w-10 h-10 bg-light flex items-center justify-center rounded-full text-dark ring-1 ring-dark'>
            <img src="assets/arts/teamwork.jpg" alt="profile" className='h-full w-full rounded-full object-cover' />
          </div>
          <div className='w-10 h-10 bg-light flex items-center justify-center rounded-full text-dark ring-1 ring-dark'>
            <img src="assets/arts/world.jpg" alt="profile" className='h-full w-full rounded-full object-cover' />
          </div>
          <div className='w-10 h-10 bg-light flex items-center justify-center rounded-full text-dark ring-1 ring-dark'>
            <img src="assets/arts/reviewing.jpg" alt="profile" className='h-full w-full rounded-full object-cover' />
          </div>
          <div className='w-10 h-10 bg-white flex items-center justify-center rounded-full text-dark ring-1 ring-dark'>
            <p>4+</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

