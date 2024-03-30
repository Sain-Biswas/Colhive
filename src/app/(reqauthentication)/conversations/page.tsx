import getConversations from "@/resources/actions/getConversations";
import getUsers from "@/resources/actions/getUsers";
import EmptyState from "./components/EmptyState";


export default async function Home() {
    const conversations = await getConversations();
    const users = await getUsers();

    return (
        <div className="w-full hidden lg:block">
            <EmptyState />
        </div>
    )
}