import React from 'react'
import { Link } from 'react-router-dom'

const ProjectProfile = () => {
  return (
    <div className='bg-dark text-light py-5 my-5 mx-auto w-full md:w-1/2'>
      <Link to="/projects" className='bg-light w-6 h-6 mx-5 rounded-full text-dark flex items-center justify-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5" /></svg>
      </Link>
      <div className='mt-6 p-5 flex flex-row items-center justify-between'>
        <div className=''>
          <h1 className='text-lg, font-bold'>BOHIKOR</h1>
          <h4 className=''>Best money management app</h4>
        </div>
        <div className='bg-light h-20 w-20 rounded-full'></div>
      </div>
      <div className='flex flex-row items-center justify-center space-x-3 mt-3 mb-1'>
        <div className="h-10 w-10 bg-light rounded-sm"></div>
        <div className="h-10 w-10 bg-light rounded-sm"></div>
        <div className="h-10 w-10 bg-light rounded-sm"></div>
        <div className="h-10 w-10 bg-light rounded-sm"></div>
        <div className="h-10 w-10 bg-light rounded-sm"></div>
      </div>
      <div className='bg-light w-full h-64 md:h-72'>
        <div className='flex flex-row items-center justify-between px-5 py-1'>
          <div className="bg-dark px-1 rounded-sm">Evaluation</div>
          <div className="bg-dark px-1 rounded-sm">V 1.2</div>
        </div>
      </div>
      <p className="flex flex-row space-x-3 items-center justify-center py-5">
        <a href="#"><small className='ring-1 ring-light p-1 rounded-sm'>Play store</small></a>
        <a href="#"><small className='ring-1 ring-light p-1 rounded-sm'>App store</small></a>
        <a href="#"><small className='ring-1 ring-light p-1 rounded-sm'>bohikor.com</small></a>
      </p>
      <div className='px-5'>
        <p></p>
        {/* DESCRIPTION */}
        <div>
          <h3 className='text-lg font-bold'>Description</h3>
          <p>
            This is a very concise, yet very detailed description of the app in question. though it doesn't make much sense
          </p>
        </div>

        <hr className='my-3 text-light' />

        {/* contributors */}
        <div>
          <h3 className='text-lg font-bold py-2'>Contributors</h3>
          {/* CONTRIBUTIONS */}
          <div className='flex flex-col space-y-2'>
            <div className='flex flex-row items-center space-x-1'>
              <div className='bg-light h-8 w-8 rounded-full'></div>
              <em>Iknite project</em>
            </div>
            <div className='flex flex-row items-center space-x-1'>
              <div className='bg-light h-8 w-8 rounded-full'></div>
              <em>Iknite project</em>
            </div>
            <div className='flex flex-row items-center space-x-1'>
              <div className='bg-light h-8 w-8 rounded-full'></div>
              <em>Iknite project</em>
            </div>
          </div>
          <hr className='my-3 text-dark' />
        </div>

        <hr className='my-3 text-light' />
      </div>
    </div>
  )
}

export default ProjectProfile
