'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useConversation } from "@/resources/hooks/useRoutes";
import { Link2Icon, PaperPlaneIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { CldUploadButton } from "next-cloudinary";
import { ChangeEvent, useState } from "react";

const MessageForm = () => {
    const [message, setMessage] = useState<string>('');
    const { conversationId } = useConversation();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        axios.post('/api/messages', {
            conversationId,
            message
        })

        setMessage('');
    }

    const handleImageUpload = (result: any) => {
        axios.post('/api/messages', {
            image: result?.info?.secure_url,
            conversationId
        })
    }

    return (
        <div
            className="bg-white dark:bg-[#001C30] text-black p-2 lg:p-[0.6rem] border-t flex items-center gap-2 lg:gap-4 w-full"
        >
            <CldUploadButton
                options={{ maxFiles: 1 }}
                onUpload={handleImageUpload}
                uploadPreset="gwzesufu"
            >
                <Link2Icon className="text-sky-500" />
            </CldUploadButton>

            <Input
                className=""
                value={message}
                placeholder="Message..."
                onChange={(e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
            />
            <Button
                disabled={(message === '') ? true : false}
                className="w-8 h-8"
                size='icon'
                onClick={handleSubmit}
            >
                <PaperPlaneIcon className="-rotate-45 w-5 h-5" />
            </Button>
        </div>
    )
}

export default MessageForm;