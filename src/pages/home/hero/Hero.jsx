import React from 'react'
import company1 from "../../../assets/company1.png";
import company2 from "../../../assets/company2.png";
import company3 from "../../../assets/company3.png";
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <main>
      <div className="container">
        <div className="mt-[120px]">
          <p className="text-sm text-[#000000] font-medium">ABOUT US</p>
          <div className="flex mt-4">
            <div>
              <h2 className="text-5xl leading-[58px] font-semibold text-[#232536]">
                The company leads entire webdesign process from concept to
                delivery.
              </h2>
            </div>
            <div>
              <h2 className="text-4xl leading-[54px] text-[#232536] font-semibold">
                The Era Of Technology.
              </h2>
              <p className="text-base font-normal text-[#5D5F6D]">
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable saw his giving Remain expense you position concluded.{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-3 mt-16 mb-4">
            <img src={company1} alt="" />
            <img src={company2} alt="" />
            <img src={company3} alt="" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[66px]">
              <div>
                <p className="text-4xl leading-[54px] text-[#232536] font-semibold">
                  1560+
                </p>
                <div className="w-[72px] h-[6px] flex mt-2">
                  <div className="bg-[#444CFC] w-full basis-1/3"></div>
                  <div className="bg-[#FFD3AF] w-full"></div>
                  <div className="bg-[#FFA155] w-full basis-1/2"></div>
                </div>
                <p className="text-base text-[#000000] mt-1">
                  Project Delivered
                </p>
              </div>
              <div>
                <p className="text-4xl leading-[54px] text-[#232536] font-semibold">
                  100+
                </p>
                <div className="w-[72px] h-[6px] flex mt-2">
                  <div className="bg-[#444CFC] w-full basis-1/3"></div>
                  <div className="bg-[#FFD3AF] w-full"></div>
                  <div className="bg-[#FFA155] w-full basis-1/2"></div>
                </div>
                <p className="text-base text-[#000000] mt-1">Professional</p>
              </div>
              <div>
                <p className="text-4xl leading-[54px] text-[#232536] font-semibold">
                  950+
                </p>
                <div className="w-[72px] h-[6px] flex mt-2">
                  <div className="bg-[#444CFC] w-full basis-1/3"></div>
                  <div className="bg-[#FFD3AF] w-full"></div>
                  <div className="bg-[#FFA155] w-full basis-1/2"></div>
                </div>
                <p className="text-base text-[#000000] mt-1">Happy Client</p>
              </div>
              <div>
                <p className="text-4xl leading-[54px] text-[#232536] font-semibold">
                  10yrs
                </p>
                <div className="w-[72px] h-[6px] flex mt-2">
                  <div className="bg-[#444CFC] w-full basis-1/3"></div>
                  <div className="bg-[#FFD3AF] w-full"></div>
                  <div className="bg-[#FFA155] w-full basis-1/2"></div>
                </div>
                <p className="text-base text-[#000000] mt-1">Experience</p>
              </div>
            </div>
            <Link className="flex items-center gap-[11px]" to={"/company"}>
              <span className="text-base font-medium text-[#444CFC]">
                Read about us
              </span>
              <FaArrowRightLong className="text-[#000]" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero