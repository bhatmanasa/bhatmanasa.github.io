
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { education } from "../education";

export default function Education() {
  return (
    <section id="education" className="bg-white-200">
    <div className="container px-5 py-10 mx-auto text-center lg:px-100">
      <div className="flex flex-col w-full mb-20">
        <h1 className="text-blue-900 font-black uppercase text-3xl ">
          Education
        </h1>
      </div>
      <div className="flex flex-wrap -m-2">
          <table className="flex flex-wrap -m-2">
        {education.map((college) => (
            <section>
            <tr>
                <td width="340px" align="left" className="text-black font-bold uppercase text-2xl mb-5">{college.collegeName}</td>
                <td width="550px" align="left"></td>
                <td width="300px" align="right" className="text-black font-base uppercase text-xl ">{college.year}</td>
            </tr>

            <tr className="mb-5">
                <td align="left" className="text-uppercase">{college.location}</td>
            </tr>
            <tr>
            <td align="left" className="pb-2">Degree:</td><td align="left">   {college.degree}</td>
            </tr>
            <tr> 
                <td align="left" className="pb-2">GPA:</td><td width="40px" align="left" >{college.gpa}</td>
            </tr>
            <tr>
                <td width="40px" align="left" >Relevant Courses Taken: </td><td align="left" colspan='2' className="pb-8"> {college.relevantCourses}</td>
            </tr>
            </section>
          
        ))}
        </table>
      </div>
    </div>
  </section>


    
  );
}