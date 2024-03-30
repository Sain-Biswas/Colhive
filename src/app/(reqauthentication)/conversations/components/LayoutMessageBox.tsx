'use client';
import { FullConversationType } from "@/lib/index";
import ConversationList from "./ConversationList";
import { User } from "@prisma/client";
import { usePathname } from "next/navigation";

interface LayoutMessageBoxProps {
    users: User[],
    conversations: FullConversationType[],
}

const LayoutMessageBox: React.FC<LayoutMessageBoxProps> = ({ users, conversations }) => {
    const path = usePathname();

    if (path === '/user/chats/conversations') {
        return (
            <div className="w-full h-full flex">
                <ConversationList
                    users={users}
                    initialItems={conversations}
                />
            </div>
        )
    }

    return (
        <>
        </>
    )
}

export default LayoutMessageBox