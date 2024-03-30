import * as React from "react";
import { Button } from "@/components/ui/button";
import bg_home from "../resources/Images/bg_home.jpg";

export function Home() {
    return (
        <section className="w-screen h-[calc(100vh-4rem)] flex justify-center items-center p-6 py-6">
            <div className="w-1/2 flex justify-between items-center flex-col bg-origin-border rounded-3xl bg-[#F5EFDB]">
                <div className="w-full h-80 p-7">
                    <h1 className="font-bold text-6xl flex justify-center items-center text-center text-purple-500">
                        <span>Welcome to ColHive</span>
                    </h1>
                    <p className="flex justify-center text-center item-center text-xl">
                        Elevate your team's productivity with ColHive, 
                        the ultimate platform for streamlined collaboration and project management.
                    </p>
                </div>
                <div>
                    <Button variant="outline">Explore More</Button>
                </div>
            </div>
            <div className="w-1/2 flex justify-center items-center ">
                
                <img className="w-full h-auto z-10" src={bg_home} alt="ColHive Background" />
            </div>
        </section>
    );
}
