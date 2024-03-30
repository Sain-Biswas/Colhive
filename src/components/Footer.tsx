import * as React from "react"
import { Logo } from "../resources/Images/images";
import Link from "next/link";
import { FaGithub,FaInstagram , FaFacebook} from "react-icons/fa";
import Image from "next/image";
export function Footer() {
    return (
        <footer>
            <div className=" px-20 ">
                <div className="flex justify-between ">
                    <div className="">
                        <h1 className=" font-serif text-2xl leading-10">Contact Us</h1>
                        <p className="font-sans ">Chandigarh University</p>
                        <p className="font-sans ">Mohali,Punjab</p>
                        <p className="font-sans">NH-05 Chandigarh-Ludhiana Highway</p>
                        <p className="font-sans ">6303660509</p>

                    </div>
                    <div className="flex justify-center items-center flex-col">
                        <Image className="h-20 w-20 z-10" src={Logo} alt="logo" height={2000} width={2000} />
                        <h3 className="font-bold font-serif text-blue-500">ColHive</h3>
                        <p className="">Community for Developer</p>
                        <div className=" flex justify-between h-30 w-30 mx-20">
                        <Link href='#g'><FaGithub /></Link>
                        <Link href='#instagram'><FaInstagram /> </Link>   
                        <Link href='#facebook'><FaFacebook /></Link>
                        </div>
                    </div>
                    <div className="flex justify-between items-start flex-col">
                        <h1 className="font-serif text-2xl leading-10">Others</h1>
                        <Link href='/about' className="font-sans ">About Us</Link>
                        <Link href='/terms' className="font-sans ">Term and Conditions</Link>
                        <Link href='/privacy' className="font-sans ">Privacy policy</Link>
                        <Link href='/help' className="font-sans ">Help</Link>
                    </div>
                </div>

                <div className="w-full h-10 flex justify-center items-center static bottom-0 mt-4">
                    <p className="font-sans">2024 © ColHive| All right reserved.</p>
                </div>

            </div>
        </footer>
    )
}