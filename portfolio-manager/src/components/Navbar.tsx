import React from 'react'
import iknitelogo from '../assets/logos/iknite.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false)

  function toggle_menu() {
    return setShowMenu(prevShowMenu=>!prevShowMenu)
  }

  function toggle_menu_off(){
    return setShowMenu(false)
  }

  return (
    <nav className='bg-white text-black w-full h-full  py-4 flex flex-col'>
      <div className=' bg-white flex flex-row items-center px-8 justify-between'>
        <div className='h-12 w-12 md:h-20 md:w-20'>
          <img src={iknitelogo} alt="inkite logo" className='object-cover'/>
        </div>

        <div onClick={toggle_menu_off} className="hidden md:flex flex-row items-start px-8 justify-center space-x-3 text-sm duration-300">
          <Link to="/" className='px-2 py-1 ring-0 ring-light hover:ring-2 active:ring-dark'>Home</Link>
          <Link to="/members" className='px-2 py-1 ring-0 ring-light hover:ring-2 active:ring-dark'>Members</Link>
          <Link to="/projects" className='px-2 py-1 ring-0 ring-light hover:ring-2 active:ring-dark'>Projects</Link>
          {/* <Link to="/about" className='px-2 py-1 ring-0 ring-light hover:ring-2 active:ring-dark'>About</Link> */}
          <a href="https://iknite.space/#contact-us" className='px-2 py-1 ring-0 ring-light hover:ring-2 active:ring-dark'>About</a>
        </div>
        
        <div className='flex flex-row w-1/2 md:w-1/4 items-center justify-end ring-1 ring-slate-300 rounded-sm p-1'>
          <input type="text" name="search" id="search" placeholder='Search...' className='w-full outline-none text-sm'/>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 32 32"><path fill="none" stroke="gray" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 27l7.5-7.5M28 13a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"/></svg>
        </div>
        <div onClick={toggle_menu} className='text-dark md:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18q-.425 0-.712-.288Q3 17.425 3 17t.288-.712Q3.575 16 4 16h16q.425 0 .712.288q.288.287.288.712t-.288.712Q20.425 18 20 18Zm0-5q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h16q.425 0 .712.287q.288.288.288.713t-.288.712Q20.425 13 20 13Zm0-5q-.425 0-.712-.287Q3 7.425 3 7t.288-.713Q3.575 6 4 6h16q.425 0 .712.287Q21 6.575 21 7t-.288.713Q20.425 8 20 8Z"/></svg>
        </div>
      </div>
      <div className={`${showMenu? 'block' : 'hidden'} md:hidden`}>
        <hr className='text-light my-3 md:hidden'/>
        <div onClick={toggle_menu_off} className="flex flex-col items-start px-8 justify-center space-y-3 text-sm duration-300">
          <Link to="/" className='hover:font-bold active:font-normal'>Home</Link>
          <Link to="/members" className='hover:font-bold active:font-normal'>Members</Link>
          <Link to="/projects" className='hover:font-bold active:font-normal'>Projects</Link>
          <a href="https://iknite.space/#contact-us" className='hover:font-bold active:font-normal'>About</a>
        </div>
      </div>
    </nav>
  )

}

export default Navbar
