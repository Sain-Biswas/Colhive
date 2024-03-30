import { FullProjectType } from '@/lib';
import getProjects from '@/resources/actions/getProjects'
import React from 'react'
import ProjectCard from './ProjectCard';

const Page = async () => {
    const projects = await getProjects();
    return (
        <div className='p-5'>
            <p>My Projects</p>
            <div className='flex flex-wrap gap-3 justify-stretch'>
                {
                    projects.map((project: FullProjectType) => (<ProjectCard project={project} />))
                }
            </div>
        </div>
    )
}

export default Page