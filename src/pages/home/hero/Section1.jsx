import React from "react";
import rocket from "../../../assets/rocket.svg";
import asist from "../../../assets/asist.svg";
import setting from "../../../assets/setting.svg";

const Section1 = () => {
  return (
    <section className="bg-[#ECF8F9]">
      <div className="container">
        <div className="flex items-center mt-[98px] py-[96px] gap-[141px]">
          <div className="left">
            <p className="text-sm font-medium text-[#000000] uppercase">
              Our expertise
            </p>
            <h2 className="text-5xl leading-[58px] text-[#232536] font-semibold mt-4">
              We want to get local identification in every corner of the world
              in this era of global citizenship
            </h2>
            <p className="mt-6 text-[#5D5F6D]">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw his giving Remain expense you position concluded.{" "}
            </p>
          </div>
          <div className="right">
            <div className="w-4 h-4 bg-[#444CFC]"></div>
            <div className="flex bg-[#FFFFFF] items-start gap-4 p-8 w-[515px]">
              <img src={rocket} alt="" />
              <div className="pr-[85px]">
                <p className="text-base leading-[28px] text-[#000000] font-semibold">
                  On Time Delivery
                </p>
                <p className="text-sm font-medium text-[#5D5F6D]">
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
              </div>
            </div>
            <div className="flex bg-[#FFFFFF] items-start gap-4 p-8 w-[515px] mt-3">
              <img src={setting} alt="" />
              <div className="pr-[85px]">
                <p className="text-base leading-[28px] text-[#000000] font-semibold">
                  Best Quality
                </p>
                <p className="text-sm font-medium text-[#5D5F6D]">
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
              </div>
            </div>
            <div className="flex bg-[#FFFFFF] items-start gap-4 p-8 w-[515px] mt-3">
              <img src={asist} alt="" />
              <div className="pr-[85px]">
                <p className="text-base leading-[28px] text-[#000000] font-semibold">
                  Support Assist
                </p>
                <p className="text-sm font-medium text-[#5D5F6D]">
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
              </div>
            </div>
            <div className="w-[515px] h-2 flex">
              <div className="bg-[#FFA155] w-full basis-1/3"></div>
              <div className="bg-[#FFD3AF] w-full"></div>
              <div className="bg-[#444CFC] w-full basis-1/3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
