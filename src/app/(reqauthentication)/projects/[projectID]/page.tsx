import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import getProjectById from '@/resources/actions/getProjectById';
import { ChatBubbleIcon, GitHubLogoIcon, LayersIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react'
import ChatProject from './components/ChatProject';

interface PageParams {
    projectID: string
}

const Page = async ({ params }: { params: PageParams }) => {
    const projectID = params.projectID;
    const project = await getProjectById(projectID);

    return (
        <main className='p-4'>
            <div className='flex gap-4'>
                <Avatar className='w-60 h-60'>
                    <AvatarImage src={project?.image || undefined} alt='' />
                    <AvatarFallback className='w-60 h-60'><LayersIcon className='' /></AvatarFallback>
                </Avatar>
                <div className='flex flex-col justify-center items-center flex-grow gap-3'>
                    <p className='text-5xl'>{project?.name}</p>
                    <div className='p-1 flex gap-3'>
                        <ChatProject project={project || null} />
                        <Button disabled={project?.githubLink == ''}>
                            <Link href={project?.githubLink || ''}>
                                <GitHubLogoIcon className='inline w-6 h-6' /> Github
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Page