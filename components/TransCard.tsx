import Image from "next/image";
import React from "react";

type TransCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  alt: string;
};

const TransCard: React.FC<TransCardProps> = ({
  imageUrl,
  title,
  description,
  alt,
}) => {
  return (
    <div className="relative w-full max-w-[320px] h-auto">
      <Image
        src={imageUrl}
        alt={alt}
        width={320}
        height={407}
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />

      <div className="absolute bottom-0 left-0 w-full p-4 bg-opacity-75">
        <h2 className="font-rubik text-[20px] font-[500] leading-normal text-white">
          {title}
        </h2>
        <p className="font-krub text-[16px] font-[500] leading-[150%] text-[#FFB629]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TransCard;
