import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import support from "../../../assets/support.svg";
import managment from "../../../assets/managment.svg";
    import dev from "../../../assets/dev.svg";

const SERVICES = [
  {
    id: 1,
    img: support,
    title: "Technical support",
    desc: "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service",
  },
  {
    id: 2,
    img: managment,
    title: "Testing Management",
    desc: "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service",
  },
  {
    id: 3,
    img: dev,
    title: "Development",
    desc: "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service",
  },
];

const Section2 = () => {
  return (
    <section className="bg-[#FFE6D2] py-[96px]">
      <div className="container">
        <div>
          <p className="text-sm font-medium text-[#000000] uppercase">
            Our Services
          </p>
          <h2 className="text-5xl leading-[58px] text-[#232536] font-semibold mt-3 max-w-[700px]">
            We build software solutions that solve client's business challenges
          </h2>
          <div className="mt-[40px] flex items-center gap-4 bg-gradient-to-b from-[#444CFC] to-[#444CFC] max-w-max py-[20px] px-[32px]">
            <button className="text-[#FFFFFF] font-medium">
              Start a Project
            </button>
            <FaArrowRightLong className="text-[#FFFFFF]" />
          </div>
        </div>
        <div className="flex gap-8 mt-[80px]">
          {SERVICES?.map((service) => (
            <div key={service.id} className="bg-[#FFFFFF] p-[48px]">
              <img src={service.img} alt="" />
              <h3 className="font-semibold mt-[16px]">{service.title}</h3>
              <p className="text-[#5D5F6D] mt-[8px]">{service.desc}</p>
              <a href="#" className="flex items-center gap-3 mt-6">
                <span className="text-[#444CFC] font-medium">Read more</span>{" "}
                <FaArrowRightLong className="text-[#000000]" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
