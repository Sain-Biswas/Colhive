'use client';
import { FullMessageType } from "@/lib/index";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import { PersonIcon } from "@radix-ui/react-icons";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";


interface MessageBoxProps {
    data: FullMessageType;
    isLast?: boolean;
}

const MessageBox: React.FC<MessageBoxProps> = ({ data, isLast }) => {
    const session = useSession();
    const isOwn = session?.data?.user?.email === data?.sender?.email;
    const seenList = (data.seen || [])
        .filter((user) => user.email !== data?.sender?.email)
        .map((user) => user.name)
        .join(', ');


    const container = `flex gap-3 p-4 ${isOwn && 'justify-end'}`;
    const avatar = `${isOwn && 'order-2'}`;
    const body = `flex flex-col gap-2 ${isOwn && 'items-end'}`;
    const message = `text-sm w-fit overflow-hidden ${(isOwn && !data.image) ? 'bg-sky-500 text-white' : 'bg-gray-100 text-black'} ${data.image ? 'rounded-md bg-transparent p-0' : 'rounded-xl py-2 px-3'}`

    return (
        <div
            className={container}
        >
            <div
                className={avatar}
            >
                <Avatar className="">
                    <AvatarImage src={data.sender.image || undefined} alt="" />
                    <AvatarFallback className=""><PersonIcon className="" /></AvatarFallback>
                </Avatar>
            </div>
            <div
                className={body}
            >
                <div
                    className="flex items-center gap-1"
                >
                    <div
                        className="text-sm text-gray-500"
                    >
                        {data.sender.name}
                    </div>
                    <div
                        className="text-xs text-gray-400"
                    >
                        {format(new Date(data.createdAt), 'p')}
                    </div>
                </div>
                <div
                    className={message}
                >
                    {data.image ? (
                        // <Image
                        //     alt="Can't load Image"
                        //     height={300}
                        //     width={300}
                        //     src={data.image}
                        //     className="object-cover cursor-pointer hover:scale-110 transition translate "
                        // />
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    className="h-fit w-fit p-0 m-0 bg-transparent"
                                >
                                    {/* <MdZoomOutMap /> */}
                                    <Image
                                        src={data.image}
                                        alt="Can't load Image"
                                        className="h-60 z-0"
                                    />
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <Image
                                    src={data.image}
                                    layout="fill"
                                    alt="Can't load Image"
                                />
                            </DialogContent>
                        </Dialog>
                    ) : (
                        <div
                            className="h-fit"
                        >
                            {data.body}
                        </div>
                    )}
                </div>
                {
                    isLast && isOwn && (seenList.length > 0) && (
                        <div
                            className="text-gray-400 text-sm"
                        >
                            {`Seen by ${seenList}`}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default MessageBox