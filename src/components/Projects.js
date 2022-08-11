
import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import {icons } from "../data";
export default function Projects() {
  return (
    <section id="projects" className="bg-white-200">
      <div className="container px-5 py-10 mx-auto text-center lg:px-100">
        <div className="flex flex-col w-full mb-20">
          <h1 className="text-blue-900 font-black uppercase text-3xl ">
            Academic Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-black font-bold capitalize text-xl">
            Here are my recent Academic Projects
          </p>
          <p className="text-black mt-3 -mb-10">Hover over the projects to view sample demo</p>
        </div>
        <div className="flex flex-wrap -m-2 bg-gray-900 rounded p-5">
          {projects.map((project) => (
            <div className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-400 opacity-100 hover:opacity-0">
                  <h2 className="tracking-widest text-sm title-font font-medium text-gray-900 uppercase font-black mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
                          <a
                          href={project.link}
                          target="_blank"
                          className="sm:w-1/2 w-100 p-4 mt-6 font-bold text-gray-400 text-xl hover:text-gray-200 ">Go to Source Code
            </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}