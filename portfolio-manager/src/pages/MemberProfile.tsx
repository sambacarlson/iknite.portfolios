import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'



const MemberProfile = () => {

  const location = useLocation()
  const { from } = location.state

  return (
    <div className='bg-white text-dark p-5 w-full mx-auto md:w-4/5 md:my-6 lg:w-2/3'>
      <div className='flex flex-col items-center justify-center my-6 md:flex-row md:space-x-3'>
        <div className='w-28 h-28 md:w-36 md:h-36 bg-white flex items-center justify-center'>
          <img src={from.memberPicture} alt="profile"  className='rounded-full w-full h-full object-contain'/>
        </div>
        <div className='flex flex-col items-center'>
          <h3 className='text-dark text-lg mt-4 md:text-reddish'>{from.memberName}</h3>
          <h4 className='text-dark md:text-reddish'><u>{from.memberDepartment}</u></h4>
          <small><i>{from.memberPosition[0].dateStart} - {from.memberPosition[0].dateEnd}</i></small>
        </div>
        
      </div>

      {/* DETAILS */}
      <div className=' text-dark px-5 py-3'>

        {/* ABOUT */}
        <div>
          <div className='flex flex-row items-center justify-start space-x-2 pb-3'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/></svg>
            <h3 className='text-lg font-bold'>About</h3>
          </div>
          <p>
            {from.memberAbout}
          </p>
          {/* <button className='bg-white px-1'>see all</button> */}
        </div>

        <hr className='my-3 bg-dark rounded-full lg:border-2 md:my-6' />

        {/* SKILLS */}
        <div>
          <div className='flex flex-row items-center justify-start space-x-2 pb-3'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 32 32"><path fill="currentColor" d="M30 30h-8V4h8zm-6-2h4V6h-4zm-4 2h-8V12h8zm-10 0H2V18h8z"/></svg>
            <h3 className='text-lg font-bold'>Core Skills</h3>
          </div>
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

        <hr className='my-3 bg-dark rounded-full lg:border-2 md:my-6' />

        {/* CONTRIBUTIONS */}
        <div>
          <div className='flex flex-row items-center justify-start space-x-2 pb-3'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 20 20"><circle cx="15.5" cy="10.5" r="2.5" fill="currentColor"/><path fill="currentColor" d="M1 15h8v2H1Zm0-6h10v2H1Zm0-6h16v2H1Zm14.5 10.6c-3.3 0-4.5 1.6-4.5 2.7V18h9v-1.7c0-1-1.2-2.7-4.5-2.7z"/></svg>
            <h3 className='text-lg font-bold'>Contributions</h3>
          </div>
          <p>
            <em>Inite project: </em>
            Front end developmer
          </p>
          <p>
            <em>Bohikor: </em>
            Designer
          </p>
        </div>

        <hr className='my-3 bg-dark rounded-full lg:border-2 md:my-6' />

        {/* CONTACT */}
        <div>
          <div className='flex flex-row items-center justify-start space-x-2 pb-3'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 14q.825 0 1.413-.588Q14 12.825 14 12t-.587-1.413Q12.825 10 12 10q-.825 0-1.412.587Q10 11.175 10 12q0 .825.588 1.412Q11.175 14 12 14Zm-4 4h8v-.575q0-.6-.325-1.1q-.325-.5-.9-.75q-.65-.275-1.337-.425Q12.75 15 12 15t-1.438.15q-.687.15-1.337.425q-.575.25-.9.75q-.325.5-.325 1.1Zm10 4H6q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h8l6 6v12q0 .825-.587 1.413Q18.825 22 18 22Z"/></svg>
            <h3 className='text-lg font-bold'>Contact</h3>
          </div>
          <p>{from.memberContact.phone}</p>
          <p>{from.memberContact.email}</p>
          <p>{from.memberContact.address}</p>
        </div>

        <hr className='my-3 bg-dark rounded-full lg:border-2 md:my-6' />

        {/* TIMELINE */}
        <div>
          <div className='flex flex-row items-center justify-start space-x-2 pb-3'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 14q-.425 0-.712-.288Q11 13.425 11 13t.288-.713Q11.575 12 12 12t.713.287Q13 12.575 13 13t-.287.712Q12.425 14 12 14Zm-4 0q-.425 0-.713-.288Q7 13.425 7 13t.287-.713Q7.575 12 8 12t.713.287Q9 12.575 9 13t-.287.712Q8.425 14 8 14Zm8 0q-.425 0-.712-.288Q15 13.425 15 13t.288-.713Q15.575 12 16 12t.712.287Q17 12.575 17 13t-.288.712Q16.425 14 16 14Zm-4 4q-.425 0-.712-.288Q11 17.425 11 17t.288-.712Q11.575 16 12 16t.713.288Q13 16.575 13 17t-.287.712Q12.425 18 12 18Zm-4 0q-.425 0-.713-.288Q7 17.425 7 17t.287-.712Q7.575 16 8 16t.713.288Q9 16.575 9 17t-.287.712Q8.425 18 8 18Zm8 0q-.425 0-.712-.288Q15 17.425 15 17t.288-.712Q15.575 16 16 16t.712.288Q17 16.575 17 17t-.288.712Q16.425 18 16 18ZM5 22q-.825 0-1.413-.587Q3 20.825 3 20V6q0-.825.587-1.412Q4.175 4 5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588Q21 5.175 21 6v14q0 .825-.587 1.413Q19.825 22 19 22Zm0-2h14V10H5v10Z"/></svg>
            <h3 className='text-lg font-bold'>Timeline</h3>
          </div>
          <p>
            <em>Intern: </em>
            dateFrom - date-To
          </p>
          <p>
            <em>Employee: </em>
            dateFrom - date-To
          </p>
        </div>

        <hr className='my-3 bg-dark rounded-full lg:border-2 md:my-6' />

        {/* SOCIAL HANDLES */}
        <div>
          <div className='flex flex-row items-center justify-start space-x-2 pb-3'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 48 48"><mask id="ipSConnect0"><g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path fill="#fff" fillRule="evenodd" d="M8 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm2 30a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm28 2a6 6 0 1 0 0-12a6 6 0 0 0 0 12ZM22 28a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm12-16a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z" clipRule="evenodd"/><path d="m11 11l4 4m15-3l-2 2m6 19.5L28 26m-14 5l4-4"/></g></mask><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSConnect0)"/></svg>
            <h3 className='text-lg font-bold'>Social media</h3>
          </div>
          <div className='flex flex-row space-x-2 items-center, justify-start pt-3'>
            <div className='w-8 h-8 bg-dark flex items-center justify-center rounded-full text-light'>fb</div>
            <div className='w-8 h-8 bg-dark flex items-center justify-center rounded-full text-light'>GH</div>
            <div className='w-8 h-8 bg-dark flex items-center justify-center rounded-full text-light'>Tw</div>
            <div className='w-8 h-8 bg-dark flex items-center justify-center rounded-full text-light'>In</div>
          </div>
        </div>

        <hr className='my-3 bg-dark rounded-full lg:border-2 md:my-6' />
        
      </div>
    </div>
  )
}

export default MemberProfile
