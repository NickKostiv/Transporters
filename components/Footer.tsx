import Image from "next/image";
import React from "react";
import Link from "next/link";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="">
      <div className="flex flex-col">
        <div className="w-full">
          <Image
            src="/footer-img.webp"
            width={1966}
            height={1310}
            alt="Studio green img"
            className="w-full"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className="flex justify-center pt-[43px] pb-[18px] px-[15px] bg-primary2 gap-[100px] 2xl:gap-[40px] lg:flex-wrap">
          <div className="w-full max-w-[253px] flex flex-col gap-[33px] lg:gap-[10px]">
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
            <p className="subtitle text-white mt-[73px] lg:mt-[15px]">
              Leverage agile frameworks to provide a robust synopsis for
              strategy collaborative thinking to further the overall value
              proposition.
            </p>
          </div>
          <div className="flex gap-[140px] md:gap-[30px]">
            <div className="flex flex-col gap-[10px] ">
              <h3 className="text-white mb-[73px] lg:mb-[10px]">Pages</h3>
              <Link href="/about">
                <p className="text-white font-krub text-[16px] font-normal leading-[150%]">
                  About us
                </p>
              </Link>
              <Link href="/about">
                <p className="text-white font-krub text-[16px] font-normal leading-[150%]">
                  Our Team
                </p>
              </Link>
              <Link href="/about">
                <p className="text-white font-krub text-[16px] font-normal leading-[150%]">
                  Our Project
                </p>
              </Link>
              <Link href="/about">
                <p className="text-white font-krub text-[16px] font-normal leading-[150%]">
                  Pricing
                </p>
              </Link>
              <Link href="/about">
                <p className="text-white font-krub text-[16px] font-normal leading-[150%]">
                  Contact
                </p>
              </Link>
            </div>

            <div className="flex flex-col gap-[10px]">
              <h3 className="text-white mb-[73px] lg:mb-[10px]">Utility</h3>
              <Link href="/about">
                <p className="text-white font-krub text-[16px] font-normal leading-[150%]">
                  Style Guide
                </p>
              </Link>
              <Link href="/about">
                <p className="text-white font-krub text-[16px] font-normal leading-[150%]">
                  Changelog
                </p>
              </Link>
              <Link href="/about">
                <p className="text-white font-krub text-[16px] font-normal leading-[150%]">
                  Licenses
                </p>
              </Link>
              <Link href="/about">
                <p className="text-white font-krub text-[16px] font-normal leading-[150%]">
                  Protected
                </p>
              </Link>
              <Link href="/about">
                <p className="text-white font-krub text-[16px] font-normal leading-[150%]">
                  Not Found
                </p>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-[10px] lg:flexCenter">
            <h3 className="text-white">Subscribe</h3>
            <div className="inputContainer mt-[74px] lg:mt-[10px]">
              <input
                className=" bg-transparent focus:outline-none"
                type="email"
                id="email"
                required
                placeholder="Email*"
              />
            </div>
            <div className="flex gap-[30px]">
              <div className="w-1/2">
                <Button
                  type="button"
                  title="Send Message"
                  variant="btn_yellow"
                />
              </div>
              <div className="flex gap-[27px] items-center w-full sm:flexCenter">
                <Link href="/linkedin.com">
                  <Image
                    src="/in.svg"
                    alt="linkdein link"
                    width={21}
                    height={21}
                  />
                </Link>
                <Link href="/linkedin.com">
                  <Image
                    src="/twit.svg"
                    alt="twitter link"
                    width={21}
                    height={21}
                  />
                </Link>
                <Link href="/facebook.com">
                  <Image
                    src="/fb.svg"
                    alt="facebooks link"
                    width={21}
                    height={21}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
