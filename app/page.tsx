"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Blog from "@/components/home/Blog";
import Contact from "@/components/home/Contact";
import ExpertTeam from "@/components/home/ExpertTeam";
import Hero from "@/components/home/Hero";
import Testimonial from "@/components/home/Testimonial";
import Transporting from "@/components/home/Transporting";
import WhatWeDo from "@/components/home/WhatWeDo";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WhyUs from "@/components/home/WhyUs";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <>
      <Hero />
      <WhatWeDo />
      <WhyUs />
      <Transporting />
      <Testimonial />
      <WhyChooseUs />
      <ExpertTeam />
      <Contact />
      <Blog />
    </>
  );
}
