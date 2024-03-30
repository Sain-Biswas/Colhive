import * as React from "react"
export function Footer(){
    return (
        <footer>
            <div className="flex justify-between items-center w-full h-auto bg-[#F5EFDB]">
            <div className=" px-2 py-4 ">
                <div className="text-center  bg-[]">
                 
                  <h1 className="">Subscribe To Our Newsletter</h1>
                  <p className=''>And never miss latest Updates!</p>
                </div>
                <div className="">
                   <input type="email" placeholder="Enter your E-mail address"/>
                   <button className="">Subscribe</button>
                </div>
            </div>
             <div className="">
            <div className="">
                <h1 className="">Contact Us</h1>
                <p className="">Chandigarh University</p>
                <p className="">NH-05 Chandigarh-Ludhiana Highway</p>
                <p className="">Mohali,Punjab</p>
                <p className="">6303660509</p>

            </div>
            <div className="">
               <img src="" alt="footer_logo"/>
               <p className="">The best way to get your meals</p>
               <img src="" alt="" className="" style={{marginTop:15}}/>
               <div className="">
                
               </div>
            </div>
            <div className="">
                <h1 className="">Others</h1>
                <p className="">About Us</p>
                <p className="">Term and Conditions</p>
                <p className="">Privacy policy</p>
                <p className="">Help</p>
            </div>
        </div>
        <div className="">
            <p className="">2024 © ColHive| All right reserved.</p>
        </div>
        
    </div>
        </footer>
    )
}