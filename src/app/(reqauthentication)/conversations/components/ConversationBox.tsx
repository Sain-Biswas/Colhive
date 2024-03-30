import useOtherUser from "@/resources/hooks/useOtherUser";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { FullConversationType } from "@/lib/";
import { AvatarImage } from "@radix-ui/react-avatar";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";


interface ConversationBoxProps {
    data: FullConversationType,
    selected?: boolean;
}

const ConversationBox: React.FC<ConversationBoxProps> = ({ data, selected }) => {
    const otherUser = useOtherUser(data);
    const session = useSession();
    const router = useRouter();

    const handleClick = useCallback(() => {
        router.push(`/conversations/${data.id}`);
    }, [data.id, router]);

    const lastMessage = useMemo(() => {
        const messages = data.messages || [];

        return messages[messages.length - 1];
    }, [data.messages]);

    const userEmail = useMemo(() => {
        return session.data?.user?.email;
    }, [session.data?.user?.email]);

    const hasSeen = useMemo(() => {
        if (!lastMessage) {
            return false;
        }

        const seenArray = lastMessage.seen || [];

        if (!userEmail) {
            return false;
        }

        return seenArray.filter((user) => user.email === userEmail).length !== 0;
    }, [userEmail, lastMessage]);

    const lastMessageText = useMemo(() => {
        if (lastMessage?.image) {
            return 'Sent an Image';
        }

        if (lastMessage?.body) {
            return lastMessage.body;
        }

        return 'Started a conversation';
    }, [lastMessage]);

    return (
        <Button
            variant='ghost'
            className={`p-3 ring-1 lg:p-2 mb-2 lg:mb-2 w-full relative flex items-center space-x-3 rounded-lg transition cursor-pointer ${selected ? 'bg-primary' : ''}`}
            onClick={handleClick}
        >
            <Avatar>
                <AvatarImage src={data.image || undefined} alt="" />
                <AvatarFallback>{data.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div
                className="min-w-0 flex-1"
            >
                <div
                    className="focus:outline-none"
                >
                    <div
                        className="flex justify-between items-center mb-1"
                    >
                        <p
                            className="text-lg font-semibold text-gray-900 dark:text-white"
                        >
                            {data.name || otherUser.name}
                        </p>
                        {lastMessage?.createdAt && (
                            <p
                                className="text-xs text-gray-400 font-light"
                            >
                                {format(new Date(lastMessage.createdAt), 'p')}
                            </p>
                        )}
                    </div>
                    <p
                        className={`truncate text-sm ${hasSeen ? 'text-gray-500 dark:text-gray-300' : 'text-black dark:text-white font-medium'}`}
                    >
                        {lastMessageText}
                    </p>
                </div>

            </div>

        </Button>
    )
}

export default ConversationBox;