import getConversations from "@/resources/actions/getConversations";
import getUsers from "@/resources/actions/getUsers";
import ConversationList from "./components/ConversationList";
import LayoutMessageBox from "./components/LayoutMessageBox";


export default async function LayOut({ children }: { children: React.ReactNode }) {
    const conversations = await getConversations();
    const users = await getUsers();

    return (
        <>
            <div className="hidden w-full h-full lg:flex">
                <ConversationList
                    users={users}
                    initialItems={conversations}
                />
                {children}
            </div>
            <div className="w-full h-full flex lg:hidden">
                <LayoutMessageBox
                    users={users}
                    conversations={conversations}
                />
                {children}
            </div>
        </>
    )
}