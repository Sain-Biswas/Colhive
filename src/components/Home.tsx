import * as React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import bg_home from "../resources/Images/bg_home.jpg";
import Image from "next/image";

export function Home() {
    return (
        <section className="w-screen h-[calc(100vh-4rem)] flex justify-center items-center p-6 py-6 gap-2">
            <div className="w-1/2 p-2 flex justify-between items-center flex-col bg-origin-border rounded-3xl bg-[#F5EFDB]/60 relative left-7">
                <div className="w-full h-80 p-10 ">
                    <h1 className="font-bold text-6xl leading-2   font-serif text-black-500">
                        Welcome to <span className="flex justify-center items-center text-purple-500" > ColHive  </span>  
                    </h1>
                    <p className="flex justify-center text-center item-center text-xl leading-20">
                        Elevate your team's productivity with ColHive,
                        the ultimate platform for streamlined collaboration and project management.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className=" mb-5 mt-0 z-40">
                    <Button className="bg-[#26275e99] font-serif" variant="outline"><Link href='/about'>Explore More</Link></Button>
                </div> 
            </div>
            <div className="w-3/4 flex justify-center items-center ">

                <Image src={bg_home} alt="colhive home" width={2046} height={2046} className="rounded-xl" />
            </div>
        </section>
    );
}
