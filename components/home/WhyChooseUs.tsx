import Image from "next/image";
import React from "react";
import TitleLabel from "../TitleLabel";

const WhyChooseUs = () => {
  return (
    <section className="w-full">
      <div className="flex w-full py-[150px] lg:flex-col-reverse sm:py-[50px]">
        <div
          data-aos="fade-right"
          className="flex flex-grow-1 flex-shrink-1 w-1/2 bg-primary2 py-[150px] sm:py-[50px] lg:w-full lg:flexCenter">
          <Image
            src="/plane-choose.webp"
            alt="plane"
            width={929}
            height={610}
            className="choose-img lg:static"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <div
          data-aos="fade-left"
          className="flexCenter flex-grow-1 flex-shrink-1 w-1/2 bg-secondary lg:w-full lg:padiing-container lg:flex">
          <div className="choose-text flex flex-col py-[150px] lg:py-[40px] lg:flex-row lg:px-[15px]">
            <div className="flex-col lg:flex-row md:flex-col">
              <TitleLabel
                text="Why Choose Us"
                backgroundColor="#E8E8E880"
                textColor="text-black"
              />
              <div className="w-ful max-w-[486px] sm:w-full mt-[12px]">
                <h2 className="w-full">
                  We create opportunity to reach potential
                </h2>
                <p className="subtitle mt-[18px]">
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy foster collaborative thinking to further the overall
                  value proposition.
                </p>
              </div>
            </div>
            <div className="flex gap-[72px] mt-[10px] lg:gap-[10px]">
              <div className="flex flex-col gap-[20px]">
                <div className="flex gap-[12px] items-center">
                  <Image
                    src="/safe.svg"
                    alt="safe"
                    width={63}
                    height={63}
                    className="sm:w-[40px] sm:h-[40px]"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                  <p className="font-rubik text-hCol text-[20px] font-[400px] leading-normal sm:text-[14px]">
                    Safe Package
                  </p>
                </div>
                <div className="flex gap-[12px] items-center">
                  <Image
                    src="/global.svg"
                    alt="global"
                    width={63}
                    height={63}
                    className="sm:w-[40px] sm:h-[40px]"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                  <p className="font-rubik text-hCol text-[20px] font-[400px] leading-normal sm:text-[14px]">
                    Global Tracking
                  </p>
                </div>
                <div className="flex gap-[12px] items-center">
                  <Image
                    src="/time.svg"
                    alt="time"
                    width={63}
                    height={63}
                    className="sm:w-[40px] sm:h-[40px]"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                  <p className="font-rubik text-hCol text-[20px] font-[400px] leading-normal sm:text-[14px]">
                    In Time Delivery
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="flex gap-[12px] items-center">
                  <Image
                    src="/ship-everywhere.svg"
                    alt="ship-everywhere"
                    width={63}
                    height={63}
                    className="sm:w-[40px] sm:h-[40px]"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                  <p className="font-rubik text-hCol text-[20px] font-[400px] leading-normal sm:text-[14px]">
                    Ship Everyware
                  </p>
                </div>
                <div className="flex gap-[12px] items-center">
                  <Image
                    src="/support.svg"
                    alt="safe"
                    width={63}
                    height={63}
                    className="sm:w-[40px] sm:h-[40px]"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                  <p className="font-rubik text-hCol text-[20px] font-[400px] leading-normal sm:text-[14px]">
                    24/7 Support
                  </p>
                </div>
                <div className="flex gap-[12px] items-center">
                  <Image
                    src="/pricing.svg"
                    alt="safe"
                    width={63}
                    height={63}
                    className="sm:w-[40px] sm:h-[40px]"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                  <p className="font-rubik text-hCol text-[20px] font-[400px] leading-normal sm:text-[14px]">
                    Transparant Pricing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
