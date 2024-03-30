"use client"

import GoogleIcon from "@/resources/icons/google.png"
import Image from "next/image"
import { signIn } from 'next-auth/react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { Card, CardContent } from "@/components/ui/card"
import { SyntheticEvent, useState } from "react"
import EyeIcon from "@/resources/icons/EyeIcon"
import EyeSlashedIcon from "@/resources/icons/EyeSlashedIcon"
import { toast } from "sonner"

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

    async function onSubmit(event: SyntheticEvent) {
        event.preventDefault()
        setIsLoading(true)

        const target = event.target as typeof event.target & {
            email: { value: string };
            password: { value: string };
        };

        signIn('credentials', {
            email: target.email.value,
            password: target.password.value,
            redirect: false
        }).then((callback) => {
            if (callback?.error) {
                toast.error(callback.error);
            }

            if (callback?.ok && !callback?.error) {
                toast.success('Logged In');
            }
        }).finally(() => {
            setIsLoading(false);
        });
    }

    return (
        <Card>
            <CardContent className="grid gap-6 p-5">
                <form onSubmit={onSubmit}>
                    <div className="grid gap-2">
                        <div className="grid gap-1">
                            <Label className="" htmlFor="email">
                                Email
                            </Label>
                            <Input
                                id="email"
                                placeholder="Enter your email here ..."
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
                                    placeholder="Enter your password here ..."
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
                                <div className="mr-2 h-4 w-4 animate-spin border-t-2 border-l-2 rounded-full" />
                            )}
                            Sign In
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
                <div className="grid gap-2">
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
    )
}