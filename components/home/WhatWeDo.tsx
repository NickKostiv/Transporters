import React from "react";
import TitleLabel from "../TitleLabel";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <section className="padding-container gap-[18px] pt-[120px] pb-[132px] flexBetween xl:flex-col xl:gap[50px] md:pt-[30px] md:pb-[30px] sm:px-[10px]">
      <div data-aos="fade-right" className="flex flex-col gap-[15px]">
        <TitleLabel
          text="What We Do"
          backgroundColor="#E8E8E880"
          textColor="text-black"
        />
        <h2 className="w-full max-w-[294px] sm:w-full">
          Safe & Reliable Cargo Solutions
        </h2>
      </div>
      <div data-aos="fade-left" className="flex md:flex-col md:gap-[30px]">
        <div className="flex flex-col gap-[70px] md:gap-[30px]">
          <div className="flex w-full max-w-[391px] gap-[16px]">
            <Image
              src="/ship.svg"
              alt="ship"
              width={49}
              height={53}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <div className="flex flex-col border-l-2 border-[#D8D8D8] pl-[25px]">
              <h3 className="w-full max-w-[270px]">Sea Transport Services</h3>
              <p className="subtitle">
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>
          <div className="flex w-full max-w-[391px] gap-[16px]">
            <Image
              src="/plane.svg"
              alt="ship"
              width={49}
              height={53}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <div className="flex flex-col border-l-2 border-[#D8D8D8] pl-[25px]">
              <h3 className="w-full max-w-[270px]">Air Fright Services</h3>
              <p className="subtitle">
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[70px] md:gap-[30px]">
          <div className="flex w-full max-w-[391px] gap-[16px]">
            <Image
              src="/warehous.svg"
              alt="ship"
              width={75}
              height={65}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <div className="flex flex-col border-l-2 border-[#D8D8D8] pl-[25px]">
              <h3 className="w-full max-w-[270px]">Warehousing Services</h3>
              <p className="subtitle">
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>
          <div className="flex w-full max-w-[391px] gap-[16px]">
            <Image
              src="/truck.svg"
              alt="ship"
              width={62}
              height={62}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <div className="flex flex-col border-l-2 border-[#D8D8D8] pl-[25px]">
              <h3 className="w-full max-w-[270px]">Local Shipping Services</h3>
              <p className="subtitle">
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
