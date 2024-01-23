import React from "react";
import TitleLabel from "../TitleLabel";
import Image from "next/image";
import Button from "../Button";

const Blog = () => {
  return (
    <section className="flexCenter flex-col py-[101px] lg:px-[10px] md:py-[35px]">
      <div className="flexCenter flex-col gap-[15px]">
        <TitleLabel
          text="Blog"
          backgroundColor="#E8E8E880"
          textColor="text-black"
        />
        <h2 className="w-full max-w-[404px]">Our Latest News</h2>
      </div>
      <div className="py-[39px] mt-[15px] border-y-[1px] border-[#D6D6D6] md:py-[15px]">
        <div
          data-aos="fade-up"
          className="flex gap-[10px] pb-[39px] md:pb-[10px] w-full max-w-[948px] md:flex-col-reverse">
          <Image
            src="/blog1.webp"
            width={453}
            height={308}
            alt="random transport-logistic image"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <div className="flex items-center flex-col">
            <Image
              src="/calendar.svg"
              width={51}
              height={56}
              alt="calendar"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <span className="text-center font-rubik text-[40px] font-[600] leading-normal text-pCol">
              08
            </span>
            <span className="text-center font-krub text-[16px] font-[500] leading-normal text-hCol">
              september
            </span>
          </div>
          <div className="flex flex-col gap-[16px] pl-[40px] border-l-[1px] border-[#D6D6D6] md:flexCenter">
            <h3 className="md:text-center">
              Inland freight a worthy solution for your business
            </h3>
            <p className="subtitle text-center">
              We are dedicated in creating added value for our customers by
              implementing modern technology in our work.
            </p>
            <ol className="list-disc">
              <li>Urgent transport solutions</li>
              <li>Reliable & experienced staffs</li>
              <li>Urgent transport solutions</li>
              <li>Reliable & experienced staffs</li>
            </ol>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="flex gap-[10px] pb-[39px] md:pb-[10px] w-full max-w-[948px] md:flex-col-reverse">
          <Image
            src="/blog2.webp"
            width={453}
            height={308}
            alt="random transport-logistic image"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <div className="flex items-center flex-col">
            <Image
              src="/calendar.svg"
              width={51}
              height={56}
              alt="calendar"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <span className="text-center font-rubik text-[40px] font-[600] leading-normal text-pCol">
              08
            </span>
            <span className="text-center font-krub text-[16px] font-[500] leading-normal text-hCol">
              september
            </span>
          </div>
          <div className="flex flex-col gap-[16px] pl-[40px] border-l-[1px] border-[#D6D6D6] md:flexCenter">
            <h3 className="md:text-center">
              Inland freight a worthy solution for your business
            </h3>
            <p className="subtitle text-center">
              We are dedicated in creating added value for our customers by
              implementing modern technology in our work.
            </p>
            <ol className="list-disc">
              <li>Urgent transport solutions</li>
              <li>Reliable & experienced staffs</li>
              <li>Urgent transport solutions</li>
              <li>Reliable & experienced staffs</li>
            </ol>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="flex gap-[10px] pb-[39px] md:pb-[10px] w-full max-w-[948px] md:flex-col-reverse">
          <Image
            src="/blog3.webp"
            width={453}
            height={308}
            alt="random transport-logistic image"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <div className="flex items-center flex-col">
            <Image
              src="/calendar.svg"
              width={51}
              height={56}
              alt="calendar"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <span className="text-center font-rubik text-[40px] font-[600] leading-normal text-pCol">
              08
            </span>
            <span className="text-center font-krub text-[16px] font-[500] leading-normal text-hCol">
              september
            </span>
          </div>
          <div className="flex flex-col gap-[16px] pl-[40px] border-l-[1px] border-[#D6D6D6] md:flexCenter">
            <h3 className="md:text-center">
              Inland freight a worthy solution for your business
            </h3>
            <p className="subtitle text-center">
              We are dedicated in creating added value for our customers by
              implementing modern technology in our work.
            </p>
            <ol className="list-disc">
              <li>Urgent transport solutions</li>
              <li>Reliable & experienced staffs</li>
              <li>Urgent transport solutions</li>
              <li>Reliable & experienced staffs</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="flexCenter mt-[39px]">
        <Button type="button" title="More Blog" variant="btn_blue" />
      </div>
    </section>
  );
};

export default Blog;
