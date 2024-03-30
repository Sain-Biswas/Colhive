import * as React from "react"
import { Logo } from "../resources/Images/images";
import Link from "next/link";
export function Footer(){
    return (
        <footer>
            <div className=" px-8 ">
             <div className="flex justify-between ">
            <div className="">
                <h1 className=" font-serif text-2xl leading-10">Contact Us</h1>
                <p className="font-serif ">Chandigarh University</p>
                <p className="font-serif">NH-05 Chandigarh-Ludhiana Highway</p>
                <p className="font-serif ">Mohali,Punjab</p>
                <p className="font-serif ">6303660509</p>

            </div>
            <div className="">
               <img className="h-10 w-auto z-10" src={Logo} alt="" height={2000} width={2000} />
               <p className="">Community for Developer</p>
               {/* <div className="">
                
               </div> */}
            </div>
            <div className="">
                <h1 className="font-serif text-2xl leading-10">Others</h1>
                <Link href='/about' className="font-serif ">About Us</Link>
                <p className="font-serif ">Term and Conditions</p>
                <p className="font-serif ">Privacy policy</p>
                <p className="font-serif ">Help</p>
            </div>
        </div>
        
        <div className="w-full h-10 flex justify-center items-center text-center static bottom-0">
            <p className="font-serif">2024 © ColHive| All right reserved.</p>
        </div>
        
    </div>
        </footer>
    )
}