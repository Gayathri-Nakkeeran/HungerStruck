 import Image from "next/image"
import logo from '../public/res-logo.png'
export default function Footer(){
    return(
        <div className="grid gap-4 bg-red-100 text-black px-10">
            <div className = "grid grid-cols-4 gap-4 my-7">
                <div className=" text-sm  mx-5">
                    <Image className="w-12 h-12" src= {logo} alt = "Logooo"/>
                    
                    <h2 className = "text-lg font-semibold py-3 eczar">Tasty Treat</h2>
                    <p className = "text-justify">It is a long established fact that a reader will be 
                        distracted by the readable content of a
                         page when looking at its layout.</p>
                </div>
                <div className = "text-sm text-gray-700">
                    <h2 className = "text-lg font-semibold py-3 eczar">Delivery Time</h2>
                    <p >Sunday - Thursday</p>
                    <span>10.00am - 11.00pm</span>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p>Friday</p>
                    <span>Off Day</span>
                </div>
                <div className = "text-sm  text-gray-700">
                    <h2 className = "text-lg font-semibold py-3 eczar">Contact</h2>
                    <p>Location: ZindaBazar , Sylhet-3100, Bangladesh</p>

                    <br></br>
                    <br></br>
                    <span>Phone: 2345678654</span>
                    <br></br>
                    <br></br>
                    <p>Email: example@gmail.com</p>
                    
                </div>
                <div className = "text-sm text-gray-700 mx-5">
                   <h2 className = " text-lg eczar font-semibold py-3 eczar">Newsletter</h2>
                   <p>Subscribe our newsletter</p>
                   <div className = " flex items-center justify-between px-3 border border-solid rounded-md border-black py-1 my-5">
                    <div >Enter your Email</div>
                    <div className = "bg-red-500 px-6 py-1 rounded-sm"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></div>
                    </div>
                    </div>
            </div>
            <div className = " text-sm  grid grid-cols-2 py-5">
                <div>
                    <span className = "text-red-500">Copyright - 2022 , website made by gaythri. All rights reserved</span>
                </div>

                <div className="justify-self-end mx-5" >
                    <span >Follow:  </span>
                    <span className = "rounded-full bg-red-600 py-1 px-2 m-3"><i className=" fa fa-facebook" aria-hidden="true"></i> </span>
                    <span className="rounded-full bg-red-600 px-2 py-1 m-3" ><i className=" fa fa-github" aria-hidden="true"></i></span>
                    <span className="rounded-full bg-red-600 px-1 py-1 m-3"><i className=" fa fa-youtube-play" aria-hidden="true"></i> </span>
                    <span className="rounded-full bg-red-600 px-2 py-1 m-3" ><i className=" fa fa-linkedin" aria-hidden="true"></i></span>
                </div>
            </div>
            
        </div>
    );
}