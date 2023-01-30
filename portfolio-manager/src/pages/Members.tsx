import MemberProfile from "./MemberProfile"
import { Link } from "react-router-dom"
import ProfileCard from "../components/ProfileCard"

export const Members = () => {
  return (
    <div className='p-5'>
      <div>
        <div className='flex items-center justify-center'>
          <img src="assets/arts/teamwork.jpg" alt="team" className='w-1/4'/>
        </div>
        <h4 className='text-sm text-reddish text-center'>Team-work makes dream work</h4>
        <div className="bg-light text-dark flex flex-row items-center justify-between px-6 py-4 mt-4 mb-10">
          <p className="text-reddish">filter:</p>
          <p className="text-dark shadow-lg px-6 py-1">Trainees</p>
        </div>
      </div>
      <div className='flex flex-col space-y-10 my-6 md:grid grid-flow-row grid-cols-3 md:space-y-0 gap-10 md:place-items-center lg:grid-cols-4'>
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
      
    </div>
  )
}
