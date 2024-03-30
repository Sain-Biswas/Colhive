'use client';

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

const Page = () => {
    const [action, setAction] = useState<'LOGIN' | 'REGISTER'>('LOGIN');

    return (
        <div className='h-[calc(100vh-3rem)] flex justify-center items-center flex-col'>
            <p className="text-4xl font-bold text-center">
                {(action === 'LOGIN') ? "Log in to your account" : "Create new account to continue"}
            </p>
            <p>
                {(action === 'LOGIN') ? "new to Colhive, " : "already registered, "}
                <Button variant='link' onClick={() => {
                    if (action === 'LOGIN') setAction('REGISTER');
                    else setAction('LOGIN');
                }}>
                    {(action === 'LOGIN') ? "Register now" : "Login"}
                </Button>
            </p>
            <div>
                {
                    (action === 'LOGIN') ? (<Login />) : (<Register />)
                }
            </div>
        </div>
    )
}

export default Page