'use client';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { FullProjectType } from '@/lib'
import { ChatBubbleIcon } from '@radix-ui/react-icons';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'sonner';

interface ChatProjectProps {
    project: FullProjectType | null
}

const ChatProject: React.FC<ChatProjectProps> = ({ project }) => {
    const valid = project?.conversationID || null;
    const router = useRouter();

    function chatCreation() {
        axios.post("/api/conversations", {
            isGroup: true,
            members: project?.userIds,
            image: project?.image,
            name: project?.name,
            id: project?.id
        })
            .then((res) => {
                toast.success("Group Chat Created");
                router.refresh();
            })
            .catch((err) => toast.error("somethimg went Wrong\nChat can't be created"));
    }

    return (
        <div>
            {
                (valid) ? (
                    <Button>
                        <Link href={`/conversations/${project?.conversationID}`}>
                            <ChatBubbleIcon className='inline w-6 h-6' /> Go to Conversation
                        </Link>
                    </Button>
                ) : (
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button>
                                <ChatBubbleIcon className='inline w-6 h-6' /> Create Conversation
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Create Conversation for this Project?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This will create a conversation for all members of this group..
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={chatCreation}>Create</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                )
            }
        </div>
    )
}

export default ChatProject