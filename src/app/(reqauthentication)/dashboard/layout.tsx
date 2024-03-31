'use client'

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const router = useRouter();
    const session = useSession();

    const valid = session.status === 'authenticated';

    if (!valid) {
        router.push('/authenticate');
        return (
            <div className="h-[calc(100vh-3rem)] flex justify-center items-center">
                <p className="text-4xl">Login to Continue ...</p>
            </div>
        )
    }
    return (
        <div>{children}</div>
    )
}

export default Layout