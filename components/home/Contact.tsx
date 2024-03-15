import React from "react";
import TitleLabel from "../TitleLabel";
import Image from "next/image";
import Button from "../Button";

const Contact = () => {
  return (
    <section className="padding-container bg-primary2 py-[143px] md:py-[55px] sm:px-[15px]">
      <div className="flex lg:flex-col">
        <div
          data-aos="fade-right"
          className="flex flex-[40%] flex-col lg:flex-[100%] lg:flexCenter">
          <div className="flex-col lg:flex-row md:flex-col">
            <TitleLabel
              text="Contact"
              backgroundColor="#E8E8E81A"
              textColor="text-white"
            />
            <div className="w-ful max-w-[343px] sm:w-full mt-[12px]">
              <h2 className="w-full text-white">Get in touch with us</h2>
              <p className="font-krub text-[16px] font-normal leading-[150%] text-white mt-[18px]">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value.
              </p>
            </div>
            <div className="flex flex-col gap-[30px] mt-[32px]">
              <div className="flexCenter w-full max-w-[220px] gap-[5px] sm:gap-[2px] ">
                <Image
                  src="/clock-icon.svg"
                  alt="work-time"
                  width={63}
                  height={63}
                  className=" lg:w-[36] lg:h-[36px] sm:w-[25px] sm:h-[25px]"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                <p className="w-full ext-white font-krub text-[14px] sm:text-[8px] font-medium leading-custom-135 text-[#ffffff]">
                  Mon - Sat 9.00 - 18.00 Sunday Closed
                </p>
              </div>
              <div className="flexCenter w-full max-w-[220px] gap-[5px] sm:gap-[2px] ">
                <Image
                  src="/mail-icon.svg"
                  alt="email"
                  width={63}
                  height={63}
                  className=" lg:w-[36] lg:h-[36px] sm:w-[25px] sm:h-[25px]"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                <p className="w-full ext-white font-krub text-[14px] sm:text-[8px] font-medium leading-custom-135 text-[#ffffff]">
                  Email contact@logistics.com
                </p>
              </div>
              <div className="flexCenter w-full max-w-[220px] gap-[5px] sm:gap-[2px] ">
                <Image
                  src="/call-icon.svg"
                  alt="phone"
                  width={63}
                  height={63}
                  className=" lg:w-[36] lg:h-[36px] sm:w-[25px] sm:h-[25px]"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                <p className="w-full ext-white font-krub text-[14px] sm:text-[8px] font-medium leading-custom-135 text-[#ffffff]">
                  Call Us <br /> (00) 112 365 489
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-[60%] flex-col pt-[42px]">
          <div className="flex gap-[28px] md:flex-col">
            <div className="inputContainer">
              <input
                className=" bg-transparent focus:outline-none"
                type="text"
                id="name"
                required
                placeholder="Name*"
              />
            </div>
            <div className="inputContainer">
              <input
                className=" bg-transparent focus:outline-none"
                type="email"
                id="email"
                required
                placeholder="Email*"
              />
            </div>
          </div>
          <div className="flex gap-[28px] mt-[31px] md:flex-col w-full">
            <div className="inputContainer">
              <input
                className=" bg-transparent focus:outline-none"
                type="number"
                id="number"
                required
                placeholder="Phone Number*"
              />
            </div>
            <div className="inputContainer">
              <input
                className=" bg-transparent focus:outline-none"
                type="text"
                id="City*"
                required
                placeholder="City*"
              />
            </div>
          </div>
          <div className="flex gap-[28px] mt-[31px] w-full">
            <div className="textAreaContainer">
              <textarea
                className="bg-transparent focus:outline-none text-[16px] resize-none w-full"
                id="message"
                required
                placeholder="Your Message*"
              />
            </div>
          </div>
          <div className="w-full max-w-[194px] mt-[30px]">
            <Button type="button" title="Submit Message" variant="btn_yellow" />
          </div>
        </div>
      </div>

      <div
        data-aos="fade-top"
        className="flexCenter mt-[70px] w-full xl:flex-wrap">
        <div className="flex md:flex-wrap md:flexCenter">
          <Image
            src="/contact1.webp"
            width={301}
            height={234}
            alt="Studio green img"
            className="w-full max-w-[301px] h-full min-h-[234px]"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className="flex md:flex-wrap md:flexCenter">
          <Image
            src="/contact3.webp"
            width={301}
            height={234}
            alt="Studio green img"
            className="w-full max-w-[301px] h-full min-h-[234px]"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
          <Image
            src="/contact4.webp"
            width={301}
            height={234}
            alt="Studio green img"
            className="w-full max-w-[301px] h-full min-h-[234px]"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
