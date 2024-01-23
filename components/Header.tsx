"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      event.target instanceof Node &&
      !dropdownRef.current.contains(event.target)
    ) {
      setIsDropDownOpen(false);
    }
  };

  useEffect(() => {
    const listener = (event: MouseEvent) => handleClickOutside(event);
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, []);

  return (
    <div className="flex flex-col fixed w-full z-[50]">
      <div
        className="head-wrapper flexBetween py-[46px] padding-container 3xl:py-[18px] lg:flex-col lg:gap-[5px] md:py-[12px] 
        bg-primary2">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={210}
            height={36}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Link>

        <button
          onClick={toggleNav}
          className="lg:inline-flex hidden hover:bg-gray-700 p-2 rounded absolute z-50 right-[5px] top-[5px]">
          {isNavOpen ? <FaTimes color="white" /> : <FaBars color="white" />}
        </button>

        <div className="flexCenter gap-[39px] lg:gap-[12px]">
          <div className="flexBetween gap-[39px] sm:gap-[10px] sm:flexCenter">
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
      <nav
        className={`flexBetween padding-container bg-rgba-25 w-full ${
          isNavOpen
            ? "lg:flexCenter lg:flex-col lg:absolute m-auto lg:top-0 lg:right-[0%] lg:w-[78%] lg:h-screen lg:bg-primary2"
            : "lg:hidden"
        }`}>
        <ul className="flex gap-[30px] lg:flex-col lg:flexCenter lg:mb-6 lg:gap-[50px]">
          <Link
            href="/"
            className="navbar-link pr-[20px] border-r-[1px] border-hCol regular-35 text-white hover:underline lg:text-[30px] border-none">
            Home
          </Link>
          <Link
            href="/about"
            className="navbar-link pr-[20px] border-r-[1px] border-hCol regular-35 text-white hover:underline lg:text-[30px] border-none">
            About
          </Link>

          <li
            className="navbar-link cursor-pointer relative dropdown-link flexCenter pr-[20px] border-r-[1px] border-hCol regular-35 text-white group lg:text-[30px] border-none"
            onClick={toggleDropDown}
            ref={dropdownRef}>
            Pages{" "}
            <span className=" ml-[5px]">
              <Image
                src="drop-down.svg"
                alt="drop-down icon"
                width={10}
                height={8}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </span>
            <div
              className={`${
                isDropDownOpen ? "flex" : "hidden"
              } flex-col bg-hCol absolute top-[25px] right-[5px] p-3 lg:gap-6 lg:bg-primary1 lg:w-full`}>
              <Link
                href="/services"
                className="hover:underline text-white lg:text-[25px]">
                Services
              </Link>
              <Link
                href="/details"
                className="hover:underline text-white lg:text-[25px]">
                Details
              </Link>
              <Link
                href="/air"
                className="hover:underline text-white lg:text-[25px]">
                Air
              </Link>
            </div>
          </li>
          <Link
            href="project"
            className="navbar-link pr-[20px] border-r-[1px] border-hCol regular-35 text-white hover:underline lg:text-[30px] border-none">
            Project
          </Link>
          <Link
            href="contact"
            className="navbar-link pr-[20px] border-r-[1px] border-hCol regular-35 text-white hover:underline lg:text-[30px] border-none">
            Contact
          </Link>
        </ul>
        <div className="r-side flexCenter gap-4 lg:flex lg:flex-col">
          <div className="flex gap-5">
            <Link href="instagram.com">
              <Image
                alt="instagram"
                src="insta.svg"
                width={19}
                height={19}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Link>
            <Link href="facebook.com">
              <Image
                alt="insfacebooktagram"
                src="fb.svg"
                width={19}
                height={19}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Link>
            <Link href="twitter.com">
              <Image
                alt="twitter"
                src="twit.svg"
                width={19}
                height={19}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Link>
            <Link href="linkedin.com">
              <Image
                alt="linkedin"
                src="in.svg"
                width={19}
                height={19}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Link>
          </div>
          <Button
            type="button"
            title="Request Quote"
            variant="btn_white_text"
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;
