import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Birinchi from "../../assets/Birinchi.png";
import Ikkinchi from "../../assets/Ikkinchi.png";
import Uchinchi from "../../assets/Uchinchi.png";
import Tortinchi from "../../assets/Tortinchi.png";
import Beshinchi from "../../assets/Beshinchi.png";

const ServicePage = () => {
  return (
    <main className="bg-[#FFF4E9]">
      <div className="container mx-auto px-4 lg:px-20 py-12">

        <div className="flex flex-wrap lg:flex-nowrap items-center pt-[96px]">

          <div className="left w-full lg:w-[50%] mb-10 lg:mb-0">
            <p className="text-sm text-[#232536] font-medium uppercase tracking-wide">
              Our Services
            </p>
            <h2 className="text-5xl leading-[58px] font-semibold mt-3 text-[#232536]">
              We Build Software Solutions that Solve Clients' Business
              Challenges
            </h2>
            <p className="text-base text-[#232536] mt-6 max-w-[550px]">
              Through True Rich Attended does no end it his mother since
              favourable real had half every him case in packages enquire we up
              ecstatic.
            </p>
            <div className="flex items-center gap-2 px-[32px] py-[20px] mt-[40px] bg-gradient-to-b from-[#444CFC] to-[#444CFC] max-w-[231px] max-h-[64px] rounded-md shadow-md hover:shadow-lg transition">
              <button className="text-base font-semibold text-white">
                Request A Quote
              </button>
              <FaArrowRightLong className="text-white text-lg" />
            </div>
          </div>

          <div className="right w-full lg:w-[40%] mx-auto">
            <ul className="space-y-4">
              {[ "Technical Support", "Development", "AWS/Azure", "Consulting", "Information Technology"].map((service, index) => (
                <li
                  key={index}
                  className="flex items-center text-2xl leading-9 font-semibold text-[#232536]"
                >
                  {service}
                  {index === 1 && (
                    <FaArrowRightLong className="ml-2 text-[#232536] text-xl" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>


        <div className="process mt-20 bg-[#FFFDFD] py-16 px-8 rounded-lg">
          <h3 className="text-center text-4xl font-semibold text-[#232536] mb-12">
            The Process We Are Working With Our Client Worldwide
          </h3>
          <p className="text-center text-base text-[#232536] max-w-[750px] mx-auto mb-8">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unstable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ "Discover", "Designing", "Development", "Testing", "Deployment", "Maintenance"].map((step, index) => (
              <div
                key={index}
                className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="absolute top-4 right-4 bg-[#444CFC] text-white text-sm px-3 py-1 rounded-full">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h4 className="text-xl font-semibold text-[#232536] mb-3">
                  {step}
                </h4>
                <p className="text-base text-[#232536]">
                  We aim to attain the greatest satisfaction for our clients and
                  be one of the prominent.
                </p>
              </div>
            ))}
          </div>
        </div>


        <div className="service-details mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {[ { title: "Technical Support", description: "Best in class tech support for your company. We become your tech backbone.", image: Birinchi }, { title: "Development", description: "Bring your ideas to reality with a certified team of developers working with the latest technologies.", image: Ikkinchi }, { title: "AWS/Azure", description: "We help you deploy, manage, and secure your application on leading web services.", image: Uchinchi }, { title: "Consulting", description: "Get advice from world-class professionals for strategic business solutions.", image: Tortinchi }, { title: "Information Technology", description: "We want to get local identification in every corner of the world in this era of global citizenship.", image: Beshinchi } ].map((service, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >

              <div className="w-full lg:w-[50%]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full rounded-lg"
                />
              </div>

              <div className="w-full lg:w-[50%] mt-6 lg:mt-0 lg:pl-8">
                <h4 className="text-2xl font-semibold text-[#232536] mb-4">
                  {service.title}
                </h4>
                <p className="text-base text-[#232536]">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};


export default ServicePage;



// Kamchiliklari bor hali tugamadi