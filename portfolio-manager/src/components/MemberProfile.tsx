import React from 'react'
import profilePhoto from '../assets/person.svg'

const MemberProfile = () => {
  return (
    <div className='bg-dark text-light p-5'>
      <div className='bg-light w-6 h-6 rounded-full text-dark flex items-center justify-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"/></svg>
      </div>
      <div className='flex flex-col items-center justify-center my-6'>
        <div className='w-28 h-28 rounded-full bg-white flex items-center justify-center'>
          <img src={profilePhoto} alt="profile" />
        </div>
        <h3 className='text-light text-lg mt-4'>Full Name </h3>
        <h4 className='text-light'><u>designer</u></h4>
        <small><i>joined - present</i></small>
      </div>

      {/* DETAILS */}
      <div className='bg-light text-dark px-5 py-3'>

        {/* ABOUT */}
        <div>
          <h3 className='text-lg font-bold'>About</h3>
          <p>
            Software developer with 5 years work experience.fun of music, and traditional festivals
          </p>
          {/* <button className='bg-white px-1'>see all</button> */}
        </div>

        <hr className='my-3 text-light' />

        {/* SKILLS */}
        <div>
          <h3 className='text-lg font-bold'>Core Skills</h3>
          <div>
            <p>
              <em>JavaScript: </em>
              Proficient
            </p>
            <p>
              <em>TypeScript: </em>
              Guru
            </p>
          </div>
        </div>

        <hr className='my-3 text-light' />

        {/* CONTRIBUTIONS */}
        <div>
          <h3 className='text-lg font-bold'>Contributions</h3>
          <p>
            <em>Inite project: </em>
            Front end developmer
          </p>
          <p>
            <em>Bohikor: </em>
            Designer
          </p>
        </div>

        <hr className='my-3 text-light' />

        {/* CONTACT */}
        <div>
          <h3 className='text-lg font-bold'>Contact</h3>
          <p>6555-444-333</p>
          <p>member@iknite.space</p>
          <p>9th avenue molyko Buea</p>
        </div>

        <hr className='my-3 text-light' />

        {/* TIMELINE */}
        <div>
          <h3 className='text-lg font-bold'>Timeline</h3>
          <p>
            <em>Intern: </em>
            dateFrom - date-To
          </p>
          <p>
            <em>Employee: </em>
            dateFrom - date-To
          </p>
        </div>

        <hr className='my-3 text-light' />

        {/* SOCIAL HANDLES */}
        <div>
          <h3 className='text-lg font-bold'>Social media</h3>
          <div className='flex flex-row space-x-2 items-center, justify-start pt-3'>
            <div className='w-8 h-8 bg-dark flex items-center justify-center rounded-full text-light'>fb</div>
            <div className='w-8 h-8 bg-dark flex items-center justify-center rounded-full text-light'>GH</div>
            <div className='w-8 h-8 bg-dark flex items-center justify-center rounded-full text-light'>Tw</div>
            <div className='w-8 h-8 bg-dark flex items-center justify-center rounded-full text-light'>In</div>
          </div>
        </div>

        <hr className='my-3 text-light' />
        
      </div>
    </div>
  )
}

export default MemberProfile
