import getCurrentUser from '@/resources/actions/getCurrentUser';
import prisma from '@/resources/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const currentUser = await getCurrentUser();
        const body = await request.json();
        const {
            name,
            image,
            githubLink,
            role
        } = body;

        if (!currentUser?.id) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        const updateedUser = await prisma.user.update({
            where: {
                id: currentUser.id
            },
            data: {
                image: image,
                name: name,
                githubLink: githubLink,
                role: role
            }
        });

        return NextResponse.json(updateedUser);
    } catch (error: any) {
        console.log(error, 'ERROR_PROFILE_UPDATE');
        return new NextResponse('Internal Error', { status: 500 });
    }
}