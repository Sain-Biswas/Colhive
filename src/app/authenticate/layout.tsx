import React from 'react'

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='md:grid md:grid-cols-2 w-screen'>
            <div>
                Giffy
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout