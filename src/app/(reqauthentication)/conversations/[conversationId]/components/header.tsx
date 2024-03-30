'use client';

import useActiveList from "@/resources/hooks/useActiveList";
import useOtherUser from "@/resources/hooks/useOtherUser";
import { Conversation, User as USER } from "@prisma/client";
import Link from "next/link";
import { useMemo } from "react";
import MessageProfile from "./MessageProfile";
import { ChevronRightIcon, DotsHorizontalIcon, PersonIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface HeaderProps {
    conversation: Conversation & {
        users: USER[]
    }
};

const Header: React.FC<HeaderProps> = ({ conversation }) => {

    const otherUser = useOtherUser(conversation);

    const { members } = useActiveList();
    const isActive = members.indexOf(otherUser?.email!) !== -1;
    const statusText = useMemo(() => {
        if (conversation.isGroup) {
            return `${conversation.users.length} members`;
        }

        return isActive ? 'Active' : 'Offline';
    }, [conversation, isActive]);

    return (
        <div
            className="bg-white dark:bg-[#001C30] w-full flex border-b-[1px] py-2 px-4 lg:px-6 justify-between items-center shadow-sm"
        >
            <div
                className="flex gap-3 items-center"
            >
                <Link
                    className="lg:hidden block text-sky-500 hover:text-sky-700 transition cursor-pointer"
                    href="/user/chats/conversations"
                >
                    <ChevronRightIcon className="" />
                </Link>
                <Avatar className="">
                    <AvatarImage src={conversation.image || otherUser.image || undefined} alt="" />
                    <AvatarFallback><PersonIcon className="" /></AvatarFallback>
                </Avatar>
                <div
                    className="flex flex-col"
                >
                    <div className="text-black dark:text-white text-lg">
                        {conversation.name || otherUser.name}
                    </div>
                    <div
                        className="text-sm font-light text-neutral-500"
                    >
                        {statusText}
                    </div>
                </div>
            </div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant='ghost'>
                        <DotsHorizontalIcon className="" />
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        Profile
                    </DialogHeader>
                    <MessageProfile data={conversation} statusText={statusText} />
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Header