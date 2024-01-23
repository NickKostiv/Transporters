"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TransCard from "../TransCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Button from "../Button";
import useMobileView from "@/hooks/useMobileView";

const Transporting = () => {
  const isMobileView1100 = useMobileView(1100);
  return (
    <section className="transporting pt-[97px] px-[25px] flexCenter flex-col gap-[20px] pb-[150px] lg:pb-[70px] ">
      <h2>Transporting Across The World</h2>
      <div className="w-full pb-[50px]">
        {isMobileView1100 ? (
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
                slidesPerView: 1.4,
                spaceBetween: 1,
              },
              640: {
                slidesPerView: 2.5,
                spaceBetween: 1,
              },

              768: {
                slidesPerView: 2.5,
                spaceBetween: 2,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 2,
              },
            }}
            loop={true}
            className="mySwiper">
            <SwiperSlide>
              <TransCard
                imageUrl="/trans1.webp"
                alt="Liquid Transportation"
                title="Liquid Transportation"
                description="Premium Tankers"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TransCard
                imageUrl="/trans2.webp"
                alt="Packaging Solutions"
                title="Packaging Solutions"
                description="Warehouse Management"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TransCard
                imageUrl="/trans3.webp"
                alt="Contract Logistics"
                title="Contract Logistics"
                description="Road Transportation"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TransCard
                imageUrl="/trans4.webp"
                alt="Warehouse & Distribution"
                title="Warehouse & Distribution"
                description="Large Warehouse"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TransCard
                imageUrl="/trans5.webp"
                alt="Specialized Transport"
                title="Specialized Transport"
                description="Ocean Transports"
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
          <div data-aos="fade-up" className="flex justify-between gap-[18px]">
            <TransCard
              imageUrl="/trans1.webp"
              alt="Liquid Transportation"
              title="Liquid Transportation"
              description="Premium Tankers"
            />
            <TransCard
              imageUrl="/trans2.webp"
              alt="Packaging Solutions"
              title="Packaging Solutions"
              description="Warehouse Management"
            />
            <TransCard
              imageUrl="/trans3.webp"
              alt="Contract Logistics"
              title="Contract Logistics"
              description="Road Transportation"
            />
            <TransCard
              imageUrl="/trans4.webp"
              alt="Warehouse & Distribution"
              title="Warehouse & Distribution"
              description="Large Warehouse"
            />
            <TransCard
              imageUrl="/trans5.webp"
              alt="Specialized Transport"
              title="Specialized Transport"
              description="Ocean Transports"
            />
          </div>
        )}
      </div>
      <Button type="button" title="Explore More" variant="btn_blue" />
    </section>
  );
};

export default Transporting;
