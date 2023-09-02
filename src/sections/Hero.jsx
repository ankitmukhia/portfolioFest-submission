import React from "react";
// images
import img1 from "../images/programming1.jpg"
import img2 from "../images/programming2.jpg"
import img3 from "../images/programming3.jpg"
import img4 from "../images/programming4.jpg"
import img5 from "../images/programming5.jpg"

// react icons
import { BiLogoInstagram, BiLogoTwitter, BiLogoGithub, BiLogoLinkedinSquare, } from "react-icons/bi"

// social links
import { social } from "../constants/index"


const Hero = () => {
    return (
        <div className="relative mt-20">
            <div className="mx-auto px-4 max-w-2xl lg:max-w-5xl">
                <div>
                    <div className="max-w-2xl">
                        <h1 className="text-5xl font-bold tracking-tight text-zinc-100 sm:text-5xl font-sans">Web Developer, and Mobile App Developer</h1>
                        <p className="text-zinc-600 font-sans mt-10">I'm Ankit, a coding enthusiast from India. I'm a self-taught React Native & MERN developer with 8-9 months of experience, on a mission to secure a job in the field.</p>
                    </div>
                    <div className="flex space-x-4 mt-10">
                        <a href={social.instagram} target="_blank" className=" flex text-sm font-medium transition text-zinc-200">
                            <BiLogoInstagram className="h-6 w-6 flex-none fill-zinc-500 transition hover:fill-teal-500" />
                        </a>
                        <a href={social.twitter} target="_blank" className=" flex text-sm font-medium  transition text-zinc-200">
                            <BiLogoTwitter className="h-6 w-6 flex-none fill-zinc-500 transition hover:fill-teal-500" />
                        </a>
                        <a href={social.github} target="_blank" className=" flex text-sm font-medium transition text-zinc-200">
                            <BiLogoGithub className="h-6 w-6 flex-none fill-zinc-500 transition hover:fill-teal-500" />
                        </a>
                        <a href={social.linkedin} target="_blank" className=" flex text-sm font-medium transition text-zinc-200">
                            <BiLogoLinkedinSquare className="h-6 w-6 flex-none fill-zinc-500 transition hover:fill-teal-500" />
                        </a>
                    </div>
                </div>
                <div className="flex inset-x-10 justify-center mt-20 ">
                    <div className="flex space-x-10 fixed ">
                        <img src={img1} className="rounded-3xl max-w-xs px-2.5 rotate-3 " />
                        <img src={img3} className="rounded-3xl max-w-xs px-2.5 -rotate-3 " />
                        <img src={img2} className="rounded-3xl max-w-xs px-2.5 rotate-3" />
                        <img src={img4} className="rounded-3xl max-w-xs px-2.5 -rotate-3" />
                        <img src={img5} className="rounded-3xl max-w-xs px-2.5 rotate-3 " />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Hero;