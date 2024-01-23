import React from "react";
import TitleLabel from "../TitleLabel";
import Image from "next/image";

const WhyUs = () => {
  return (
    <div className="">
      <section className="bg-home-bg-2 bg-cover bg-no-repeat pt-[300px] pb-[300px] w-full"></section>
      <section className="flexCenter flex-col mt-[-150px] m-auto w-full padding-container pb-[150px] lg:px-0 lg:pb-[40px] lg:mt-[0]">
        <div
          data-aos="flip-left"
          className="flexCenter pt-[120px] px-[86px] bg-white w-full max-w-[1200px] lg:w-full lg:max-w-full lg:pt-[40px] lg:px-[10px]">
          <div className="flexBetween lg:flex-col">
            <div className="flex flex-col">
              <TitleLabel
                text="Why Us"
                backgroundColor="#E8E8E880"
                textColor="text-black"
              />
              <h2 className="w-full max-w-[472px] mt-[15px]">
                We provide full range global logistics solution
              </h2>
              <p className="subtitle w-full max-w-[472px] mt-[12px]">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition. Organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment.
              </p>
              <div className="flex flex-col gap-[22px] mt-[25px]">
                <div className="flex items-center gap-[15px]">
                  <Image
                    src="/box-icon.svg"
                    alt="box-icon"
                    width={58}
                    height={58}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                  <p className="font-rubik text-[25px] font-[400] leading-normal text-hCol">
                    Delivery on Time
                  </p>
                </div>
                <div className="flex items-center gap-[15px]">
                  <Image
                    src="/cost-icon.svg"
                    alt="cost-icon"
                    width={58}
                    height={58}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                  <p className="font-rubik text-[25px] font-[400] leading-normal text-hCol">
                    Optimized Travel Cost
                  </p>
                </div>
              </div>
            </div>
            <div className="flexCenter">
              <Image
                src="/why-us-imgs.webp"
                alt="group-of-images plane and boxes"
                width={550}
                height={462}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="flex pt-[46px] pb-[38px] px-[81px] border-t-2 border-b-2 border-[#D4D4D4] w-full max-w-[1020px] m-auto gap-[16px] lg:flex-col lg:px-[10px] lg:flexCenter">
        <div
          data-aos="fade-right"
          className="flexCenter gap-[16px] pr-[106px] border-r-2 border-[#D4D4D4] lg:border-none lg:pr-0">
          <span className="font-rubik font-[600] text-[50px] text-hCol">
            1294
          </span>
          <Image
            src="/yellow-cube.svg"
            width={17}
            height={17}
            alt="cube"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
          <span className="font-rubik font-[400] text-[20px] text-hCol leading-normal text-nowrap">
            Delivered Packages
          </span>
        </div>
        <div
          data-aos="fade-left"
          className="flexCenter gap-[16px] pl-[106px] lg:pl-0">
          <span className="font-rubik font-[600] text-[50px] text-hCol">
            3594
          </span>
          <Image
            src="/yellow-cube.svg"
            width={17}
            height={17}
            alt="cube"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
          <span className="font-rubik font-[400] text-[20px] text-hCol leading-normal text-nowrap">
            Satisfied Clients
          </span>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
