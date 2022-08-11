import React from "react";

export default function Contact() {

  return (
    <section className=" bg-white-200">
                <h1 className="text-blue-900 font-black capitalize text-3xl pt-10 mt-3 text-center" >
            Thank you for viewing my profile!</h1>
            <p className="text-black font-bold uppercase text-base mb-7 mt-3 text-center">
            Feel free to connect over email or LinkedIn
          </p>
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-800 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
{/* 
          <iframe
            width="100%"
            height="100%"
            border="black 1px"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <iframe   width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.5983240694973!2d-71.03739194914054!3d42.436284079079755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3723a5612dcb1%3A0x55edd26f7e3647c4!2s252%20Kennedy%20Dr%2C%20Malden%2C%20MA%2002148!5e0!3m2!1sen!2sus!4v1639527600584!5m2!1sen!2sus" >

            </iframe> */}
          <div className="bg-gray-400 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-bold text-blue-800 tracking-widest text-base">
                ADDRESS
              </h2>
              <p className="mt-1 text-white p-4">
                California, USA <br />
              </p>
            </div>
            <div className="lg:w-1/2/3 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-bold text-blue-800 tracking-widest text-base">
                EMAIL
              </h2>
              <a className="text-black leading-relaxed p-4">
                bhat.ma@northeastern.edu
              </a>
              <a href="https://www.linkedin.com/in/manasa01" target="_blank">              <h2 className="title-font font-bold text-blue-800 tracking-widest text-base mt-4">
                Go to LINKEDIN
              </h2></a>

              <a href="https://github.com/bhatmanasa" target="_blank"  >              <h2 className="title-font font-bold text-blue-800 tracking-widest text-base icon brands alt fa-github">
                Go to GITHUB
              </h2></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}