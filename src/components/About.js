import React from "react";
import '../index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function About() {
  return (
    <section id="about" className="bg-gray-200">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1 lg:pr-4 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-blue-900 font-black uppercase text-3xl mt-4">
            Hello !
            </h1>
            <br /><h2 className="text-black font-bold uppercase text-2xl mb-7 -mt-3" >Welcome to  my Portfolio</h2>
          
          <p className="mb-8 text-about">
            My name is Manasa Bhat, I am a software engineer with 4 years of work experience in the Information Technology and Services Industry and I am from Karnataka, India.
            I moved to Malden, Massachusetts in 2020 and currently I am a graduate student at Northeastern University pursuing Master of Science in Information Systems program and expecting to graduate in May 2022.
            </p>
            <p className="mb-8 text-about">
            I am looking for full-time opportunities in the Software engineering and Full-Stack Development fields alongside open for relocation. Please feel free to view my Work experience, Academic profile and Resume. 
            Thank you for your time.
          </p>
          <div className="flex justify-center">
          <Link className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 hover:text-white rounded text-lg" to="/education">Connect with Me</Link>
            <Link
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 hover:text-white rounded text-lg" to="/experience">
              See My Past Work
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded opacity-90"
            alt="hero"
            src="./Photo.JPG"
          />
        </div>
      </div>
    </section>
  );
}