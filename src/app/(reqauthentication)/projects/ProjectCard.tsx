import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { FullProjectType } from '@/lib'
import { GitHubLogoIcon, LayersIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'
import Link from 'next/link'
import React from 'react'

interface ProjectCardProps {
    project: FullProjectType
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-2xl'>
                    {project.name}
                </CardTitle>
                <CardContent className='flex flex-col items-center justify-center gap-2'>
                    <Avatar className='h-28 w-28'>
                        <AvatarImage src={project.image || undefined} alt='' />
                        <AvatarFallback className='h-28 w-28'><LayersIcon className='h-24 w-24' /> </AvatarFallback>
                    </Avatar>
                    <p>No. of members : {project.users.length}</p>
                    <p>Project started on : {format(new Date(project.createdAt!), 'PP')}</p>
                </CardContent>
                <CardFooter className='p-0 flex gap-3'>
                    <Button disabled={project?.githubLink == ''} >
                        <Link href={project.githubLink || ''} className='flex gap-3 items-center'>
                            <GitHubLogoIcon className='w-6 h-6' />
                            Github
                        </Link>
                    </Button>
                    <Button>
                        <Link href={`/projects/${project.id}`} >
                            Go to Project
                        </Link>
                    </Button>
                </CardFooter>
            </CardHeader>
        </Card>
    )
}

export default ProjectCard