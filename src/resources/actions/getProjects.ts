import prisma from '@/resources/prismadb';
import getCurrentUser from './getCurrentUser';

const getProjects = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser?.id) {
        return [];
    }

    try {
        const projects = await prisma.project.findMany({
            orderBy: {
                createdAt: 'desc',
            },
            where: {
                userIds: {
                    has: currentUser.id
                }
            },
            include: {
                users: true
            }
        });

        return projects;
    } catch (error: any) {
        return [];
    }
}

export default getProjects;