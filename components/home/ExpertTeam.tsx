"use client";
import React from "react";
import TitleLabel from "../TitleLabel";
import TeamCard from "../TeamCard";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useMobileView from "@/hooks/useMobileView";
const ExpertTeam = () => {
  const isMobileView840 = useMobileView(840);
  return (
    <section className="w-full pb-[101px] padding-container lg:px-[15px] lg:pb-[40px]">
      <div className="flexCenter flex-col gap-[16px] text-center">
        <TitleLabel
          text="Transporters"
          backgroundColor="#E8E8E880"
          textColor="text-black"
        />
        <h2 className="w-full max-w-[307px] pb-[15px]">Meet Expert Team</h2>
      </div>

      {isMobileView840 ? (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={2}
          slidesPerView={3}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 1,
            },
            640: {
              slidesPerView: 1.3,
              spaceBetween: 1,
            },

            768: {
              slidesPerView: 1.8,
              spaceBetween: 2,
            },
          }}
          loop={true}
          className="mySwiper">
          <SwiperSlide>
            <TeamCard
              imageUrl="/Jesca.webp"
              socialLinks={[
                { link: "twitter.com", imgSrc: "/tw-card.svg" },
                { link: "facebook.com", imgSrc: "/fb-card.svg" },
                { link: "instagram.com", imgSrc: "/insta-card.svg" },
              ]}
              alt="Jesca Arow"
              title="Jessca Arow"
              description="Designer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              imageUrl="/Kathleen.webp"
              socialLinks={[
                { link: "linkedin.com", imgSrc: "/in-card.svg" },
                { link: "twitter.com", imgSrc: "/tw-card.svg" },
                { link: "facebook.com", imgSrc: "/fb-card.svg" },
                { link: "instagram.com", imgSrc: "/insta-card.svg" },
              ]}
              alt="Kathleen Smith"
              title="Kathleen Smith"
              description="Designer"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard
              imageUrl="/Rebecca.webp"
              socialLinks={[
                { link: "facebook.com", imgSrc: "/fb-card.svg" },
                { link: "instagram.com", imgSrc: "/insta-card.svg" },
              ]}
              alt="Rebecca Tylor"
              title="Rebecca Tylor"
              description="Designer"
            />
          </SwiperSlide>
          <div className="">
            <div className="swiper-button-prev-custom absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
              <button className="bg-transparent border-none cursor-pointer">
                <FaChevronLeft size={40} color="orange" />
              </button>
            </div>

            <div className="swiper-button-next-custom absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
              <button className="bg-transparent border-none cursor-pointer">
                <FaChevronRight size={40} color="orange" />
              </button>
            </div>
          </div>
        </Swiper>
      ) : (
        <div
          data-aos="fade-up"
          className="flexCenter gap-[54px] mt-[40px] lg:gap-[15px]">
          <TeamCard
            imageUrl="/Jesca.webp"
            socialLinks={[
              { link: "twitter.com", imgSrc: "/tw-card.svg" },
              { link: "facebook.com", imgSrc: "/fb-card.svg" },
              { link: "instagram.com", imgSrc: "/insta-card.svg" },
            ]}
            alt="Jesca Arow"
            title="Jessca Arow"
            description="Designer"
          />
          <TeamCard
            imageUrl="/Kathleen.webp"
            socialLinks={[
              { link: "linkedin.com", imgSrc: "/in-card.svg" },
              { link: "twitter.com", imgSrc: "/tw-card.svg" },
              { link: "facebook.com", imgSrc: "/fb-card.svg" },
              { link: "instagram.com", imgSrc: "/insta-card.svg" },
            ]}
            alt="Kathleen Smith"
            title="Kathleen Smith"
            description="Designer"
          />
          <TeamCard
            imageUrl="/Rebecca.webp"
            socialLinks={[
              { link: "facebook.com", imgSrc: "/fb-card.svg" },
              { link: "instagram.com", imgSrc: "/insta-card.svg" },
            ]}
            alt="Rebecca Tylor"
            title="Rebecca Tylor"
            description="Designer"
          />
        </div>
      )}
    </section>
  );
};

export default ExpertTeam;
