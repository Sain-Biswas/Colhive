import prisma from "@/resources/prismadb";
import { pusherServer } from "@/lib/pusher";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    try {
        const body = await request.json();
        let {
            name,
            image,
            githubLink,
            admin,
            chatAllowed,
            members
        } = body;

        members.push(admin);
        let conversationID: string = '';

        if (!name || !admin || !members || members.length <= 1) {
            return new NextResponse('Fill all the neccesary fields', { status: 404 });
        }

        if (chatAllowed) {
            const newConversation = await prisma.conversation.create({
                data: {
                    name,
                    image,
                    isGroup: true,
                    users: {
                        connect: [
                            ...members.map((member: string) => ({
                                id: member
                            }))
                        ]
                    }
                },
                include: {
                    users: true
                }
            });

            newConversation.users.forEach((user) => {
                if (user.email) {
                    pusherServer.trigger(user.email, 'conversation:new', newConversation);
                }
            })

            conversationID = newConversation.id;
        }

        const newProject = await prisma.project.create({
            data: {
                name,
                image,
                githubLink,
                admin,
                chatAllowed,
                conversationID,
                users: {
                    connect: [
                        ...members.map((member: string) => ({
                            id: member
                        })),
                    ]
                }
            },
            include: {
                users: true
            }
        })

        console.log(newProject);

        return NextResponse.json(newProject);

    } catch (error: any) {
        console.log(error);
        return new NextResponse('Internal Error', { status: 500 });
    }
}