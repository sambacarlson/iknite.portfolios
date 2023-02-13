import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = () => {
  const userInfo = useSelector((state: any) => state.member.memberInfo)
  const projectInfo = useSelector((state: any) => state.project.projectInfo)
  return (
    <div className='bg-white w-full h-full flex flex-col mb-6 '>
      <div id="hero" className="relative bg-dark h-full text-light grid grid-cols-5 px-4 py-9 items-center">
        <div className='absolute w-full h-full opacity-10'>
          <img src="assets/arts/techtree.png" alt="tech tree" className='object-cover w-full h-full' />
        </div>
        <div className='col-span-2 z-10 flex flex-col justify-center items-center pl-6 h-full w-full'>
          <h2 className="text-white text-3xl font-bold md:text-6xl lg:text-7xl lg:pl-12">Kick-Start Your Career</h2>
          <hr className='border-1 w-full mt-6 mb-2' />
          <div className='flex flex-row space-x-2 duration-500 whitespace-nowrap text-sm'>
            <p className='text-light px-2 py-1 hover:ring-1 ring-white'>How to Join</p>
            <p className='hidden md:block text-light px-2 py-1 hover:ring-1 ring-white'>About Us</p>
            <p className='hidden lg:block text-light px-2 py-1 hover:ring-1 ring-white'>Our Projects</p>
            <p className='hidden lg:block text-light px-2 py-1 hover:ring-1 ring-white'>Our Teams</p>
          </div>
        </div>
        <div className='col-span-3 z-10 flex flex-col items-end'>
          <img src='assets/arts/globe.png' alt="hero" className='object-cover w-[50vw] h-[50vw] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-full' />
        </div>
      </div>
      <p className="text-center font-normal text-black text-base px-5 pt-8 py-6 md:px-14">Learn from the best, gain experience and convert you knoledge into wealth by delivering solutions</p>

      <div className='flex flex-col space-y-3 md:space-y-6'>

        <div id="hero" className="bg-white grid grid-cols-2 px-2 items-center md:px-12">
          <h2 className=" col-span-2 mt-4 text-reddish p-1 border-b-[1px] border-dark text-xs md:text-normal md:w-1/2">TECH TALENT ACCELARATION</h2>
          <div className='col-span-1 flex flex-col space-y-1 justify-start pr-2'>
            <p className="md:hidden font-normal text-dark text-base text-justify">Coding & Design Bootcamp. Become a Graphic Designer or Mobile App Developer with a job guaranteed in 1 year.</p>
            <p className="hidden md:block font-normal text-dark text-base text-justify">Coding & Design Bootcamp. Become a Graphic Designer or Mobile App Developer with a job guaranteed in 1 year. Get trained for free with your tuition fee deferred. Instructor-led, hands-on, full-time training.</p>
            <div className="italic text-slate-500 py-1 hover:text-dark text-sm">Learn more</div>
          </div>
          <div className='col-span-1 md:w-2/3 justify-self-end ring-0 ring-light ml-4 md:ring-1'>
            <img src="assets/smcon22.png" alt="silicon mountain" className='object-cover' />
          </div>
        </div>
        <div id="hero" className="bg-white grid grid-cols-2 px-2 items-center md:px-12">
          <h2 className=" col-span-2 mt-4 text-reddish p-1 border-b-[1px] border-dark text-xs md:text-normal md:w-1/2">SILICON MOUNTAIN CONFERENCE</h2>
          <div className='col-span-1 md:w-2/3 justify-self-start ring-0 ring-light mt-1 mr-4 md:ring-1'>
            <img src="assets/bookclub.jpg" alt="mountain hub" />
          </div>
          <div className='col-span-1 flex flex-col space-y-1 justify-start pr-2'>
            <p className="md:hidden font-normal text-dark text-base text-justify">Biggest tech conference in west africa, featuring creative activities, expositions and networking</p>
            <p className="hidden md:block font-normal text-dark text-base text-justify">The Buea Tech ecosystem starting from 2015 organizes the annual Silicon Mountain conference popularly referred to as #SMConf which brings together over 500+ like-minded creatives and hackers from the Mountain Area and around Africa for two days of sessions, labs, speakers. It features tech talks, design and code labs.</p>
            <div className="italic text-slate-500 py-1 hover:text-dark text-sm">Learn more</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
