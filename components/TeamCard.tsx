import Image from "next/image";
import Link from "next/link";
import React from "react";

type TeamCardProps = {
  imageUrl: string;
  socialLinks: { link: string; imgSrc: string }[];
  title: string;
  description: string;
  alt: string;
};

const TeamCard: React.FC<TeamCardProps> = ({
  imageUrl,
  title,
  socialLinks,
  description,
  alt,
}) => {
  return (
    <div className="relative w-full max-w-[364px] h-full min-h-[538px]">
      <div className="relative w-full bg-hCol ">
        <Image
          src={imageUrl}
          alt={alt}
          width={320}
          height={407}
          className="w-full"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
        <div className="absolute right-0 bottom-[105px] w-fit social-label py-[20px] px-[17px] bg-primary1 flex gap-[25px] items-center">
          {socialLinks.map((socialLink, index) => (
            <Link key={index} href={socialLink.link}>
              <Image
                src={socialLink.imgSrc}
                alt={alt}
                width={21}
                height={21}
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </Link>
          ))}
        </div>
        <div className="pt-[42px] pb-[20px] pl-[34px]">
          <h2 className="font-rubik text-[20px] font-[500] leading-normal text-white">
            {title}
          </h2>
          <p className="font-krub text-[16px] font-[500] leading-[150%] text-white">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
