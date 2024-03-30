import prisma from '@/resources/prismadb';
import { NextResponse } from "next/server";

interface IParams {
    projectId?: string;
}

export async function POST(request: Request, { params }: { params: IParams }) {
    try {
        const body = await request.json();
        const { projectId } = params;
        const {
            rolesMember
        } = body;

        const updatedProject = await prisma.project.update({
            where: {
                id: projectId,
            },
            data: {
                roleAssign: rolesMember,
            },
        });

        return NextResponse.json(updatedProject, { status: 200 });

    } catch (error: any) {
        console.log(error);
        return new NextResponse('Server Error', { status: 500 });
    }
}