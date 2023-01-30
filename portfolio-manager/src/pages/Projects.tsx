import { ProjectCard } from "../components/ProjectCard"

export const Projects = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col items-center justify-center'>
        <div className='w-2/5 h-2/5 md:w-1/3 md:1/3 mb-6'>
          <img src="assets/arts/knowledge.jpg" alt="projects" className='filter hue-rotate-180 w-full h-full object-cover' />
        </div>
        <h1 className='text-2xl font-bold'>Projects</h1>
      </div>
      <div className='flex flex-col justify-center items-center space-y-6 mx-auto px-4 my-6 w-full md:w-1/2'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      
    </div>
  )
}