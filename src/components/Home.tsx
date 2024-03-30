import * as React from "react";
import { Button } from "@/components/ui/button";
import bg_home from "../resources/Images/bg_home.jpg";
import Image from "next/image";

export function Home() {
    return (
        <section className="w-screen h-[calc(100vh-4rem)] flex justify-center items-center p-6 py-6 gap-2">
            <div className="w-1/2 flex justify-between items-center flex-col bg-origin-border rounded-3xl bg-[#F5EFDB]/70">
                <div className="w-full h-80 p-7">
                    <h1 className="font-bold text-6xl flex justify-center items-center text-center text-purple-500">
                        <span>Welcome to ColHive</span>
                    </h1>
                    <p className="flex justify-center text-center item-center text-xl">
                        Elevate your team's productivity with ColHive,
                        the ultimate platform for streamlined collaboration and project management.
                    </p>
                </div>
                <div className="mb-5 mt-0">
                    <Button className="bg-[#26275e99]" variant="outline">Explore More</Button>
                </div>
            </div>
            <div className="w-1/2 flex justify-center items-center ">

                <Image src={bg_home} alt="colhive home" width={2046} height={2046} className="rounded-xl" />
            </div>
        </section>
    );
}
