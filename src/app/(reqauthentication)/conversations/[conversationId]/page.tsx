import getConversationById from "@/resources/actions/getConversationById";
import getMessages from "@/resources/actions/getMessages";
import MessageBody from "./components/MessageBody";
import MessageForm from "./components/MessageForm";
import Header from "./components/header";
import EmptyState from "../components/EmptyState";

interface IParams {
    conversationId: string;
}

const ConversationMessages = async ({ params }: { params: IParams }) => {
    const conversation = await getConversationById(params.conversationId);
    const messages = await getMessages(params.conversationId);

    if (!conversation) {
        return (
            <div className="h-full flex flex-col">
                <EmptyState />
            </div>
        )
    }

    return (
        <div
            className="flex flex-col w-full h-[91vh]"
        >
            <div
                className="h-[10vh]"
            >
                <Header conversation={conversation} />
            </div>
            <div
                className="h-[72vh]"
            >
                <MessageBody initialMessages={messages} />
            </div>
            <div
                className="h-[10vh]"
            >
                <MessageForm />
            </div>
        </div>
    )
}

export default ConversationMessages