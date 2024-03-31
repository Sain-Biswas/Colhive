// 'use client';

// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    // const router = useRouter();
    // const session = useSession();

    // if (session.status === 'authenticated') {
    //     router.push('/dashboard');
    //     return (
    //         <div className="h-[calc(100vh-3rem)] flex justify-center items-center text-4xl flex-col">
    //             <p>Already Authenticated</p>
    //             <p>Redirecting to Dashboard</p>
    //         </div>
    //     )
    // }

    return (
        <div className='md:grid md:grid-cols-2 w-screen'>
            <div className='flex justify-center items-center'>
                <video src="" autoPlay loop></video>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout