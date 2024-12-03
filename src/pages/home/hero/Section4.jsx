import React from 'react'
import blog1 from "../../../assets/blog1.png"
import blog2 from "../../../assets/blog2.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Section4 = () => {
  return (
    <section className="bg-[#ECF8F9] py-[96px]">
      <div className="container">
        <div className="w-4 h-4 bg-[#666DFF]"></div>
        <h2 className="text-5xl leading-[58px] text-[#232536] font-semibold mt-[19px]">
          Read our latest blogs & news
        </h2>
        <div className="flex gap-8 mt-12">
          <div className="flex">
            <img src={blog1} alt="" />
            <div className="bg-[#FFFFFF] p-8">
              <p className="text-sm font-medium text-[#232536]">Jan 19, 2021</p>
              <h3 className="text-2xl leading-9 font-semibold max-w-[300px] mt-3">
                Today's best design trends for digital products
              </h3>
              <a href="#" className="flex items-center gap-3 mt-6">
                <span className="text-[#444CFC] font-medium">Read more</span>{" "}
                <FaArrowRightLong className="text-[#000000]" />
              </a>
            </div>
          </div>
          <div className="flex">
            <img src={blog2} alt="" />
            <div className="bg-[#FFFFFF] p-8">
              <p className="text-sm font-medium text-[#232536]">Jan 19, 2021</p>
              <h3 className="text-2xl leading-9 font-semibold max-w-[300px] mt-3">
                A practical guide to building a brand strategy
              </h3>
              <a href="#" className="flex items-center gap-3 mt-6">
                <span className="text-[#444CFC] font-medium">Read more</span>{" "}
                <FaArrowRightLong className="text-[#000000]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4