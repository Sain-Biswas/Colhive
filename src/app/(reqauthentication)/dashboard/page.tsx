import NewProjects from '@/components/newProjects';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import getCurrentUser from '@/resources/actions/getCurrentUser'
import getProjects from '@/resources/actions/getProjects';
import getUsers from '@/resources/actions/getUsers';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import React from 'react'

const Page = async () => {
    const currentUser = await getCurrentUser();
    const projects = await getProjects();
    const userlist = await getUsers();

    return (
        <main className='p-4'>
            <Card>
                <CardContent className='flex p-4 gap-3'>
                    <div className='w-1/4'>
                        <Avatar className='w-36 h-36 m-auto'>
                            <AvatarImage src={currentUser?.image || ''} alt='' />
                            <AvatarFallback className=''>{currentUser?.name?.charAt(0)}</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className='w-3/4'>
                        <div className='flex justify-between items-center'>
                            <div>
                                <CardTitle className='text-2xl'>{currentUser?.name}</CardTitle>
                                <CardDescription className='text-lg'>{currentUser?.email}</CardDescription>
                            </div>
                            <Button className=''>
                                <GitHubLogoIcon className='h-7 w-7' /> <p>Github</p>
                            </Button>
                        </div>
                        <p>Role : {currentUser?.role || 'Role not mentioned yet'}</p>
                        <p>Joined : {format(new Date(currentUser?.createdAt!), 'PP')}</p>
                    </div>
                </CardContent>
            </Card>
            <NewProjects initialProjects={userlist} currentUser={currentUser} />
            <div className='mt-4'>
                <p>Projects</p>
                <div>

                </div>
            </div>
        </main>
    )
}

export default Page