import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const ProjectProfile = () => {
  const location = useLocation()
  const{from} = location.state
  // console.log('=>>', from)

  return (
    <div className='bg-white text-dark py-5 my-5 mx-auto w-full md:w-4/5 lg:w-2/3'>
      <div className='mt-6 p-5 flex flex-row items-center justify-between'>
        <div className=''>
          <h1 className='text-lg, font-bold'>{from.projectName}</h1>
          <h4 className=''>{from.projectHeadline}</h4>
        </div>
        <div className='h-20 w-20 md:h-28 md:w-28'>
          <img src={from.projectDemoImages[0]} alt="product" className='h-full w-full object-cover rounded-full lg:rounded-sm' />
        </div>
      </div>
      <div className='flex flex-row items-center justify-center space-x-3 mt-3 mb-1'>
        <div className="h-10 w-10 bg-light rounded-sm">
          <img src="assets/arts/leadership.jpg" alt="project demo" className='h-full w-full object-cover' />
        </div>
        <div className="h-10 w-10 bg-light rounded-sm">
          <img src="assets/arts/leadership.jpg" alt="project demo" className='h-full w-full object-cover' />
        </div>
        <div className="h-10 w-10 bg-light rounded-sm">
          <img src="assets/arts/leadership.jpg" alt="project demo" className='h-full w-full object-cover' />
        </div>
        <div className="h-10 w-10 bg-light rounded-sm">
          <img src="assets/arts/leadership.jpg" alt="project demo" className='h-full w-full object-cover' />
        </div>
        <div className="h-10 w-10 bg-light rounded-sm">
          <img src="assets/arts/leadership.jpg" alt="project demo" className='h-full w-full object-cover' />
        </div>
      </div>
      <div className='bg-light ring-1 ring-light bg-opacity-50 w-full h-64 md:h-72'>
        <div className='flex flex-row items-center justify-between px-5 py-1'>
          <div className="px-1 rounded-sm">{from.projectStatus}</div>
          <div className="px-1 rounded-sm">V 1.2</div>
        </div>
        <img src={from.projectDemoImages[0]} alt="project" className='h-full w-full object-cover' />
      </div>
      <p className="flex flex-row space-x-3 items-center justify-center py-5 z-10 text-light">
        <a href="#"><small className='bg-dark ring-1 hover:ring-light p-1 rounded-sm'>Play store</small></a>
        <a href="#"><small className='bg-dark ring-1 hover:ring-light p-1 rounded-sm'>App store</small></a>
        <a href="#"><small className='bg-dark ring-1 hover:ring-light p-1 rounded-sm'>Website</small></a>
      </p>
      <div className='px-5'>
        <p></p>
        {/* DESCRIPTION */}
        <div>
          <h3 className='text-lg font-bold'>Description</h3>
          <p>
            {from.projectDescription}
          </p>
        </div>

        <hr className='my-3 text-light' />

        {/* contributors */}
        <div>
          <h3 className='text-lg font-bold py-2'>Contributors</h3>
          {/* CONTRIBUTIONS */}
          <div className='flex flex-col space-y-2'>
            <div className='flex flex-row items-center space-x-1'>
              <div className='h-8 w-8'>
                <img src="assets/arts/reviewing.jpg" alt="contributor" className='w-full h-full object-cover rounded-full' />
              </div>
              <em>Iknite project</em>
            </div>
            <div className='flex flex-row items-center space-x-1'>
              <div className='bg-light h-8 w-8 rounded-full'>
                <img src="assets/arts/reviewing.jpg" alt="contributor" className='w-full h-full object-cover rounded-full' />
              </div>
              <em>Iknite project</em>
            </div>
            <div className='flex flex-row items-center space-x-1'>
              <div className='bg-light h-8 w-8 rounded-full'>
                <img src="assets/arts/reviewing.jpg" alt="contributor" className='w-full h-full object-cover rounded-full' />
              </div>
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
