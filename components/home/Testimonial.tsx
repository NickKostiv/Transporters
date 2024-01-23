"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

// Import the Swiper core and required modules
import { Swiper as SwiperClass } from "swiper";

// Extend the SwiperProps with the onSwiper and onSlideChange event handlers

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import TitleLabel from "../TitleLabel";
import Image from "next/image";

const Testimonial = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiper = (swiper: SwiperClass) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  return (
    <section className="padding-container py-[98px] sm:px-[10px] sm:py-[25px]">
      <div data-aos="fade-up">
        <div className="flexBetween">
          <div className="flex flex-col gap-[15px]">
            <TitleLabel
              text="Testimonial"
              backgroundColor="#E8E8E880"
              textColor="text-black"
            />
            <h2 className="w-full max-w-[404px]">What Our Customer Say</h2>
          </div>

          <div className="flex gap-2">
            <div className="swiper-btn-prev-custom">
              <button
                className="bg-transparent border-none cursor-pointer"
                disabled={isBeginning}>
                <FaCircleArrowLeft
                  fill={isBeginning ? "#FFBE34" : "#091242"}
                  size={43}
                />
              </button>
            </div>

            <div className="swiper-btn-next-custom">
              <button
                className="bg-transparent border-none cursor-pointer"
                disabled={isEnd}>
                <FaCircleArrowRight
                  fill={isEnd ? "#FFBE34" : "#091242"}
                  stroke="black"
                  size={43}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[20px]">
          <Swiper
            onSwiper={handleSwiper}
            onSlideChange={handleSwiper}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={2}
            navigation={{
              prevEl: ".swiper-btn-prev-custom",
              nextEl: ".swiper-btn-next-custom",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              992: {
                slidesPerView: 2,
              },
            }}
            className="tsSwiper">
            {/* Припустимо, що у вас є кілька карток для відображення */}
            <SwiperSlide>
              <div className="flexCenter flex-col px-[72px] py-[62px] w-full max-w-[600px] h-full min-h-[425px] sm:px-[10px]">
                <div className="flex justify-between w-full">
                  <div className="flexCenter gap-2">
                    <Image
                      src="/ts-ava1.webp"
                      width={91}
                      height={91}
                      alt="Kathleen Smith ava"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                    <div className="flex flex-col">
                      <p className="ts-slide-title">Kathleen Smith</p>
                      <span className="ts-slide-subtitle">Fuel Company</span>
                    </div>
                  </div>
                  <div className="">
                    <Image
                      src="/quote.svg"
                      alt="quote-icon"
                      width={72}
                      height={72}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="ts-quote">
                    Leverage agile frameworks to provide a robust synopsis for
                    strategy foster collaborative thinking to further the
                    overall value proposition. Organically grow the holistic
                    world view of disruptive innovation via workplace diversity
                    and empowerment.
                  </p>
                  <div className="flex gap-2 mt-[32px]">
                    <Image
                      src="/star.svg"
                      alt="star"
                      width={34}
                      height={34}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                    <Image
                      src="/star.svg"
                      alt="star"
                      width={34}
                      height={34}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                    <Image
                      src="/star.svg"
                      alt="star"
                      width={34}
                      height={34}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                    <Image
                      src="/star.svg"
                      alt="star"
                      width={34}
                      height={34}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                    <Image
                      src="/star.svg"
                      alt="star"
                      width={34}
                      height={34}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flexCenter flex-col px-[72px] py-[62px] w-full max-w-[600px] h-full min-h-[425px] sm:px-[10px]">
                <div className="flex justify-between w-full">
                  <div className="flexCenter gap-2">
                    <Image
                      src="/ts-ava2.webp"
                      width={91}
                      height={91}
                      alt="Kathleen Smith ava"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                    <div className="flex flex-col">
                      <p className="ts-slide-title">John Martin</p>
                      <span className="ts-slide-subtitle">
                        Restoration Company
                      </span>
                    </div>
                  </div>
                  <div className="">
                    <Image
                      src="/quote.svg"
                      alt="quote-icon"
                      width={72}
                      height={72}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="ts-quote">
                    Leverage agile frameworks to provide a robust synopsis for
                    strategy foster collaborative thinking to further the
                    overall value proposition. Organically grow the holistic
                    world view of disruptive innovation via workplace diversity
                    and empowerment.
                  </p>
                  <div className="flex gap-2 mt-[32px]">
                    <Image
                      src="/star.svg"
                      alt="star"
                      width={34}
                      height={34}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                    <Image
                      src="/star.svg"
                      alt="star"
                      width={34}
                      height={34}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                    <Image
                      src="/star.svg"
                      alt="star"
                      width={34}
                      height={34}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                    <Image
                      src="/star.svg"
                      alt="star"
                      width={34}
                      height={34}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                    <Image
                      src="/star.svg"
                      alt="star"
                      width={34}
                      height={34}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flexCenter flex-col px-[72px] py-[62px] w-full max-w-[600px] h-full min-h-[425px] sm:px-[10px]">
                <div className="flex justify-between w-full">
                  <div className="flexCenter gap-2">
                    <Image
                      src="/ts-ava1.webp"
                      width={91}
                      height={91}
                      alt="Kathleen Smith ava"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                    <div className="flex flex-col">
                      <p className="ts-slide-title">Kathleen Smith</p>
                      <span className="ts-slide-subtitle">Fuel Company</span>
                    </div>
                  </div>
                  <div className="">
                    <Image
                      src="/quote.svg"
                      alt="quote-icon"
                      width={72}
                      height={72}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="ts-quote">
                    Leverage agile frameworks to provide a robust synopsis for
                    strategy foster collaborative thinking to further the
                    overall value proposition. Organically grow the holistic
                    world view of disruptive innovation via workplace diversity
                    and empowerment.
                  </p>
                  <div className="flex gap-2 mt-[32px]">
                    <Image
                      src="/star.svg"
                      alt="star"
                      width={34}
                      height={34}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                    <Image
                      src="/star.svg"
                      alt="star"
                      width={34}
                      height={34}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                    <Image
                      src="/star.svg"
                      alt="star"
                      width={34}
                      height={34}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                    <Image
                      src="/star.svg"
                      alt="star"
                      width={34}
                      height={34}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                    <Image
                      src="/star.svg"
                      alt="star"
                      width={34}
                      height={34}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flexCenter flex-col px-[72px] py-[62px] w-full max-w-[600px] h-full min-h-[425px] sm:px-[10px]">
                <div className="flex justify-between w-full">
                  <div className="flexCenter gap-2">
                    <Image
                      src="/ts-ava2.webp"
                      width={91}
                      height={91}
                      alt="Kathleen Smith ava"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                    <div className="flex flex-col">
                      <p className="ts-slide-title">John Martin</p>
                      <span className="ts-slide-subtitle">
                        Restoration Company
                      </span>
                    </div>
                  </div>
                  <div className="">
                    <Image
                      src="/quote.svg"
                      alt="quote-icon"
                      width={72}
                      height={72}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="ts-quote">
                    Leverage agile frameworks to provide a robust synopsis for
                    strategy foster collaborative thinking to further the
                    overall value proposition. Organically grow the holistic
                    world view of disruptive innovation via workplace diversity
                    and empowerment.
                  </p>
                  <div className="flex gap-2 mt-[32px]">
                    <Image
                      src="/star.svg"
                      alt="star"
                      width={34}
                      height={34}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                    <Image
                      src="/star.svg"
                      alt="star"
                      width={34}
                      height={34}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                    <Image
                      src="/star.svg"
                      alt="star"
                      width={34}
                      height={34}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                    <Image
                      src="/star.svg"
                      alt="star"
                      width={34}
                      height={34}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                    <Image
                      src="/star.svg"
                      alt="star"
                      width={34}
                      height={34}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
