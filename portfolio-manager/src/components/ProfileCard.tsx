import React from 'react'
import testimage from '../assets/testimage.jpeg'
import { Link } from 'react-router-dom'

const ProfileCard = (props:{member:any}) => {
  const [uiColor, setuiColor] = React.useState(false)
  function handleHover(value: boolean) {
    return setuiColor(value)
  }
  const fromData = props.member
  
  return (
    <Link to="/memberProfile" state={{from:fromData}} onMouseOver={()=>handleHover(true)} onMouseOut={()=>handleHover(false)} >
      {/* below medium screens */}
      <div className='flex flex-row items-center justify-start px-5 space-x-3 md:hidden' >
        <div className='w-28 h-28'>
          <img src={testimage} alt="profile" className='w-full h-full object-cover' />
        </div>
        <div className="flex flex-col items-start space-y-2 w-1/2">
          <h3 className={`bg-${uiColor? 'dark' : 'reddish'} text-white pl-1 pr-12 font-bold shadow-tobottom mb-1`}>{props.member.memberName.toUpperCase()}</h3>
          <h4 className='text-dark'>{props.member.memberDepartment}</h4>
          <h4 className='text-dark'>{props.member.memberPosition[0].position}</h4>
          <hr className={`md:hidden w-[170%] mt-2 text-${uiColor? 'dark' : 'reddish'}`} />
        </div>
      </div>
      {/* Medium screens and above */}
      <div className='hidden md:flex flex-col items-center justify-start px-5 space-y-3' >
        <div className='w-40 h-48'>
          <img src={testimage} alt="profile" className='w-full h-full object-cover' />
        </div>
        <div className="flex flex-col items-start space-y-1 w-full">
          <p className='flex flex-row gap-2 item-center w-full'>
            <h3 className={`bg-${uiColor? 'reddish' : 'dark'} text-white w-full py-1 pl-2 font-bold shadow-tobottom mb-1`}>{props.member.memberName.toUpperCase()}</h3>
          </p>
          <p className='flex flex-row gap-2 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M1 20v-2.8q0-.85.438-1.563q.437-.712 1.162-1.087q1.55-.775 3.15-1.163Q7.35 13 9 13t3.25.387q1.6.388 3.15 1.163q.725.375 1.162 1.087Q17 16.35 17 17.2V20Zm18 0v-3q0-1.1-.612-2.113q-.613-1.012-1.738-1.737q1.275.15 2.4.512q1.125.363 2.1.888q.9.5 1.375 1.112Q23 16.275 23 17v3ZM9 12q-1.65 0-2.825-1.175Q5 9.65 5 8q0-1.65 1.175-2.825Q7.35 4 9 4q1.65 0 2.825 1.175Q13 6.35 13 8q0 1.65-1.175 2.825Q10.65 12 9 12Zm10-4q0 1.65-1.175 2.825Q16.65 12 15 12q-.275 0-.7-.062q-.425-.063-.7-.138q.675-.8 1.037-1.775Q15 9.05 15 8q0-1.05-.363-2.025Q14.275 5 13.6 4.2q.35-.125.7-.163Q14.65 4 15 4q1.65 0 2.825 1.175Q19 6.35 19 8Z"/></svg>
            <h4 className='text-dark'>{props.member.memberDepartment}</h4>
          </p>
          <p className='flex flex-row gap-2 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 28 28"><path fill="currentColor" d="M9 13.5v-4h10v4H9Zm-6 8.25A3.25 3.25 0 0 0 6.25 25h15.5A3.25 3.25 0 0 0 25 21.75V6.25A3.25 3.25 0 0 0 21.75 3H6.25A3.25 3.25 0 0 0 3 6.25v15.5ZM8.25 8h11.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1-.75-.75v-5.5A.75.75 0 0 1 8.25 8Z"/></svg>
            <h4 className='text-dark'>{props.member.memberPosition[0].position}</h4>
          </p>
          <hr className={`md:hidden w-[130%] mt-2 text-${uiColor? 'reddish' : 'dark'}`} />
        </div>
      </div>
    </Link>
  )
}

export default ProfileCard
