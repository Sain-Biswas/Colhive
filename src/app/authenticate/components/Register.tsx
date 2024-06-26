"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import EyeIcon from "@/resources/icons/EyeIcon";
import EyeSlashedIcon from "@/resources/icons/EyeSlashedIcon";
import GoogleIcon from "@/resources/icons/google.png";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import axios, { AxiosError, AxiosResponse } from 'axios';
import clsx from "clsx";
import { signIn } from 'next-auth/react';
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export default function Register({ className, ...props }: UserAuthFormProps) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isShow, setIsShow] = useState<boolean>(false);

    const socialAction = (action: string) => {
        setIsLoading(true);

        signIn(action, { redirect: false })
            .then((callback: any) => {
                if (callback?.error) {
                    toast.error('Something went wrong');
                }

                if (callback?.ok && !callback?.error) {
                    toast.success('Logged In');
                }
            }).finally(() => {
                setIsLoading(false);
            })
    };

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        setIsLoading(true)
        const target = event.target as typeof event.target & {
            name: { value: string };
            role: { value: string };
            email: { value: string };
            password: { value: string };
        };

        const [email, name, password, role] = [target.email.value, target.name.value, target.password.value, target.role.value];


        await axios.post('/api/register', { email, name, password, role }).then((res) => {
            signIn('credentials', { email, password });
            toast.success('Account created Successfully');
        }).catch((err) => toast.error('Try Again')).finally(() => setIsLoading(false));
    }


    return (
        <Card>
            <CardContent className="grid gap-6 p-5">
                <form onSubmit={onSubmit}>
                    <div className="grid gap-2">
                        <div className="grid gap-1">
                            <Label className="" htmlFor="name">
                                Name
                            </Label>
                            <Input
                                id="name"
                                placeholder="Enter name here ..."
                                type="text"
                                autoCapitalize="none"
                                autoComplete="name"
                                autoCorrect="off"
                                className="text-xs"
                                disabled={isLoading}
                            />
                        </div>
                        <div className="grid gap-1">
                            <Label className="" htmlFor="name">
                                Role
                            </Label>
                            <Input
                                id="role"
                                placeholder="Enter role here ..."
                                type="text"
                                autoCapitalize="none"
                                autoComplete="name"
                                autoCorrect="off"
                                className="text-xs"
                                disabled={isLoading}
                            />
                        </div>
                        <div className="grid gap-1">
                            <Label className="" htmlFor="email">
                                Email
                            </Label>
                            <Input
                                id="email"
                                placeholder="Enter email here ..."
                                type="email"
                                autoCapitalize="none"
                                autoComplete="email"
                                autoCorrect="off"
                                className="text-xs"
                                disabled={isLoading}
                            />
                        </div>
                        <div className="grid gap-1">
                            <Label className="" htmlFor="password">
                                Password
                            </Label>
                            <div className="flex gap-1">
                                <Input
                                    type={(isShow) ? "password" : "text"}
                                    placeholder="Enter password here"
                                    id="password"
                                    autoCapitalize="none"
                                    autoCorrect="off"
                                    className="text-xs"
                                    disabled={isLoading}
                                />
                                <Button size='icon' variant='outline' onClick={(event: any) => {
                                    event.preventDefault();
                                    setIsShow(current => !current)
                                }}>
                                    {
                                        (isShow) ? (<EyeIcon className="" />) : (<EyeSlashedIcon className="" />)
                                    }
                                </Button>
                            </div>
                        </div>
                        <Button disabled={isLoading}>
                            {isLoading && (
                                <div className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Sign Up
                        </Button>
                    </div>
                </form>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                            Or continue with
                        </span>
                    </div>
                </div>
                <div className="grid gap-1">
                    <Button variant="outline" type="button" disabled={isLoading} onClick={() => socialAction('github')}>
                        {isLoading ? (
                            <div className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <GitHubLogoIcon className="mr-2 h-4 w-4" />
                        )}{" "}
                        GitHub
                    </Button>
                    <Button variant="outline" type="button" disabled={isLoading} onClick={() => socialAction('google')}>
                        {isLoading ? (
                            <div className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <Image src={GoogleIcon} alt="" width={2046} height={2046} className="mr-2 h-4 w-4" />
                        )}{" "}
                        Google
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}