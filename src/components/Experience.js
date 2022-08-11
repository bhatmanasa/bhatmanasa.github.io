import React from "react";
import { work } from "../work";

export default function Experience() {
  return (
    <section id="experience" className="text-black bg-white-200 body-font">
    <div className="container px-5 py-10 mx-auto text-center lg:px-100">
      <div className="flex flex-col w-full mb-20">
      <h1 className="text-blue-900 font-black uppercase text-3xl ">
          Work Experience
        </h1>
      </div>
      <div className="flex flex-wrap -m-2">
          <table className="flex flex-wrap -m-2">
        {work.map((work) => (
            <section>
            <tr>
                <td width="350px" align="left" className="text-black font-bold uppercase text-2xl mb-2">{work.org}</td>
                <td width="550px" align="left"></td>
                <td width="350px" align="right" className="text-black font-base uppercase text-xl ">{work.year}</td>
            </tr>
            <tr>
                <td align="left" className="uppercase text-blue-900">{work.role}</td>
            </tr>
            <tr>
                <td align="left" className="pb-5 uppercase">{work.location}</td>
            </tr>
            <tr>
                <td align="left" className="font-bold">Job Details:</td>
            </tr>
            <tr><td colspan='2'>
            {work.jobProfile.map((tasks) => (
               <ol align="left"  className="pb-3"> - {tasks}</ol>
            ))}
            </td>
            </tr>
            <tr>
                <td align="left" colspan='2' className="pb-8">Primary Tech Stack:{work.primaryTech}</td>
            </tr>
            </section>
          
        ))}
        </table>
      </div>
    </div>
  </section>


    
  );
}