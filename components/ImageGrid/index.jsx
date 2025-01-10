"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"

import img1 from "@/public/ImageGallery/img1.webp"
import img2 from "@/public/ImageGallery/img2.webp"
import img3 from "@/public/ImageGallery/img3.webp"
import img4 from "@/public/ImageGallery/img4.webp"
import img5 from "@/public/ImageGallery/img5.webp"
import img6 from "@/public/ImageGallery/img6.webp"
import img7 from "@/public/ImageGallery/img7.webp"
import img8 from "@/public/ImageGallery/img8.webp"
import img9 from "@/public/ImageGallery/img9.webp"

const SingleCarousel = ({ images, className, duration = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState("right")
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      const newDirection = Math.random() > 0.5 ? "right" : "left"
      setDirection(newDirection)
      setIsTransitioning(true)

      if (newDirection === "right") {
        setCurrentIndex((prev) => (prev + 1) % images.length)
      } else {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
      }

      setTimeout(() => setIsTransitioning(false), 500)
    }, duration)

    return () => clearInterval(interval)
  }, [images.length, duration])

  const getSlideAnimation = () => {
    if (!isTransitioning) return ""
    return direction === "right" ? "animate-slideRight" : "animate-slideLeft"
  }

  return (
    <div className="relative group">
      <div className={`relative overflow-hidden rounded-xl ${className}`}>
        <Image
          src={images[currentIndex]}
          alt={`Carousel ${currentIndex + 1}`}
          className={`w-full h-full object-cover transition-all duration-500 ${getSlideAnimation()}`}
          placeholder="blur"
        />
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

const GridImage = () => {
  const carousels = [
    { images: [img6, img1, img4], duration: 2000 },
    { images: [img7, img2, img5], duration: 3500 },
    { images: [img4, img3, img6], duration: 4200 },
    { images: [img8, img4, img7], duration: 2800 },
    { images: [img9, img5, img8], duration: 3200 },
    { images: [img5, img6, img9], duration: 4800 },
    { images: [img1, img7, img2], duration: 3800 },
    { images: [img2, img8, img3], duration: 2500 },
    { images: [img3, img9, img1], duration: 4500 },
  ]

  return (
    <div className="max-w-8xl mx-auto py-16">
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="flex flex-col gap-5 items-center">
          <SingleCarousel
            images={carousels[0].images}
            duration={carousels[0].duration}
            className="xl:w-[420px] xl:h-[300px] lg:w-[320px] w-[320px]"
          />
          <SingleCarousel
            images={carousels[1].images}
            duration={carousels[1].duration}
            className="xl:w-[420px] xl:h-[280px] lg:w-[320px] w-[320px]"
          />
          <SingleCarousel
            images={carousels[2].images}
            duration={carousels[2].duration}
            className="xl:w-[420px] xl:h-[530px] lg:w-[320px] w-[320px] h-[320px]"
          />
        </div>

        <div className="flex flex-col gap-5 items-center">
          <SingleCarousel
            images={carousels[3].images}
            duration={carousels[3].duration}
            className="xl:w-[420px] xl:h-[520px] lg:w-[320px] w-[320px] h-[320px]"
          />
          <SingleCarousel
            images={carousels[4].images}
            duration={carousels[4].duration}
            className="xl:w-[420px] xl:h-[300px] lg:w-[320px] w-[320px]"
          />
          <SingleCarousel
            images={carousels[5].images}
            duration={carousels[5].duration}
            className="xl:w-[420px] xl:h-[280px] lg:w-[320px] w-[320px]"
          />
        </div>

        <div className="flex flex-col gap-5 items-center">
          <SingleCarousel
            images={carousels[6].images}
            duration={carousels[6].duration}
            className="xl:w-[420px] xl:h-[280px] lg:w-[320px] w-[320px]"
          />
          <SingleCarousel
            images={carousels[7].images}
            duration={carousels[7].duration}
            className="xl:w-[420px] xl:h-[280px] lg:w-[320px] w-[320px]"
          />
          <SingleCarousel
            images={carousels[8].images}
            duration={carousels[8].duration}
            className="xl:w-[420px] xl:h-[540px] lg:w-[320px] w-[320px] h-[320px]"
          />
        </div>
      </div>
    </div>
  )
}

const BannerImage = ({ imgsrc }) => {
  return (
    <Image
      src={imgsrc}
      alt="Banner"
      className="xl:w-[1080px] xl:h-[470px] lg:w-[880px] lg:h-[380px] md:w-[672px] md:h-[288px] w-[350px] h-[150px] rounded-xl object-cover"
      placeholder="blur"
      quality={100}
    />
  )
}

const styles = {
  ".animate-slideRight": {
    animation: "slideRight 500ms ease-in-out",
  },
  ".animate-slideLeft": {
    animation: "slideLeft 500ms ease-in-out",
  },
  "@keyframes slideRight": {
    "0%": { transform: "translateX(-100%)" },
    "100%": { transform: "translateX(0)" },
  },
  "@keyframes slideLeft": {
    "0%": { transform: "translateX(100%)" },
    "100%": { transform: "translateX(0)" },
  },
}

export { GridImage, BannerImage }
