import { useSelector } from "react-redux"
import { ProjectCard } from "../components/ProjectCard"

export const Projects = () => {
  const projectInfo = useSelector((state:any)=>state.project.projectInfo)
  return (
    <div className='flex flex-col md:flex-row md:mt-10'>
      <div className='flex flex-col items-center justify-center md:w-1/3 md:justify-start md:border-light md:border-r-2'>
        <div className='w-2/5 h-auto md:w-1/3 md:1/3 mb-6'>
          <img src="assets/arts/knowledge.jpg" alt="projects" className='filter hue-rotate-180 w-full h-full object-cover' />
        </div>
        <h1 className='text-2xl font-bold'>Projects</h1>
      </div>
      <div className='flex flex-col justify-center items-center space-y-6 mx-auto px-4 my-6 w-full md:w-1/2 md:mt-0'>
        
        {
          projectInfo.map((project:any)=>
          <ProjectCard 
            project={project}
          />
          )
        }

        {/* <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard /> */}
      </div>
      
    </div>
  )
}