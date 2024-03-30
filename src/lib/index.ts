import { Conversation, Message, Project, User } from "@prisma/client";

export type FullMessageType = Message & {
    sender: User,
    seen: User[]
};

export type FullConversationType = Conversation & {
    users: User[],
    messages: FullMessageType[],
};

export type FullProjectType = Project & {
    users: User[],
};

export type UserProjectCombo = User & {
    projects: Project[],
};