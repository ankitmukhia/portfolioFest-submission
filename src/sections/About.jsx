import React from "react";

import logo from "../images/my-image.png";

// react icons
import { BiLogoInstagram, BiLogoTwitter, BiLogoGithub, BiLogoLinkedinSquare, BiLogoGmail } from "react-icons/bi"

// social links
import { social } from "../constants/index"

const About = () => {
    return (
        <main className="relative mt-20">
            <div className="mx-auto px-4 max-w-2xl lg:max-w-5xl">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                    <div className="lg:pl-20">
                        <div className="max-w-xs px-2.5 lg:max-w-none">
                            {/* I took this idea of blurry image from "tailwind css element" */}
                            <img className=" bg-[#27272AE6] rounded-2xl transition-all -row-span-3 duration-300 blur-sm hover:blur-none object-cover bg-zinc-800 cursor-pointer" src={logo} />
                        </div>
                    </div>
                    <div className="lg:order-first lg:row-span-2">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                            I’m Ankit Mukhia. I live in India, Bangalore, Where I practice and code.</h1>
                        <div className="mt-6 space-y-7 text-base text-zinc-400">
                            <p>I'm Ankit, and if you're reading these lines, you're about to dive into my thoughts and journey. My coding adventure began back in March, but before that, my world revolved around different endeavors, including sales and running my own small business.</p>
                            <p>During our time in business which we fail to do, we came to know something interesting: the concept of websites. While websites were pretty normal in many places, they weren’t so common in my place. This idea of having a website stuck with me forever.</p>
                            <p>I started my journey by watching YouTube videos. Exploring bit by bit. So from there I started my journey about learning web development and app development.</p>
                            <p>In the past couple of months, I’ve literally become a big fan of coding. Yes, just a few months (8) 😅. I am not an experienced coder, nor do I have a background or degree. However, I believe it’s the growing India that influences people like me to think about tech and give hope to do.</p>
                            <p>If you feel, I want to read some thing more about me please check my Blog I have written in Medium <a href={social.Blog} target="_blank" className="underline text-cyan-600">Read More</a></p>
                        </div>
                    </div>
                    <div className="lg:pl-20">
                        <ul role="list">
                            <li className="flex">
                                <a href={social.twitter} target="_blank" className="group flex text-sm font-medium transition text-zinc-200 hover:text-teal-500">
                                    <BiLogoTwitter className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                                    <span className="ml-4">Follow on Twitter</span>
                                </a>
                            </li>
                            <li className="mt-4 flex">
                                <a href={social.instagram} target="_blank" className="group flex text-sm font-medium transition text-zinc-200 hover:text-teal-500">
                                    <BiLogoInstagram className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                                    <span className="ml-4">Follow on Instagram</span>
                                </a>
                            </li>
                            <li className="mt-4 flex">
                                <a href={social.github} target="_blank" className="group flex text-sm font-medium transition text-zinc-200 hover:text-teal-500">
                                    <BiLogoGithub className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                                    <span className="ml-4">Follow on GitHub
                                    </span>
                                </a>
                            </li>
                            <li className="mt-4 flex">
                                <a href={social.linkedin} target="_blank" className="group flex text-sm font-medium transition text-zinc-200 hover:text-teal-500">
                                    <BiLogoLinkedinSquare className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                                    <span className="ml-4">Follow on LinkedIn</span>
                                </a>
                            </li>
                            <li className="mt-8 mb-8">
                                <a href="mailto:ankitmukhia@gmail.com" target="_blank" className="group flex text-sm font-medium transition text-zinc-200 hover:text-teal-500">
                                    <BiLogoGmail className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                                    <span className="ml-4">AnkitMukhia157@gmail.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default About;