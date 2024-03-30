import prisma from '@/resources/prismadb';
import getSession from './getSession';

const getUserWithProjects = async () => {
    try {
        const session = await getSession();

        if (!session?.user?.email) {
            return null;
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            },
            include: {
                projects: true
            }
        });

        if (!currentUser) {
            return null;
        }

        return currentUser;
    } catch (error: any) {
        return null;
    }
}

export default getUserWithProjects;