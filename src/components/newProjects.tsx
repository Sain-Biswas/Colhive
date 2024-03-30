'use client';
import React, { FormEventHandler, SyntheticEvent, useMemo, useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { User } from '@prisma/client';
import { ScrollArea } from './ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { LayersIcon } from '@radix-ui/react-icons';
import { Label } from './ui/label';
import { Input } from './ui/input';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'sonner';
import { Checkbox } from './ui/checkbox';
import { RadioGroup } from './ui/radio-group';
import { CheckboxGroup } from '@radix-ui/themes';

interface NewProjectsProps {
    initialProjects: User[],
    currentUser: User | null
}

const NewProjects: React.FC<NewProjectsProps> = ({ initialProjects, currentUser }) => {

    const [imageFile, setImageFile] = useState<any>(null);
    const [imageURL, setImageURL] = useState<any>(null);
    const [isUploading, setIsUploading] = useState<boolean>(false);
    const [members, setMembers] = useState<string[]>([]);

    function imageChange(e: any) {
        setImageURL(URL.createObjectURL(e.target.files[0]));
        setImageFile(e.target.files[0]);
    }

    async function handleUpload(event: SyntheticEvent) {
        event.preventDefault();
        setIsUploading(true);

        const target = event.target as typeof event.target & {
            name: { value: string };
            gitlink: { value: string };
            chat: { value: string };
        };

        const admin = currentUser?.id;

        let cloudinaryURL: string = '';

        const formData = new FormData();
        formData.append("file", imageFile);
        formData.append("upload_preset", "gwzesufu");

        await axios.post("https://api.cloudinary.com/v1_1/dex7fj8qq/image/upload", formData)
            .then((res: AxiosResponse) => {
                cloudinaryURL = res.data.secure_url;
            })
            .catch((err: AxiosError) => toast.error("Can't upload image \n" + err))

        axios.post('/api/project', {
            name: target.name.value,
            image: cloudinaryURL,
            githubLink: target.gitlink.value,
            admin: currentUser?.id,
            chatAllowed: (target.chat.value === 'on'),
            members: members
        })
            .then(() => {
                toast.success('Project Created Successfully');
            })
            .catch((err: AxiosError) => {
                console.log(err);
                toast.error("Something went Wrong \n Can't create a Project")
            })
            .finally(() => {
                setIsUploading(false);
            })
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    New Project
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Enter Project Details</DialogTitle>
                    <DialogDescription>As the creator, you will become the admin by default.</DialogDescription>
                </DialogHeader>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Avatar className='w-28 h-28'>
                        <AvatarImage src={imageURL} alt='' />
                        <AvatarFallback className='w-28 h-28'><LayersIcon className='w-24 h-24' /></AvatarFallback>
                    </Avatar>
                    <Button>
                        <Label htmlFor='image'>Select Image</Label>
                        <input type="file" name="image" id="image" className='hidden' onChange={imageChange} />
                    </Button>
                </div>
                <div className=''>
                    <form onSubmit={handleUpload}>
                        <div className="grid gap-2">
                            <div className="grid gap-1">
                                <Label className="" htmlFor="name">
                                    Name*
                                </Label>
                                <Input
                                    id="name"
                                    placeholder="Name of your Project"
                                    type="text"
                                    className="text-xs"
                                    disabled={isUploading}
                                />
                            </div>
                            <div className="grid gap-1">
                                <Label className="" htmlFor="gitlink">
                                    Github Link
                                </Label>
                                <Input
                                    type="text"
                                    placeholder="Githun Link if any"
                                    id="gitlink"
                                    className="text-xs"
                                    disabled={isUploading}
                                />
                            </div>
                            <div className="flex gap-4 items-center">
                                <Checkbox id='chat' />
                                <Label className="" htmlFor="chat">
                                    Create group Chat alos
                                </Label>
                            </div>
                            <div className="grid gap-1">
                                <Label className="" htmlFor="members">
                                    Select Members
                                </Label>
                                <CheckboxGroup.Root defaultValue={members} onValueChange={(e: string[]) => setMembers(e)} variant='surface' color='indigo' name='members' className='w-full flex flex-col gap-1'>
                                    {
                                        (initialProjects.map((user: User) => (
                                            <CheckboxGroup.Item value={user.id} className='p-1 text-xs'>
                                                {user.email}
                                            </CheckboxGroup.Item>
                                        )))
                                    }
                                </CheckboxGroup.Root>
                            </div>
                            <Button disabled={isUploading}>
                                {isUploading && (
                                    <div className="mr-2 h-4 w-4 animate-spin border-t-2 border-l-2 rounded-full" />
                                )}
                                Create Project
                            </Button>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default NewProjects