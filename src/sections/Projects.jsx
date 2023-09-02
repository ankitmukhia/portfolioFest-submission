import React from "react";

import { projects } from "../constants/index";
import { BiLink } from "react-icons/bi";

// alternative banner img
import altImg from "../images/alterImg/mobileapp.jpg"

const Projects = () => {
  return (
    <>
      <div className="relative pb-10 lg:px-12 mt-20">
        <div className="mx-auto px-4 max-w-2xl lg:max-w-5xl">
          <div>
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                Things I’ve made during my learning.
              </h1>
              <p className="text-zinc-600 font-sans mt-10">
                I’ve worked on tons of little projects over  the few months but these are the ones that I enjoyed and learn most. Many of them are simple but learn a lot.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 mt-16 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((item) => {
              return (
                <div key={item.id} className="group relative flex flex-col items-start">
                  <div className="relative z-10 flex h-[150px] w-full items-center justify-center shadow-md shadow-zinc-800/5 ring-zinc-900/5 border border-zinc-700/50 bg-zinc-800 ring-0">
                    <img
                      className="h-full w-full p-3"
                      src={item.projectImg === 'null' ? altImg : item.projectImg}
                    />
                  </div>
                  <h2 className="mt-6 text-base font-semibold text-zinc-100">

                    <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>

                    <a href={item.link} target="_blank">
                      <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                      <span className="relative z-10">{item.projectName}</span>
                      <span className="relative  z-10">{item.projectName}</span>
                    </a>
                  </h2>
                  <p className="relative z-10 mt-2 text-sm text-zinc-400">
                    {item.projectDescription}
                  </p>
                  <div className="relative z-10 mt-6 flex justify-between text-sm font-medium transition group-hover:text-teal-500 text-zinc-200">
                    <BiLink className="h-6 w-6" />
                    <span className="ml-2">{item.linkOf}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
