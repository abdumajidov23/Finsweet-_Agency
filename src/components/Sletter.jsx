import React from "react";
import sletter from "../assets/sletter.svg";

const Sletter = () => {
  return (
    <section className="my-[96px]">
      <div className="container">
        <div className="flex">
          <div className="bg-[#666DFF] p-[96px] relative flex  w-full items-center justify-around">
            <img className="absolute top-0 left-0" src={sletter} alt="" />
            <div className="">
              <p className="text-white text-sm">NEWSLETTER</p>
              <h3 className="text-white text-4xl mt-[13px] max-w-[488px]">
                Subscribe our News Letter to get Latest Updates.
              </h3>
            </div>
            <input
              className="max-h-max w-[454px] p-[20px] tetx-[#232536] outline-none"
              type="email"
              placeholder="Paresh@Pixeto.com"
            />
          </div>
          <div className="w-4 h-[333px] flex flex-col">
            <div className="bg-[#FFA155] w-full basis-1/4"></div>
            <div className="bg-[#FFD3AF] w-full basis-1/2"></div>
            <div className="bg-[#444CFC] w-full basis-1/4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sletter;
