import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import '../index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Navbar() {
  return (
    // <section id="projects" className="text-gray-400 bg-blue-900 body-font"></section>
    <header className="bg-gray-800 md:sticky top-0 z-10 text-white">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center ">
        {/* <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Manasa Bhat
          </a>
        </a> */}
        {/* <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            PROJECTS
          </a>
          <a href="#education" className="mr-5 hover:text-white">
            EDUCATION
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            SKILLS
          </a>
          <a href="#experience" className="mr-5 hover:text-white">
            PROFESSIONAL WORK
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          CONTACT
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a> */}
               <nav>
          <ul className="flex flex-wrap">
          <li className="p-3 hover:bg-gray-900 uppercase text-base font-bold">
              <Link to="/">Manasa Bhat</Link>
            </li>
          <a href="./ManasaBhatResume.pdf" download class="p-3 pr-4 mr-20 text-gray-50 hover:bg-gray-900 hover:text-white uppercase text-base font-bold" >Download Resume</a>
  
            <li className="p-3 text-gray-50 hover:bg-gray-900 hover:text-white uppercase text-base font-bold">
              <Link to="/about">About</Link>
            </li>
            <li className="p-3 text-gray-50 hover:bg-gray-900 hover:text-white uppercase text-base font-bold">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="p-3 text-gray-50 hover:bg-gray-900 hover:text-white uppercase text-base font-bold">
              <Link to="/education">Education</Link>
            </li>
            <li className="p-3 text-gray-50 hover:bg-gray-900 hover:text-white uppercase text-base font-bold">
              <Link to="/skills">Skills</Link>
            </li>
            <li className="p-3 text-gray-50 hover:bg-gray-900 hover:text-white uppercase text-base font-bold">
              <Link to="/experience">Experience</Link>
            </li>
            <li className="p-3 text-gray-50 hover:bg-gray-900 hover:text-white uppercase text-base font-bold">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      
    </header>
  );
}