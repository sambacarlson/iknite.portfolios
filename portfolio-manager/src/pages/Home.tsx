import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = () => {
  const userInfo = useSelector((state:any)=>state.member.memberInfo)
  const projectInfo = useSelector((state:any)=>state.project.projectInfo)
  return (
    <div className='bg-white w-full h-full flex flex-col mb-6 '>
      <div id="hero" className="relative bg-dark h-full text-light grid grid-cols-5 px-4 items-center">
        <div className='absolute w-full h-full opacity-10'>
          <img src="assets/arts/techtree.png" alt="tech tree" className='object-cover w-full h-full' />
        </div>
        <div className='col-span-2 z-10 flex flex-col justify-center items-center pl-6 h-full w-full'>
          <h2 className="text-white text-4xl font-bold md:text-6xl lg:text-8xl lg:pl-12">Kick-Start Your Career</h2>
        </div>
        <div className='col-span-3 z-10 flex flex-col items-end'>
          <img src='assets/arts/globe.png' alt="hero"  className='object-cover w-[50vw] h-[50vw] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-full'/>
        </div>
      </div>
        <p className="text-center font-normal text-black text-base px-4 py-6">Learn from the best, gain experience and convert you knoledge into wealth by delivering solutions</p>
      <div id="hero" className="bg-white grid grid-cols-2 px-2 items-center">
        <h2 className=" col-span-2 text-white p-1 bg-dark text-xs">TECH TALENT ACCELARATION</h2>
        <div className='col-span-1 flex flex-col space-y-1 justify-start'>
          <p className="font-normal text-dark text-lg">Master the skills you need to become a professional, and earn your dream job</p>
        </div>
        <div className='col-span-1flex flx-col space-y-2 items-center justify-end'>
          <h2 className=" text-darker text-2xl text-end font-bold">Tech Talent Accelaration</h2>
          <div className="shadow-round p-3 flex flex-row items-center justify-around text-reddish">      
            <Link to="/about">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24"><g id="fePhone0" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1"><g id="fePhone1" fill="currentColor"><path id="fePhone2" d="M4.024 9L4 8.931C3.46 7.384 3 5.27 3 4c0-.55.45-1 1-1h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.837A16.054 16.054 0 0 0 15 17.837V17a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3c0 .45-.55 1-1 1c-1.725 0-3.44-.456-5-1c-5.114-1.832-9.168-5.886-10.976-11Z"/></g></g></svg>
            </Link>
            <Link to="/about">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44z"/></svg>
            </Link>
            <Link to="/about">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"/></svg>
            </Link>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeWidth="2" d="M9 15v8H1v-8h8Zm14 0v8h-8v-8h8ZM9 1v8H1V1h8Zm14 0v8h-8V1h8Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5zm-6.712 3.006a6.983 6.983 0 0 0-.28 1.65L5 16v6H2v-4.5a3.5 3.5 0 0 1 3.119-3.48l.17-.014zm13.424 0A3.501 3.501 0 0 1 22 17.5V22h-3v-6c0-.693-.1-1.362-.288-1.994zM5.5 8a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zm13 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zM12 2a4 4 0 1 1 0 8a4 4 0 0 1 0-8z"/></svg> */}
          </div>
        </div>
      </div>
      <div className='bg-light text-reddish w-full flex flex-col space-y-3 my-3 p-3'>
        <p className="tex-xl">{userInfo}</p>
        <p className="tex-xl">{projectInfo}</p>
        <p className="tex-xl">more info</p>
        <p className="tex-xl">more info</p>
      </div>
    </div>
  )
}

export default Home
