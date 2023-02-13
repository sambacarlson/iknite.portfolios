import React from 'react'
import { Link } from 'react-router-dom'
import iknitelogo from '../assets/logos/iknite.png'
import bohikorlogo from '../assets/logos/bohikor.png'
import iknitestudiologo from '../assets/logos/iknitestudio.png'
import kuelaplogo from '../assets/logos/kuelap.png'
import mountainhublogo from '../assets/logos/mountainhub.jpeg'


const Footer = () => {
  return (
    <footer className='bg-darker text-light text-sm p-4 flex flex-col'>

      <div className="flex flex-row space-x-3 items-center justify-center ">
        <div className="flex items-end h-12 w-12"><img src={mountainhublogo} alt="mountain hub logo" className='w-full h-full object-cover' /></div>
        <div className="flex items-end h-12 w-12"><img src={iknitestudiologo} alt="iknite studio logo" className='w-full h-full object-cover' /></div>
        <div className="flex items-end h-12 w-12"><img src={bohikorlogo} alt="bohikor logo" className='w-full h-full object-cover' /></div>
        <div className='flex items-end h-12 w-12'><img src={iknitelogo} alt="inkite logo" className='w-full h-full object-cover' /></div>
        <div className="flex items-end h-12 w-12"><img src={kuelaplogo} alt="kuelap logo" className='w-full h-full object-cover' /></div>
      </div>

      <hr className='border-light opacity-10 mt-5'/>

      <div className="pt-5 pb-3 flex flex-row items-center justify-center space-x-3">
        <Link to="/members" className='hover:ring-1 hover:ring-light p-1 active:ring-dark'>members</Link>
        <Link to="/projects" className='hover:ring-1 hover:ring-light p-1 active:ring-dark'>Projects</Link>
        <Link to="/about" className='hover:ring-1 hover:ring-light p-1 active:ring-dark'>About</Link>
      </div>
      <hr className='border-light opacity-10 my-5'/>
      <div className='flex flex-row space-x-2 justify-center items-center'>
        <h4 className="font-bold">Subscribe to our weekly newsletter</h4>
        <div className='flex flex-row items-center justify-end ring-1 ring-dark bg-light rounded-sm p-1 max-w-[300px]'>
          <input type="text" name="search" id="search" placeholder='Email...' className='w-full outline-none text-sm text-dark bg-transparent'/>
          <div className='text-dark'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M9.525 18.025q-.5.325-1.013.037Q8 17.775 8 17.175V6.825q0-.6.512-.888q.513-.287 1.013.038l8.15 5.175q.45.3.45.85t-.45.85ZM10 12Zm0 3.35L15.25 12L10 8.65Z"/></svg>
          </div>
        </div>
      </div>

      <hr className='border-light opacity-10 my-5'/>

      <div className='flex flex-row items-center justify-center space-x-2 mb-4'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4c0 146.8-111.8 315.9-316.1 315.9c-63 0-121.4-18.3-170.6-49.8c9 1 17.6 1.4 26.8 1.4c52 0 99.8-17.6 137.9-47.4c-48.8-1-89.8-33-103.8-77c17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35c25.1-4.7 49.1-14.1 70.5-26.7c-8.3 25.7-25.7 47.4-48.8 61.1c22.4-2.4 44-8.6 64-17.3c-15.1 22.2-34 41.9-55.7 57.6z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 20 20"><path fill="currentColor" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699v3.699z"/></svg>
      </div>
      <em className='text-sm text-center underline'>Terms and conditions</em>
      <em className='text-sm text-center'>copyright &copy; iknite.space 2023</em>
    </footer>
  )
}

export default Footer
