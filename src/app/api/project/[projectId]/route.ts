import { NextResponse } from "next/server";
import prisma from '@/app/resources/libs/prismadb';

interface IParams {
    projectId?: string;
}

export async function POST(request: Request, { params }: { params: IParams }) {
    try {
        const body = await request.json();
        const { projectId } = params;
        const {
            rolesMember,
            name,
            github,
            imageURL
        } = body;

        const updatedProject = await prisma.project.update({
            where: {
                id: projectId
            },
            data: {
                name: name,
                roleAssign: rolesMember,
                githubLink: github,
                image: imageURL
            },
        });

        return NextResponse.json(updatedProject, { status: 200 });
    } catch (error: any) {
        return new NextResponse("Server Error", { status: 501 });
    }
}