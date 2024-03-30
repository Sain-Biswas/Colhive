import prisma from '@/app/resources/libs/prismadb';

const getProjectById = async (projectId: string) => {
    try {
        const project = await prisma?.project.findUnique({
            where: {
                id: projectId
            },
            include: {
                users: true
            }
        });

        return project;
    } catch (error: any) {
        return undefined;
    }
}

export default getProjectById;