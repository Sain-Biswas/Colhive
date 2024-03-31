'use client'
import { User } from '@prisma/client';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from './ui/dropdown-menu';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const NavbarDropdown = ({ currentUser }: { currentUser: User | null }) => {
    const router = useRouter();
    function logout() {
        signOut();
        router.push('/authenticate');
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className='' size='icon'>
                    <Avatar className='w-7 h-7'>
                        <AvatarImage src={currentUser?.image || undefined} alt='' />
                        <AvatarFallback>{currentUser?.name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className='flex flex-col justify-center items-center'>
                    <p className='text-xl'>My Account</p>
                    <p className='text-lg'>{currentUser?.name}</p>
                    <p className='text-base font-thin'>{currentUser?.email}</p>
                    <p className='text-sm font-thin'>{currentUser?.role}</p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push('/profile')}>
                    Profile
                </DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuItem className='hover:bg-red-600' onClick={logout}>
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default NavbarDropdown