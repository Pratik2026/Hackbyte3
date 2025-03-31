"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import AnimatedTitle from "@/components/AnimatedTitle";

interface TrackPrizeCardProps {
  index: number;
  prizeimgsrc: StaticImageData;
  prizeTitle: string;
  prize: string;
  link: string;
  prizeDescription: string;
}

const TrackPrizeCard: React.FC<TrackPrizeCardProps> = ({
  index,
  prizeimgsrc,
  prizeTitle,
  prize,
  link,
  prizeDescription,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <AnimatedTitle delay={0.2} viewport={true}>
        <div className="flex justify-center">
          <div className="w-full font-gotham text-white hover:scale-105 transition-all ease-in-out duration-500 max-w-[350px] md:w-[310px] lg:w-[330px] xl:w-[355px]">
            <Link href={link} target="_blank" rel="noreferrer" key={index}>
              <Image
                src={prizeimgsrc}
                className="w-full h-[96px] xl:h-[96px] rounded-[12px] outline-none object-cover"
                placeholder="blur"
                alt={prize}
              />
              <div className="flex justify-between items-start pt-[22px]">
                <div className="flex flex-col">
                  <p
                    className={`${
                      prizeTitle.length > 45 ? "sm:text-xl" : "sm:text-2xl"
                    } text-xl font-black my-[4px] sm:h-[68px] underline`}
                  >
                    {prizeTitle}
                  </p>
                  <p className="sm:text-[20px] text-xl font-black sm:h-[48px] text-[#FF939E]">
                    {prize.split(". ").map((sentence, index) => (
                      <span key={index}>
                        {sentence}.
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </Link>

            {/* Description with smooth transition */}
            <div
              className={`sm:text-[16px] text-lg text-[#BBBBBB] mt-2 transition-all duration-1000 ease-in-out ${
                isExpanded ? "overflow-y-scroll" : "overflow-hidden"
              } sm:overflow-hidden ${
                isExpanded
                  ? "max-h-[250px] sm:max-h-[500px] opacity-100"
                  : "sm:max-h-[80px] max-h-[135px] opacity-80"
              }`}
            >
              {prizeDescription}
            </div>

            {/* Read more / Read less button */}
            <button
              onClick={toggleDescription}
              className="font-bold underline transition-all duration-300 hover:opacity-80 mt-1"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          </div>
        </div>
      </AnimatedTitle>
    </>
  );
};

export default TrackPrizeCard;
