import Image from 'next/image'
import React from 'react'
import { bg_about1, bg_about3,bd_about2,bg_about4} from '@/resources/Images/images'
const Page = () => {
  return (
      <div className="mt-4">
      <h1 className=" w-full flex justify-center items-center text-5xl font-bold">Welcome to ColHive - Your Hub for Seamless Collaboration</h1>
      <div className=" flex justify-between ">  
         <div className=" w-1/2 flex justify-center item-center text-justify text-lg p-8 m-2">
           <p>Elevate your team's productivity with ColHive, the ultimate platform for streamlined collaboration and project management. Experience powerful tools designed to keep your projects on track, communication seamless, and tasks organized. Say goodbye to scattered workflows and hello to a more efficient way of working together.</p>
         </div>
         <div className="w-1/2 flex justify-center item-center p-8 m-2">
            <Image src={bg_about1} alt="my gif" height={500} width={500} />
         </div>
         </div>

         <h1 className=" w-full flex justify-center items-center text-5xl font-bold ">What we offer:</h1>
        <div className=" flex justify-between ">  
        <div className="w-1/2 flex justify-center item-center p-8 m-2">
            <Image src={bg_about3} alt="my gif" height={500} width={500} />
         </div>
         <div className=" w-1/2 flex justify-center item-center text-justify text-lg p-8 m-2 flex-col">
         <h1 className=" w-full flex justify-center items-center text-5xl font-bold ">Project Management Made Easy</h1>
           <p>Take control of your projects with Colhive's intuitive project management tools. Create tasks, set deadlines, and track progress effortlessly. With visual timelines and task dependencies, you'll always know where your projects stand. Say goodbye to project chaos and hello to organized success</p>
         </div>
         
         </div>

         <h1 className=" w-full flex justify-center items-center text-5xl font-bold">Collaborate in Real-Time Anytime, Anywhere</h1>
      <div className=" flex justify-between ">  
         <div className=" w-1/2 flex justify-center item-center text-justify text-lg p-8 m-2">
           <p>With ColHive, distance is no barrier to teamwork. Our platform enables real-time collaboration, allowing your team to work together seamlessly no matter where they are. Share ideas, edit documents, and tackle tasks as a united force, all in real time</p>
         </div>
         <div className="w-1/2 flex justify-center item-center p-8 m-2">
            <Image src={bd_about2} alt="my gif" height={500} width={500} />
         </div>
         </div>

         <h1 className=" w-full flex justify-center items-center text-5xl font-bold">Tailored Solutions for Every Industry</h1>
        <div className=" flex justify-between ">  
        <div className="w-1/2 flex justify-center item-center p-8 m-2">
            <Image src={bg_about4} alt="my gif" height={500} width={500} />
         </div>
         
         <div className=" w-1/2 flex justify-center item-center text-justify text-lg p-8 m-2 flex-col">
           <p>ColHive understands that every industry has unique collaboration needs. That's why our platform is customizable to suit a wide range of businesses and sectors. Whether you're in software development, marketing, or any other field, ColHive adapts to your workflow, ensuring a perfect fit</p>
         </div>
         
         </div>
         

         <h1 className=" w-full flex justify-center items-center text-5xl font-bold">Join the ColHive Community</h1>
        <div className=" flex justify-between ">  
         <div className=" w-1/2 flex justify-center item-center text-justify text-lg p-8 m-2">
           <p>Join a community of forward-thinking teams and businesses who have made ColHive their go-to platform for collaboration and project management. Experience the difference and elevate your team's performance today</p>
         </div>
         <div className="w-1/2 flex justify-center item-center p-8 m-2">
            <Image src={bg_about1} alt="my gif" height={500} width={500} />
         </div>
         </div>
    </div>
  )
}

export default Page
