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
          <div
            className="w-full font-gotham text-white hover:scale-105 transition-all ease-in-out duration-500 max-w-[350px] md:w-[310px] lg:w-[330px] xl:w-[355px]"
          >
            <Link href={link} target="_blank" rel="noreferrer" key={index}>
              <Image
                src={prizeimgsrc}
                className="w-full h-[96px] xl:h-[96px] rounded-[12px] outline-none object-cover"
                placeholder="blur"
                alt={prize}
              />
              <div className="flex justify-between items-start pt-[22px]">
                <div className="flex flex-col">
                  <p className="sm:text-[24px] text-xl font-black my-[4px] sm:h-[68px]">
                    {prizeTitle}
                  </p>
                  <p className="sm:text-[20px] text-xl font-black sm:h-[48px] text-[#FF939E]">
                    {prize}
                  </p>
                </div>
              </div>
            </Link>
            <p className="sm:text-[16px] text-lg text-[#BBBBBB] mt-2">
              {isExpanded
                ? prizeDescription
                : `${prizeDescription.slice(0, 150)}...`}
              
              {
                isExpanded ? (
                  <>
                    <br></br>
                    <button
                      onClick={toggleDescription}
                      className="font-bold underline"
                    >
                      Read less
                    </button>
                  </>
                ) : (
                  <button
                    onClick={toggleDescription}
                    className="font-bold underline"
                  >
                    Read more
                  </button>
                )
              }
            </p>
          </div>
        </div>
      </AnimatedTitle>
    </>
  );
};

export default TrackPrizeCard;