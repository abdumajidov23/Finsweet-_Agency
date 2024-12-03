import React from "react";
import user1 from "../../../assets/user1.svg";
import user2 from "../../../assets/user2.svg";
import user3 from "../../../assets/user3.svg";
import userlogo from "../../../assets/userlogo.svg";
import { Swiper, SwiperSlide } from "swiper/react";

const USERS = [
  {
    id: 1,
    desc: "Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!",
    userimg: user1,
    username: "Johnny Andro",
    position: "Director, Company",
  },
  {
    id: 2,
    desc: "Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!",
    userimg: user2,
    username: "Johnny Jonh",
    position: "Manager, Company",
  },
  {
    id: 3,
    desc: "Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!",
    userimg: user3,
    username: "Johnny Dep",
    position: "Developer, Company",
  },
];

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Section3 = () => {
  return (
    <section className="bg-[#F9F9FF] py-[96px]">
      <div className="container">
        <div className="flex gap-[154px] items-center">
          <div className="left">
            <div className="w-4 h-4 bg-[#666DFF]"></div>
            <h2 className="text-5xl leading-[58px] text-[#232536] font-semibold mt-4 max-w-[500px]">
              Our customers love what we do
            </h2>
            <h3 className="text-lg text-[#232536] my-4 font-medium">
              Transform your idea into reality with finsweet
            </h3>
            <p className="text-[#232536] max-w-[450px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>
            <div className="mt-6">
              <div className="img flex gap-3">
                <img src={user1} alt="" />
                <img src={user2} alt="" />
                <img src={user3} alt="" />
              </div>
              <p className="font-medium mt-[14px]">
                30+ <span className="text-xs">Customer Reviews</span>
              </p>
            </div>
          </div>
          <div className="right">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper h-[395px] w-[600px]"
            >
              {USERS?.map((user) => (
                <SwiperSlide key={user.id}>
                  <div className="flex">
                    <div className="w-4 h-[400px] flex flex-col">
                      <div className="bg-[#FFA155] w-full basis-1/5"></div>
                      <div className="bg-[#FFD3AF] w-full basis-1/2"></div>
                      <div className="bg-[#444CFC] w-full basis-1/5"></div>
                    </div>
                    <div key={user.id} className="pl-[40px] pt-[48px]">
                      <h2 className="text-2xl leading-[36px] font-semibold text-[#232536] max-w-[450px]">
                        {user.desc}
                      </h2>
                      <div className="flex mt-6 justify-between">
                        <div className="flex gap-[16px]">
                          <img src={user.userimg} alt="" />
                          <div>
                            <p className="font-semibold text-[#232536] ">
                              {user.username}
                            </p>
                            <p className="text-sm text-[#232536] font-medium">
                              {user.position}
                            </p>
                          </div>
                        </div>
                        <img src={userlogo} alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
